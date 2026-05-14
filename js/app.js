/* =============================================
   App Controller — Init, Routing, Shortcuts
   ============================================= */
(function() {

  function init() {
    App.ui.init();
    App.theme.init();
    _populateConfigModal();
    App.ui.refreshDashboard();
    _bindEvents();
    _bindKeyboard();
  }

  function _populateConfigModal() {
    var sel = document.getElementById('configTopic');
    if (!sel) return;
    App.topics.forEach(function(t) {
      var opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.name + ' (' + t.difficulty + ')';
      sel.appendChild(opt);
    });

    // Difficulty filter buttons on dashboard
    var fb = document.getElementById('filterBar');
    if (fb) {
      fb.innerHTML = '<button class="filter-chip active" data-diff="all">All</button>'
        + '<button class="filter-chip" data-diff="beginner">Beginner</button>'
        + '<button class="filter-chip" data-diff="intermediate">Intermediate</button>'
        + '<button class="filter-chip" data-diff="advanced">Advanced</button>';

      fb.querySelectorAll('.filter-chip').forEach(function(chip) {
        chip.addEventListener('click', function() {
          fb.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
          chip.classList.add('active');
        });
      });
    }
  }

  function _bindEvents() {
    var tt = document.getElementById('themeToggle');
    if (tt) tt.addEventListener('click', App.theme.toggle);

    // Dashboard buttons
    _on('btnFullTest', 'click', function() { _showConfig('test'); });
    _on('btnPractice', 'click', function() { _showConfig('practice'); });
    _on('btnFlashcards', 'click', function() { App.ui.show('flashcards'); App.ui.renderFlashcard(); });
    _on('btnStudyGuide', 'click', function() { App.ui.show('study'); App.ui.renderStudyGuide(); });
    _on('btnStats', 'click', function() { App.ui.show('stats'); App.ui.refreshDashboard(); });
    _on('btnEditor', 'click', function() { App.ui.show('editor'); App.ui.renderEditor(); });
    _on('btnVocabQuiz', 'click', function() { App.vocabQuiz.start(); });

    // Test navigation
    _on('btnTestPrev', 'click', function() { App.features.goPrev(); });
    _on('btnTestNext', 'click', function() { App.features.goNext(); });
    _on('btnTestSubmit', 'click', function() { App.features.submit(); });

    // Practice navigation
    _on('btnPracPrev', 'click', function() { App.features.goPrev(); });
    _on('btnPracNext', 'click', function() { App.features.goNext(); });
    _on('btnPracCheck', 'click', function() { App.features.checkPracticeAnswer(); });
    _on('btnPracFinish', 'click', function() { App.features.submit(); });

    // Flashcards
    _on('btnFcPrev', 'click', function() { App.ui.prevFlashcard(); });
    _on('btnFcNext', 'click', function() { App.ui.nextFlashcard(); });
    _on('btnFcSpeak', 'click', function() {
      var card = App.flashcards[App.ui.currentCard];
      if (card) App.speech.speak(card.front);
    });

    // Results
    _on('btnRetry', 'click', function() { App.features.startTest(App.features.topicFilter, App.features.difficultyFilter); });
    _on('btnHome', 'click', function() { App.ui.back(); });

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(function(btn) {
      btn.addEventListener('click', function() { App.ui.back(); });
    });

    // Question Editor
    _on('btnSaveQuestion', 'click', function() { App.features.saveNewQuestion(); });
    var eqType = document.getElementById('eqType');
    if (eqType) eqType.addEventListener('change', function() { App.features.updateEditorForm(); });

    // Stats
    _on('btnClearHistory', 'click', function() {
      if (confirm('Clear all your test history? This cannot be undone.')) {
        App.storage.clearHistory();
        App.ui.refreshDashboard();
        App.ui.toast('History cleared', 'info');
      }
    });

    // Config modal
    _on('btnStartConfigured', 'click', function() {
      var topic = document.getElementById('configTopic').value;
      var diff = document.getElementById('configDiff').value;
      var mode = document.getElementById('configMode').value;
      document.getElementById('configModal').style.display = 'none';
      if (mode === 'test') App.features.startTest(topic || null, diff);
      else App.features.startPractice(topic || null, diff);
    });

    // Close modal on overlay click
    var modal = document.getElementById('configModal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.style.display = 'none';
      });
    }
  }

  function _showConfig(mode) {
    var modal = document.getElementById('configModal');
    var modeSel = document.getElementById('configMode');
    if (modal && modeSel) {
      modeSel.value = mode;
      modal.style.display = 'flex';
    }
  }

  function _on(id, event, fn) {
    var el = document.getElementById(id);
    if (el) el.addEventListener(event, fn);
  }

  function _bindKeyboard() {
    document.addEventListener('keydown', function(e) {
      var screen = App.ui.currentScreen;

      if (e.key === 'Escape' && screen !== 'dashboard') {
        App.ui.back();
        return;
      }

      if (screen === 'test' || screen === 'practice') {
        if (e.key === 'ArrowLeft') { e.preventDefault(); App.features.goPrev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); App.features.goNext(); }
        if (e.key >= '1' && e.key <= '9') {
          var idx = parseInt(e.key) - 1;
          var container = document.getElementById(App.ui.currentContainerId);
          if (container) {
            var radios = container.querySelectorAll('input[name="qa"]');
            if (radios[idx]) {
              e.preventDefault();
              radios[idx].checked = true;
              radios[idx].closest('.option-item').classList.add('selected');
            }
          }
        }
      }

      if (screen === 'flashcards') {
        if (e.key === 'ArrowLeft') { e.preventDefault(); App.ui.prevFlashcard(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); App.ui.nextFlashcard(); }
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          var fc = document.getElementById('fcCard');
          if (fc) fc.classList.toggle('flipped');
        }
        if (e.key === 's') {
          var card = App.flashcards[App.ui.currentCard];
          if (card) App.speech.speak(card.front);
        }
      }

      if (screen === 'vocabquiz' && !App.vocabQuiz.answered) {
        if (e.key >= '1' && e.key <= '9') {
          var idx = parseInt(e.key) - 1;
          var opts = document.querySelectorAll('.vq-option');
          if (opts[idx]) {
            e.preventDefault();
            App.vocabQuiz._check(idx);
          }
        }
      }
    });
  }

  App.init = init;

})();
