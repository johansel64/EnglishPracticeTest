/* =============================================
   UI Layer — Rendering & Screen Management
   ============================================= */
var App = App || {};

App.ui = {
  screens: {},
  currentScreen: 'dashboard',
  currentContainerId: 'questionArea',

  init: function() {
    this.screens = {
      dashboard:  document.getElementById('screen-dashboard'),
      study:      document.getElementById('screen-study'),
      test:       document.getElementById('screen-test'),
      practice:   document.getElementById('screen-practice'),
      flashcards: document.getElementById('screen-flashcards'),
      results:    document.getElementById('screen-results'),
      editor:     document.getElementById('screen-editor'),
      stats:      document.getElementById('screen-stats'),
      vocabquiz:  document.getElementById('screen-vocabquiz')
    };
  },

  show: function(name) {
    Object.values(this.screens).forEach(function(el) {
      if (el) el.classList.remove('active');
    });
    var target = this.screens[name];
    if (target) {
      target.classList.add('active');
      this.currentScreen = name;
    }
  },

  back: function() {
    App.timer.stop();
    App.vocabQuiz.running = false;
    this.show('dashboard');
    this.refreshDashboard();
  },

  toast: function(message, type) {
    type = type || 'info';
    var container = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 3000);
  },

  updateProgress: function(current, total) {
    var pct = Math.round((current / total) * 100);
    var suffix = this.currentContainerId === 'questionAreaPrac' ? 'Prac' : '';
    var fill = document.getElementById('pgFill' + suffix);
    var label = document.getElementById('pgLabel' + suffix);
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = current + ' / ' + total;
  },

  renderTimer: function(seconds) {
    var el = document.getElementById('timerDisplay');
    if (!el) return;
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    var str = m + ':' + (s < 10 ? '0' : '') + s;
    el.textContent = str;
    el.className = 'timer-display';
    if (seconds <= 30) el.classList.add('warning');
    if (seconds <= 10) el.classList.add('danger');
  },

  // ══════════════════════════════════════════════
  // QUESTION RENDERING
  // ══════════════════════════════════════════════
  renderQuestion: function(q, index, total, savedAnswer, containerId) {
    this.currentContainerId = containerId || 'questionArea';
    var container = document.getElementById(this.currentContainerId);
    if (!container) return;
    var h = '';
    h += '<div class="question-block">';
    h += '<div class="question-meta">';
    h += '<span class="question-number">Question ' + (index + 1) + ' of ' + total + '</span>';
    h += '<span class="topic-badge">' + App.helpers.topicName(q.topic) + '</span>';
    h += '<span class="difficulty-badge ' + q.difficulty + '">' + q.difficulty + '</span>';
    h += '</div>';
    h += '<div class="question-text">' + q.question + '</div>';

    if (q.type === 'multiple') {
      h += '<div class="option-list">';
      q.options.forEach(function(opt, i) {
        var checked = (savedAnswer === i) ? ' checked' : '';
        h += '<label class="option-item' + (savedAnswer === i ? ' selected' : '') + '">';
        h += '<input type="radio" name="qa" value="' + i + '"' + checked + '>';
        h += '<span>' + opt + '</span>';
        h += '</label>';
      });
      h += '</div>';
    } else if (q.type === 'fill') {
      var parts = q.text.split('<blank>');
      h += '<div>';
      h += '<span>' + (parts[0] || '') + '</span> ';
      h += '<input type="text" class="input qa-input" value="' + (savedAnswer || '') + '" placeholder="your answer" style="display:inline;width:auto;min-width:200px;">';
      h += ' <span>' + (parts[1] || '') + '</span>';
      h += '</div>';
    } else if (q.type === 'matching') {
      h += '<div>';
      q.pairs.forEach(function(pair, i) {
        h += '<div class="matching-row">';
        h += '<span class="match-left">' + pair.left + '</span>';
        h += '<select class="select qa-select" data-idx="' + i + '">';
        h += '<option value="">-- Select --</option>';
        pair.rightOptions.forEach(function(opt) {
          var sel = (savedAnswer && savedAnswer[i] === opt) ? ' selected' : '';
          h += '<option value="' + opt + '"' + sel + '>' + opt + '</option>';
        });
        h += '</select>';
        h += '</div>';
      });
      h += '</div>';
    } else if (q.type === 'reorder') {
      h += '<div class="reorder-container qa-reorder-drop"></div>';
      h += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;" class="qa-reorder-source">';
      (savedAnswer ? savedAnswer.split(' ') : App.helpers.shuffleArr(q.words.slice())).forEach(function(word) {
        h += '<span class="reorder-chip" draggable="false" data-word="' + word + '">' + word + '</span>';
      });
      h += '</div>';
      h += '<button class="btn btn-ghost btn-sm qa-reorder-reset" style="margin-top:8px;">↺ Reset</button>';
    } else if (q.type === 'error') {
      h += '<div class="error-correction">';
      h += '<div class="error-sentence">' + q.sentence + '</div>';
      h += '<input type="text" class="input qa-input" value="' + (savedAnswer || '') + '" placeholder="Write the corrected sentence">';
      h += '</div>';
    } else if (q.type === 'listening') {
      h += '<div style="text-align:center;margin:16px 0;">';
      h += '<button class="btn btn-primary btn-lg qa-listen-btn" style="font-size:1.4rem;">🔊 Play Audio</button>';
      h += '<p style="margin-top:8px;color:var(--text-muted);font-size:0.8rem;">Click to listen (you can repeat)</p>';
      h += '</div>';
      h += '<input type="text" class="input qa-input" value="' + (savedAnswer || '') + '" placeholder="Type what you hear...">';
    }

    h += '</div>';
    container.innerHTML = h;

    // Option click behavior
    var optionItems = container.querySelectorAll('.option-item');
    optionItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var radio = item.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        optionItems.forEach(function(el) { el.classList.remove('selected'); });
        item.classList.add('selected');
      });
    });

    // Reorder behavior
    if (q.type === 'reorder') {
      this._initReorder(container);
    }

    // Listening button
    if (q.type === 'listening') {
      var lb = container.querySelector('.qa-listen-btn');
      if (lb) {
        lb.addEventListener('click', function() {
          App.speech.speak(q.audioText);
        });
      }
    }

    this.updateProgress(index + 1, total);
  },

  _initReorder: function(container) {
    var source = container.querySelector('.qa-reorder-source');
    var drop = container.querySelector('.qa-reorder-drop');
    var reset = container.querySelector('.qa-reorder-reset');
    if (!source || !drop) return;

    var chips = source.querySelectorAll('.reorder-chip');
    chips.forEach(function(chip) {
      chip.addEventListener('click', function() {
        if (chip.parentElement === source) {
          drop.appendChild(chip);
          chip.classList.add('placed');
        } else {
          source.appendChild(chip);
          chip.classList.remove('placed');
        }
      });
    });

    if (reset) {
      reset.addEventListener('click', function() {
        var placed = drop.querySelectorAll('.reorder-chip');
        placed.forEach(function(c) {
          source.appendChild(c);
          c.classList.remove('placed');
        });
      });
    }
  },

  // ══════════════════════════════════════════════
  // GET ANSWER FROM DOM
  // ══════════════════════════════════════════════
  getAnswer: function(q) {
    var container = document.getElementById(this.currentContainerId);
    if (!container) return undefined;

    if (q.type === 'multiple') {
      var sel = container.querySelector('input[name="qa"]:checked');
      return sel ? parseInt(sel.value) : undefined;
    }
    if (q.type === 'fill' || q.type === 'error' || q.type === 'listening') {
      var inp = container.querySelector('.qa-input');
      return inp ? inp.value.trim() : '';
    }
    if (q.type === 'matching') {
      var selects = container.querySelectorAll('.qa-select');
      var answers = [];
      selects.forEach(function(s) { answers.push(s.value); });
      return answers;
    }
    if (q.type === 'reorder') {
      var chips = container.querySelectorAll('.qa-reorder-drop .reorder-chip');
      var words = [];
      chips.forEach(function(c) { words.push(c.dataset.word); });
      return words.join(' ');
    }
    return undefined;
  },

  // ══════════════════════════════════════════════
  // RESULTS RENDERING
  // ══════════════════════════════════════════════
  showResults: function(questions, userAnswers, score) {
    this.show('results');
    var pct = Math.round((score / questions.length) * 100);
    var msg = '';
    if (pct >= 90) msg = 'Excellent! Ready for the test!';
    else if (pct >= 75) msg = 'Great job! Keep practicing.';
    else if (pct >= 60) msg = 'Good effort! Review the topics you missed.';
    else msg = 'Keep studying! You can improve!';

    document.getElementById('resultScore').textContent = score + ' / ' + questions.length;
    document.getElementById('resultPct').textContent = pct + '%';
    document.getElementById('resultMsg').textContent = msg;

    var reviewHTML = '';
    questions.forEach(function(q, i) {
      var isCorrect = App.helpers.checkCorrect(q, userAnswers[i]);
      reviewHTML += '<div class="review-item ' + (isCorrect ? 'correct' : 'incorrect') + '">';
      reviewHTML += '<div class="q-text"><strong>Q' + (i + 1) + ':</strong> ' + q.question + '</div>';
      reviewHTML += '<div class="your-answer">Your answer: ' + App.helpers.formatUserAns(q, userAnswers[i]) + '</div>';
      if (!isCorrect) {
        reviewHTML += '<div class="correct-answer">Correct: ' + App.helpers.formatCorrectAns(q) + '</div>';
      }
      reviewHTML += '</div>';
    });
    document.getElementById('reviewArea').innerHTML = reviewHTML;

    var reviewBtn = document.getElementById('btnReviewErrors');
    if (reviewBtn) {
      var wrongQuestions = questions.filter(function(q, i) { return !App.helpers.checkCorrect(q, userAnswers[i]); });
      if (wrongQuestions.length > 0) {
        reviewBtn.style.display = 'inline-block';
        reviewBtn.onclick = function() { App.features.reviewMode(wrongQuestions); };
      } else {
        reviewBtn.style.display = 'none';
      }
    }
  },

  // ══════════════════════════════════════════════
  // STUDY GUIDE
  // ══════════════════════════════════════════════
  renderStudyGuide: function() {
    var tabs = document.getElementById('guideTabs');
    var content = document.getElementById('guideContent');
    if (!tabs || !content) return;

    tabs.innerHTML = '';
    App.topics.forEach(function(t) {
      var btn = document.createElement('button');
      btn.className = 'guide-tab';
      btn.textContent = t.name;
      btn.addEventListener('click', function() {
        tabs.querySelectorAll('.guide-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        App.ui.renderGuideSection(t.id);
      });
      tabs.appendChild(btn);
    });

    if (App.topics.length > 0) {
      tabs.querySelector('.guide-tab').classList.add('active');
      this.renderGuideSection(App.topics[0].id);
    }
  },

  renderGuideSection: function(topicId) {
    var content = document.getElementById('guideContent');
    var data = App.studyGuide[topicId];
    if (!content || !data) return;

    var h = '<h3>' + data.title + '</h3>';
    data.sections.forEach(function(sec) {
      if (sec.type === 'h4') h += '<h4>' + sec.text + '</h4>';
      else if (sec.type === 'p') h += '<p>' + sec.text + '</p>';
      else if (sec.type === 'formula') h += '<div class="formula-box">' + sec.text + '</div>';
      else if (sec.type === 'example') h += '<div class="example-box">' + sec.text + '</div>';
      else if (sec.type === 'table') {
        h += '<table class="guide-table"><thead><tr>';
        sec.headers.forEach(function(hd) { h += '<th>' + hd + '</th>'; });
        h += '</tr></thead><tbody>';
        sec.rows.forEach(function(row) {
          h += '<tr>';
          row.forEach(function(cell) { h += '<td>' + cell + '</td>'; });
          h += '</tr>';
        });
        h += '</tbody></table>';
      }
    });
    content.innerHTML = h;
  },

  // ══════════════════════════════════════════════
  // FLASHCARDS
  // ══════════════════════════════════════════════
  currentCard: 0,

  renderFlashcard: function() {
    var cont = document.getElementById('flashcardWrap');
    if (!cont) return;
    this.currentCard = 0;
    this._showCard();
  },

  _showCard: function() {
    var card = App.flashcards[this.currentCard];
    if (!card) return;
    var wrap = document.getElementById('flashcardWrap');
    var count = document.getElementById('flashcardCount');
    wrap.innerHTML = '<div class="flashcard" id="fcCard">'
      + '<div class="flashcard-face flashcard-front"><div class="flashcard-word">' + card.front + '</div><div class="flashcard-hint">' + card.hint + ' — Tap to flip</div></div>'
      + '<div class="flashcard-face flashcard-back"><div class="flashcard-word" style="color:var(--color-secondary);">' + card.back + '</div><div class="flashcard-translation">' + card.front + '</div><div class="flashcard-hint">Tap to flip back</div></div>'
      + '</div>';

    if (count) count.textContent = (this.currentCard + 1) + ' / ' + App.flashcards.length;

    var fc = document.getElementById('fcCard');
    if (fc) fc.addEventListener('click', function() { fc.classList.toggle('flipped'); });
  },

  nextFlashcard: function() {
    this.currentCard = (this.currentCard + 1) % App.flashcards.length;
    this._showCard();
  },

  prevFlashcard: function() {
    this.currentCard = (this.currentCard - 1 + App.flashcards.length) % App.flashcards.length;
    this._showCard();
  },

  // ══════════════════════════════════════════════
  // QUESTION EDITOR
  // ══════════════════════════════════════════════
  renderEditor: function() {
    var list = document.getElementById('editorQuestionList');
    if (!list) return;
    var custom = App.storage.getCustomQuestions();
    if (custom.length === 0) {
      list.innerHTML = '<div class="empty-state"><div class="icon">📝</div><h3>No custom questions yet</h3><p>Add your first question using the form below.</p></div>';
    } else {
      list.innerHTML = '';
      custom.forEach(function(q, i) {
        var div = document.createElement('div');
        div.className = 'review-item';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.innerHTML = '<span><strong>#' + (i + 1) + '</strong> [' + App.helpers.topicName(q.topic) + '] ' + q.question + ' — <em>' + q.type + '</em></span>'
          + '<button class="btn btn-ghost btn-sm" data-del="' + i + '" style="color:var(--color-error);">✕</button>';
        list.appendChild(div);
      });
      list.querySelectorAll('[data-del]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          App.storage.deleteCustomQuestion(parseInt(btn.dataset.del));
          App.ui.renderEditor();
          App.ui.toast('Question deleted', 'info');
        });
      });
    }
  },

  // ══════════════════════════════════════════════
  // DASHBOARD STATS
  // ══════════════════════════════════════════════
  refreshDashboard: function() {
    var h = App.storage.getHistory();
    var total = h.length;
    var avg = total > 0 ? Math.round(h.reduce(function(s, t) { return s + t.pct; }, 0) / total) : 0;
    var best = total > 0 ? Math.max.apply(null, h.map(function(t) { return t.pct; })) : 0;
    var streak = App.storage.getStreak();

    // Update dashboard stats
    var elDash = document.getElementById('dashStats');
    if (elDash) {
      elDash.innerHTML = '<div class="stat-card"><div class="stat-value">' + total + '</div><div class="stat-label">Tests Taken</div></div>'
        + '<div class="stat-card"><div class="stat-value">' + avg + '%</div><div class="stat-label">Avg Score</div></div>'
        + '<div class="stat-card"><div class="stat-value">' + best + '%</div><div class="stat-label">Best Score</div></div>'
        + '<div class="stat-card"><div class="stat-value">🔥 ' + streak + '</div><div class="stat-label">Day Streak</div></div>';
    }

    // Update stats page
    var elStats = document.getElementById('dashStats2');
    if (elStats) {
      elStats.innerHTML = '<div class="stat-card"><div class="stat-value">' + total + '</div><div class="stat-label">Tests Taken</div></div>'
        + '<div class="stat-card"><div class="stat-value">' + avg + '%</div><div class="stat-label">Avg Score</div></div>'
        + '<div class="stat-card"><div class="stat-value">' + best + '%</div><div class="stat-label">Best Score</div></div>'
        + '<div class="stat-card"><div class="stat-value">🔥 ' + streak + '</div><div class="stat-label">Day Streak</div></div>';
    }

    // Stats history list
    var sh = document.getElementById('statsHistory');
    if (sh) {
      if (total === 0) {
        sh.innerHTML = '<div class="empty-state"><div class="icon">📊</div><h3>No history yet</h3><p>Complete a test to see your history here.</p></div>';
      } else {
        sh.innerHTML = '<h3 style="margin-bottom:12px;">Recent Tests</h3>';
        h.slice(-10).reverse().forEach(function(t) {
          var d = new Date(t.date);
          sh.innerHTML += '<div class="review-item" style="display:flex;justify-content:space-between;align-items:center;">'
            + '<span><strong>' + t.score + '/' + t.total + '</strong> — ' + t.mode + '</span>'
            + '<span style="color:var(--text-muted);font-size:0.8rem;">' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + '</span>'
            + '</div>';
        });
      }
    }
  }
};

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════
App.helpers = {
  topicName: function(id) {
    var t = App.topics.find(function(tp) { return tp.id === id; });
    return t ? t.name : (id || 'Unknown');
  },

  shuffleArr: function(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  },

  checkCorrect: function(q, userAnswer) {
    if (userAnswer === undefined || userAnswer === '' || userAnswer === null) return false;
    if (q.type === 'multiple') return userAnswer === q.answer;
    if (q.type === 'fill' || q.type === 'error' || q.type === 'listening') {
      var ua = (userAnswer || '').toLowerCase().trim();
      var variations = q.variations || [q.answer.toLowerCase()];
      return variations.some(function(v) { return v.toLowerCase() === ua; });
    }
    if (q.type === 'matching') {
      return q.pairs.every(function(p, i) { return (userAnswer[i] || '') === p.right; });
    }
    if (q.type === 'reorder') {
      return (userAnswer || '').toLowerCase().trim() === q.answer.toLowerCase().trim();
    }
    return false;
  },

  formatUserAns: function(q, userAnswer) {
    if (userAnswer === undefined || userAnswer === '' || userAnswer === null) return 'No answer';
    if (q.type === 'multiple') return q.options[userAnswer] || 'Invalid';
    if (q.type === 'matching') return Array.isArray(userAnswer) ? userAnswer.join(', ') : '';
    return String(userAnswer);
  },

  formatCorrectAns: function(q) {
    if (q.type === 'multiple') return q.options[q.answer];
    if (q.type === 'matching') return q.pairs.map(function(p) { return p.right; }).join(', ');
    return q.answer;
  }
};
