/* =============================================
   Features — Test, Practice, Flashcards, Timer,
   Speech, Storage, Editor
   ============================================= */
var App = App || {};

// ══════════════════════════════════════════════
// STORAGE (localStorage)
// ══════════════════════════════════════════════
App.storage = {
  getTheme: function()    { return localStorage.getItem('englishlab_theme') || 'light'; },
  setTheme: function(v)   { localStorage.setItem('englishlab_theme', v); },
  getHistory: function()  { try { return JSON.parse(localStorage.getItem('englishlab_history')) || []; } catch(e) { return []; } },
  addHistory: function(entry) {
    var h = this.getHistory();
    h.push(entry);
    localStorage.setItem('englishlab_history', JSON.stringify(h.slice(-50)));
    this.updateStreak();
  },
  getStreak: function() { return parseInt(localStorage.getItem('englishlab_streak')) || 0; },
  updateStreak: function() {
    var today = new Date().toDateString();
    var last = localStorage.getItem('englishlab_last_test');
    if (!last) { localStorage.setItem('englishlab_streak', '1'); localStorage.setItem('englishlab_last_test', today); return; }
    var lastDate = new Date(last);
    var todayDate = new Date(today);
    var diff = (todayDate - lastDate) / (1000 * 60 * 60 * 24);
    if (diff < 1) return; // Already tested today
    if (diff === 1) {
      var s = this.getStreak() + 1;
      localStorage.setItem('englishlab_streak', String(s));
    } else {
      localStorage.setItem('englishlab_streak', '1');
    }
    localStorage.setItem('englishlab_last_test', today);
  },
  getCustomQuestions: function() {
    try { return JSON.parse(localStorage.getItem('englishlab_custom')) || []; } catch(e) { return []; }
  },
  addCustomQuestion: function(q) {
    var arr = this.getCustomQuestions();
    q.id = Date.now();
    arr.push(q);
    localStorage.setItem('englishlab_custom', JSON.stringify(arr));
  },
  deleteCustomQuestion: function(idx) {
    var arr = this.getCustomQuestions();
    arr.splice(idx, 1);
    localStorage.setItem('englishlab_custom', JSON.stringify(arr));
  },
  clearHistory: function() {
    localStorage.removeItem('englishlab_history');
    localStorage.removeItem('englishlab_last_test');
    localStorage.removeItem('englishlab_streak');
  }
};

// ══════════════════════════════════════════════
// THEME
// ══════════════════════════════════════════════
App.theme = {
  init: function() {
    var saved = App.storage.getTheme();
    document.documentElement.setAttribute('data-theme', saved);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = saved === 'dark' ? '☀️' : '🌙';
      btn.title = saved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  },
  toggle: function() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    App.storage.setTheme(next);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
      btn.title = next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }
};

// ══════════════════════════════════════════════
// SPEECH API
// ══════════════════════════════════════════════
App.speech = {
  speak: function(text) {
    if (!('speechSynthesis' in window)) {
      App.ui.toast('Speech not supported in this browser', 'error');
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  }
};

// ══════════════════════════════════════════════
// TIMER
// ══════════════════════════════════════════════
App.timer = {
  interval: null,
  seconds: 0,
  callback: null,

  start: function(totalSeconds, onTick, onEnd) {
    this.stop();
    this.seconds = totalSeconds;
    this.callback = onEnd;
    App.ui.renderTimer(this.seconds);
    var self = this;
    this.interval = setInterval(function() {
      self.seconds--;
      App.ui.renderTimer(self.seconds);
      if (onTick) onTick(self.seconds);
      if (self.seconds <= 0) {
        self.stop();
        if (self.callback) self.callback();
      }
    }, 1000);
  },

  stop: function() {
    if (this.interval) { clearInterval(this.interval); this.interval = null; }
  },

  getSeconds: function() { return this.seconds; }
};

// ══════════════════════════════════════════════
// TEST / PRACTICE MODE
// ══════════════════════════════════════════════
App.features = {
  questions: [],
  currentIdx: 0,
  userAnswers: [],
  score: 0,
  timerEnabled: false,
  topicFilter: null,
  difficultyFilter: 'all',

  // ── Start Test ──
  startTest: function(topicId, difficulty) {
    this.topicFilter = topicId || null;
    this.difficultyFilter = difficulty || 'all';
    this._prepareQuestions();
    this.currentIdx = 0;
    this.userAnswers = [];
    this.score = 0;
    this.timerEnabled = true;

    App.ui.show('test');
    document.getElementById('timerRow').style.display = 'block';

    this._startTimer();

    App.ui.renderQuestion(this.questions[0], 0, this.questions.length, undefined, 'questionArea');
    document.getElementById('testTitle').textContent = topicId
      ? App.helpers.topicName(topicId) + ' Test'
      : 'Full Test';
    document.getElementById('testSubtitle').textContent = this.questions.length + ' questions';
  },

  // ── Start Practice ──
  startPractice: function(topicId, difficulty) {
    this.topicFilter = topicId || null;
    this.difficultyFilter = difficulty || 'all';
    this._prepareQuestions();
    this.currentIdx = 0;
    this.userAnswers = [];
    this.score = 0;
    this.timerEnabled = false;

    App.ui.show('practice');
    document.getElementById('pracTitle').textContent = topicId
      ? App.helpers.topicName(topicId) + ' Practice'
      : 'Practice Mode';

    App.ui.renderQuestion(this.questions[0], 0, this.questions.length, undefined, 'questionAreaPrac');
  },

  _prepareQuestions: function() {
    var pool = App.questionBank.concat(App.storage.getCustomQuestions());
    if (this.topicFilter) {
      pool = pool.filter(function(q) { return q.topic === this.topicFilter; });
    }
    if (this.difficultyFilter !== 'all') {
      pool = pool.filter(function(q) { return q.difficulty === this.difficultyFilter; });
    }
    if (pool.length === 0) {
      App.ui.toast('No questions found for these filters. Using all questions.', 'info');
      pool = App.questionBank.concat(App.storage.getCustomQuestions());
    }
    this.questions = App.helpers.shuffleArr(pool).slice(0, Math.min(20, pool.length));
  },

  _startTimer: function() {
    var total = this.questions.length * 60; // 60 seconds per question
    var self = this;
    App.timer.start(total, null, function() {
      App.ui.toast('Time is up!', 'info');
      self._finish();
    });
  },

  // ── Navigation ──
  goNext: function() {
    this._saveAnswer();
    if (this.currentIdx < this.questions.length - 1) {
      this.currentIdx++;
      App.ui.renderQuestion(this.questions[this.currentIdx], this.currentIdx, this.questions.length, this.userAnswers[this.currentIdx], App.ui.currentContainerId);
    }
  },

  goPrev: function() {
    this._saveAnswer();
    if (this.currentIdx > 0) {
      this.currentIdx--;
      App.ui.renderQuestion(this.questions[this.currentIdx], this.currentIdx, this.questions.length, this.userAnswers[this.currentIdx], App.ui.currentContainerId);
    }
  },

  _saveAnswer: function() {
    this.userAnswers[this.currentIdx] = App.ui.getAnswer(this.questions[this.currentIdx]);
  },

  // ── Submit / Finish ──
  submit: function() {
    this._saveAnswer();
    this._finish();
  },

  _finish: function() {
    App.timer.stop();
    var score = 0;
    var self = this;
    this.questions.forEach(function(q, i) {
      if (App.helpers.checkCorrect(q, self.userAnswers[i])) score++;
    });
    this.score = score;

    // Save to history
    App.storage.addHistory({
      date: new Date().toISOString(),
      score: score,
      total: this.questions.length,
      pct: Math.round((score / this.questions.length) * 100),
      mode: this.topicFilter ? 'Topic: ' + App.helpers.topicName(this.topicFilter) : 'Full Test',
      topic: this.topicFilter,
      difficulty: this.difficultyFilter
    });

    App.ui.showResults(this.questions, this.userAnswers, score);
  },

  // ── Review Mode (practice wrong answers) ──
  reviewMode: function(wrongQuestions) {
    this.questions = wrongQuestions.slice();
    this.currentIdx = 0;
    this.userAnswers = [];
    this.score = 0;
    this.timerEnabled = false;
    App.ui.show('practice');
    document.getElementById('pracTitle').textContent = 'Review — ' + wrongQuestions.length + ' Wrong Answers';
    App.ui.renderQuestion(this.questions[0], 0, this.questions.length, undefined, 'questionAreaPrac');
  },

  // ── Quick Practice (practice feedback) ──
  checkPracticeAnswer: function() {
    var q = this.questions[this.currentIdx];
    var ans = App.ui.getAnswer(q);
    var correct = App.helpers.checkCorrect(q, ans);
    if (correct) {
      App.ui.toast('Correct! ✓', 'success');
    } else {
      App.ui.toast('Incorrect. Correct: ' + App.helpers.formatCorrectAns(q), 'error');
    }
  },

  // ── Question Editor Save ──
  saveNewQuestion: function() {
    var type = document.getElementById('eqType').value;
    var topic = document.getElementById('eqTopic').value;
    var difficulty = document.getElementById('eqDifficulty').value;
    var question = document.getElementById('eqQuestion').value.trim();
    var answer = document.getElementById('eqAnswer').value.trim();

    if (!question || !answer) {
      App.ui.toast('Please fill in question and answer.', 'error');
      return;
    }

    var q = { type: type, topic: topic, difficulty: difficulty, question: question, answer: answer };

    if (type === 'multiple') {
      var opts = document.getElementById('eqOptions').value.split('\n').filter(function(l) { return l.trim(); });
      q.options = opts;
      q.answer = parseInt(answer) || 0;
    } else if (type === 'fill') {
      q.text = question;
      q.variations = answer.split(',').map(function(s) { return s.trim(); });
      q.question = 'Complete:';
      q.answer = q.variations[0];
    } else if (type === 'error') {
      q.sentence = question;
    } else if (type === 'reorder') {
      q.words = question.split(' ');
    } else if (type === 'listening') {
      q.audioText = question;
    } else if (type === 'matching') {
      try { q.pairs = JSON.parse(question); } catch(e) { App.ui.toast('Invalid JSON format for matching', 'error'); return; }
    }

    App.storage.addCustomQuestion(q);
    App.ui.renderEditor();
    App.ui.toast('Question saved!', 'success');

    // Clear form
    document.getElementById('eqQuestion').value = '';
    document.getElementById('eqAnswer').value = '';
    if (document.getElementById('eqOptions')) document.getElementById('eqOptions').value = '';
  },

  // ── Helper: change editor form based on type ──
  updateEditorForm: function() {
    var type = document.getElementById('eqType').value;
    var extra = document.getElementById('eqExtra');
    if (!extra) return;

    if (type === 'multiple') {
      extra.style.display = 'block';
      extra.innerHTML = '<label>Options (one per line):</label><textarea class="input" id="eqOptions" rows="5" placeholder="Option A\nOption B\nOption C\nOption D"></textarea>'
        + '<p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Enter the index (0-based) of the correct option in the Answer field.</p>';
    } else if (type === 'fill') {
      extra.style.display = 'block';
      extra.innerHTML = '<p style="font-size:0.8rem;color:var(--text-muted);">In Question, use &lt;blank&gt; for the gap. In Answer, separate variations with commas.</p>';
    } else if (type === 'matching') {
      extra.style.display = 'block';
      extra.innerHTML = '<p style="font-size:0.8rem;color:var(--text-muted);">Enter as JSON array: [{"left":"Word","right":"Translation","rightOptions":["Opt1","Opt2","Opt3","Opt4"]}]</p>';
    } else {
      extra.style.display = 'none';
    }
  }
};
