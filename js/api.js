/* =============================================
   API Vocabulary Quiz — Free Dictionary + Datamuse
   ============================================= */
var App = App || {};

// Word bank (common English words for vocabulary practice)
App.vocabWords = [
  'abandon','ability','abroad','absence','absolute','absorb','abstract','abundant','academy',
  'accelerate','accept','access','accompany','accomplish','account','accurate','achieve',
  'acknowledge','acquire','adapt','adequate','adjust','admire','admit','adopt','advance',
  'advantage','adventure','advertise','advice','affair','affect','afford','agency','aggressive',
  'agreement','agriculture','alarm','alcohol','alternative','amaze','ambition','amount',
  'analyze','ancestor','anniversary','announce','annual','anxiety','apparent','appeal',
  'appetite','appliance','application','appoint','appreciate','approach','appropriate',
  'approve','architecture','argue','arrange','arrest','arrival','article','artificial',
  'aspect','assemble','assess','assign','assist','associate','assume','atmosphere',
  'attach','attempt','attend','attitude','attract','audience','authority','available',
  'average','avoid','aware','balance','barrier','battle','behave','belief','beneath',
  'benefit','bitter','boundary','brave','breathe','brief','brilliant','broadcast',
  'budget','burden','calculate','campaign','capable','capacity','capture','career',
  'category','celebrate','challenge','champion','channel','chapter','characteristic',
  'charity','chemical','circumstance','citizen','civilization','claim','classic','climate',
  'colleague','collection','combine','comfort','command','comment','commerce','commit',
  'communicate','community','companion','compare','compete','complain','complex',
  'component','concentrate','concept','concern','conclude','condition','conduct',
  'conference','confidence','confirm','conflict','confuse','connect','conscious',
  'consequence','conservative','consider','consistent','constant','construct','consume',
  'contact','contemporary','content','contest','context','contract','contribute',
  'controversy','convenient','convention','convince','cooperate','coordinate','corporation',
  'correspond','council','courage','create','credit','criminal','crisis','criticize',
  'crucial','cultivate','curiosity','current','debate','decade','declare','decline',
  'decorate','defend','define','definitely','deliver','demand','demonstrate','depart',
  'depend','depict','deposit','describe','deserve','design','desire','desperate',
  'destination','destroy','detect','determine','develop','device','devote','dialogue',
  'dimension','direction','disappear','discipline','discover','discrimination','disease',
  'display','dispute','distinct','distinguish','distribute','district','diverse',
  'document','domestic','dominate','draft','dramatic','dynamic','economic','edition',
  'educate','effective','efficient','elaborate','element','eliminate','embrace','emerge',
  'emotion','emphasis','employ','enable','encounter','encourage','energy','engage',
  'enormous','ensure','enterprise','entertain','enthusiasm','entire','environment',
  'episode','equal','equipment','essential','establish','estate','estimate','evaluate',
  'eventually','evidence','evolve','examine','exception','exchange','excitement',
  'exclude','execute','exhibit','exist','expand','expect','expense','experiment',
  'expert','explain','exploit','explore','export','expose','extend','external',
  'extraordinary','extreme','facility','factor','familiar','fascinate','fashion',
  'feature','federal','fiction','finance','flexible','flourish','focus','forbid',
  'forecast','foreign','formal','former','formula','fortune','foundation','fragment',
  'framework','freedom','frequency','frustrate','function','fundamental','furthermore',
  'gather','generate','generous','genuine','gesture','global','govern','gradual',
  'guarantee','guidance','habitat','handle','harmony','hazard','hesitate','highlight',
  'horizon','hostile','household','identify','ignore','illegal','illustrate','imagination',
  'immediate','immigrant','impact','implement','implication','impose','impress',
  'incident','include','income','incorporate','indicate','individual','industry',
  'influence','inform','ingredient','initial','initiative','injure','innovation',
  'inquire','insert','inspect','inspire','install','instance','institution','instrument',
  'insurance','integrate','intellectual','intelligence','intense','interact','internal',
  'interpret','intervention','intimate','invade','invest','investigate','investment',
  'involve','isolate','journal','judgment','justice','justify','knowledge','landscape',
  'launch','leadership','legislation','liberty','likewise','limitation','literature',
  'location','maintain','majority','manage','manifest','manipulate','manufacture',
  'margin','maximum','mechanism','medium','mental','method','migration','military',
  'minimum','minority','mission','modify','monitor','motivate','movement','mystery',
  'narrative','negotiate','network','nevertheless','normal','notion','nowadays',
  'numerous','objective','obligation','observation','obtain','obvious','occupation',
  'offensive','operate','opponent','opportunity','oppose','organic','organize','original',
  'outcome','overcome','overwhelm','participate','particular','passion','patience',
  'pattern','penalty','perceive','percentage','perform','period','permanent','permit',
  'personality','perspective','phenomenon','philosophy','physical','pleasure','policy',
  'political','population','portion','portray','position','positive','possess','potential',
  'poverty','practical','precious','precise','predict','prefer','pregnant','prejudice',
  'presence','preserve','pressure','presumably','prevail','prevent','previous','principle',
  'priority','procedure','process','professional','profit','program','progress','project',
  'promote','prompt','proportion','proposal','prospect','protection','protein','protest',
  'provide','province','psychological','publish','purchase','pursue','qualify','quantity',
  'radical','random','range','rapid','reaction','reality','reasonable','rebel','recession',
  'recognition','recommend','recover','recruit','reduce','refer','reflect','reform',
  'regard','region','register','regulate','reject','relate','release','relevant','relief',
  'religion','rely','remain','remarkable','remedy','remote','remove','renew','replace',
  'represent','reputation','request','require','resemble','reserve','resident','resign',
  'resist','resolution','resolve','resource','respond','restore','restrict','retain',
  'retire','reveal','revenue','reverse','revolution','rhythm','rival','routine','sacred',
  'sacrifice','satellite','satisfaction','schedule','scheme','scholar','scope','screen',
  'security','segment','select','senior','sequence','session','settle','severe','shelter',
  'signal','significance','similar','situation','slightly','society','solution','somewhat',
  'source','specific','spectrum','spiritual','stability','standard','statistics','status',
  'stimulate','strategy','strengthen','structure','struggle','subsequent','substance',
  'substitute','succeed','sufficient','suggest','summary','superior','supply','support',
  'suppose','supreme','surface','surround','survive','suspect','suspend','sustain',
  'symbol','symptom','target','technique','technology','temporary','tendency','tension',
  'terminal','territory','testimony','texture','therefore','threaten','tolerance',
  'tradition','transfer','transform','transition','transport','treaty','trigger','triumph',
  'ultimate','undergo','undertake','unemployment','unfortunately','unique','universal',
  'urban','utilize','valid','variation','vehicle','venture','version','vessel','victim',
  'violence','visible','vision','volume','voluntary','vulnerable','welfare','whereas',
  'widespread','witness','yield'
];

// ══════════════════════════════════════════════
// API FETCHING
// ══════════════════════════════════════════════
App.api = {
  fetchDefinition: async function(word) {
    try {
      var r = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word));
      if (!r.ok) return null;
      var data = await r.json();
      if (!data || !data[0]) return null;
      return data[0];
    } catch(e) { return null; }
  },

  fetchSynonyms: async function(word) {
    try {
      var r = await fetch('https://api.datamuse.com/words?rel_syn=' + encodeURIComponent(word) + '&max=10');
      if (!r.ok) return [];
      return await r.json();
    } catch(e) { return []; }
  },

  randomWord: function() {
    var w = App.vocabWords;
    return w[Math.floor(Math.random() * w.length)];
  },

  randomWordList: function(n) {
    return App.helpers.shuffleArr(App.vocabWords).slice(0, n);
  },

  // Build a vocabulary question from API data
  buildQuestion: async function(mode) {
    var word = this.randomWord();
    var entry;
    try { entry = await this.fetchDefinition(word); } catch(e) { return null; }
    if (!entry) return null;

    var meanings = entry.meanings || [];
    var phonetic = entry.phonetic || (entry.phonetics && entry.phonetics.find(function(p) { return p.text; }) || {}).text || '';
    var audioUrl = (entry.phonetics || []).find(function(p) { return p.audio && p.audio.indexOf('https') === 0; });
    audioUrl = audioUrl ? audioUrl.audio : null;

    if (mode === 'definition') {
      var defObj = meanings[0] && meanings[0].definitions ? meanings[0].definitions[0] : null;
      if (!defObj || !defObj.definition) return null;
      var correct = defObj.definition;
      var wrongs = [];
      var words = this.randomWordList(5);
      for (var i = 0; i < words.length; i++) {
        try {
          var d = await this.fetchDefinition(words[i]);
          var def = d && d.meanings && d.meanings[0] && d.meanings[0].definitions ? d.meanings[0].definitions[0].definition : null;
          if (def && def !== correct) wrongs.push(def);
        } catch(e) {}
        if (wrongs.length >= 3) break;
      }
      if (wrongs.length < 2) return null;
      return {
        type: 'definition',
        word: word,
        phonetic: phonetic,
        audioUrl: audioUrl,
        prompt: 'What does "' + word + '" mean?',
        correct: correct,
        options: App.helpers.shuffleArr([correct].concat(wrongs.slice(0, 3)))
      };
    }

    if (mode === 'synonym') {
      var syns;
      try { syns = await this.fetchSynonyms(word); } catch(e) { return null; }
      if (!syns || syns.length === 0) return null;
      var synonym = syns[0].word;
      var wlist = this.randomWordList(4).filter(function(w) { return w !== word && w !== synonym; });
      return {
        type: 'synonym',
        word: word,
        phonetic: phonetic,
        audioUrl: audioUrl,
        prompt: 'Which word is a synonym of "' + word + '"?',
        correct: synonym,
        options: App.helpers.shuffleArr([synonym].concat(wlist.slice(0, 3)))
      };
    }

    if (mode === 'fill') {
      var d2 = meanings[0] && meanings[0].definitions ? meanings[0].definitions[0] : null;
      var example = d2 && d2.example ? d2.example : null;
      if (!example) return null;
      var re = new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      var blank = example.replace(re, '___');
      if (!blank || blank.indexOf('___') === -1) return null;
      var candidates = this.randomWordList(4).filter(function(w) { return w !== word; });
      return {
        type: 'fill',
        word: word,
        phonetic: phonetic,
        audioUrl: audioUrl,
        prompt: 'Complete: "' + blank + '"',
        correct: word,
        options: App.helpers.shuffleArr([word].concat(candidates.slice(0, 3)))
      };
    }

    if (mode === 'audio') {
      if (!audioUrl) return null;
      var cands = this.randomWordList(4).filter(function(w) { return w !== word; });
      return {
        type: 'audio',
        word: word,
        phonetic: phonetic,
        audioUrl: audioUrl,
        prompt: 'Listen and choose the correct word:',
        correct: word,
        options: App.helpers.shuffleArr([word].concat(cands.slice(0, 3)))
      };
    }

    return null;
  }
};

// ══════════════════════════════════════════════
// VOCABULARY QUIZ CONTROLLER
// ══════════════════════════════════════════════
App.vocabQuiz = {
  question: null,
  answered: false,
  score: 0,
  total: 0,
  modes: ['definition', 'synonym', 'fill', 'audio'],
  running: false,

  start: function() {
    App.ui.show('vocabquiz');
    this.score = 0;
    this.total = 0;
    this.running = true;
    document.getElementById('vqScore').textContent = '0 / 0';
    document.getElementById('vqArea').innerHTML = '<div class="empty-state"><div class="icon">⏳</div><h3>Loading question...</h3><p>Fetching from dictionary APIs.</p></div>';
    this.loadQuestion();
  },

  exit: function() {
    this.running = false;
    App.ui.back();
  },

  loadQuestion: async function() {
    if (!this.running) return;
    document.getElementById('vqArea').innerHTML = '<div class="empty-state"><div class="icon">⏳</div><h3>Loading...</h3></div>';
    var mode = this.modes[Math.floor(Math.random() * this.modes.length)];
    var q = null;
    for (var i = 0; i < 5; i++) {
      q = await App.api.buildQuestion(mode);
      if (q) break;
    }
    if (!q) {
      q = await App.api.buildQuestion('definition');
    }
    if (!q) {
      document.getElementById('vqArea').innerHTML = '<div class="empty-state"><div class="icon">❌</div><h3>Could not load question</h3><p>Check your internet connection and try again.</p><button class="btn btn-primary" onclick="App.vocabQuiz.loadQuestion()">Retry</button></div>';
      return;
    }
    this.question = q;
    this.answered = false;
    this._render();
  },

  _render: function() {
    var q = this.question;
    var area = document.getElementById('vqArea');
    if (!area) return;

    var h = '<div class="question-block">';
    h += '<div class="question-meta">';
    h += '<span class="topic-badge">Vocabulary</span>';
    if (q.phonetic) h += '<span style="color:var(--text-muted);font-size:0.85rem;"> ' + q.phonetic + '</span>';
    h += '</div>';
    h += '<div class="question-text" style="font-size:1.15rem;">' + q.prompt + '</div>';

    if (q.audioUrl) {
      h += '<div style="text-align:center;margin:10px 0;">';
      h += '<button class="btn btn-outline btn-sm" onclick="App.speech.speak(\'' + q.word + '\')">🔊 Pronounce</button>';
      if (q.type === 'audio') {
        h += '<button class="btn btn-primary btn-sm" style="margin-left:8px;" onclick="(new Audio(\'' + q.audioUrl + '\')).play()">▶ Play Audio</button>';
      }
      h += '</div>';
    }

    h += '<div class="option-list">';
    q.options.forEach(function(opt, i) {
      h += '<div class="option-item vq-option" data-idx="' + i + '" style="font-size:0.9rem;">';
      h += '<span style="font-weight:600;color:var(--color-primary);margin-right:8px;">' + String.fromCharCode(65 + i) + '</span>';
      h += '<span>' + opt + '</span>';
      h += '</div>';
    });
    h += '</div>';
    h += '</div>';

    h += '<div id="vqFeedback" style="margin-top:16px;"></div>';

    area.innerHTML = h;

    var self = this;
    area.querySelectorAll('.vq-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        if (self.answered) return;
        var idx = parseInt(opt.dataset.idx);
        self._check(idx);
      });
    });
  },

  _check: function(idx) {
    this.answered = true;
    this.total++;
    var q = this.question;
    var selected = q.options[idx];
    var isCorrect = (selected === q.correct);
    if (isCorrect) this.score++;

    document.getElementById('vqScore').textContent = this.score + ' / ' + this.total;

    var fb = document.getElementById('vqFeedback');
    var options = document.querySelectorAll('.vq-option');
    options.forEach(function(op, i) {
      op.style.pointerEvents = 'none';
      if (q.options[i] === q.correct) {
        op.style.borderColor = 'var(--color-success)';
        op.style.background = 'var(--color-success-light)';
      } else if (i === idx && !isCorrect) {
        op.style.borderColor = 'var(--color-error)';
        op.style.background = 'var(--color-error-light)';
      }
    });

    fb.innerHTML = '<div style="text-align:center;">'
      + (isCorrect
        ? '<span style="color:var(--color-success);font-weight:700;font-size:1.1rem;">Correct! ✓</span>'
        : '<span style="color:var(--color-error);font-weight:700;font-size:1.1rem;">Incorrect ✗</span>')
      + ' <span style="color:var(--text-secondary);">The answer is: <strong>' + q.correct + '</strong></span>'
      + '</div>'
      + '<div style="text-align:center;margin-top:10px;">'
      + '<button class="btn btn-primary" onclick="App.vocabQuiz.loadQuestion()">Next Question →</button>'
      + '<button class="btn btn-secondary btn-sm" onclick="App.vocabQuiz.exit()" style="margin-left:8px;">Exit</button>'
      + '</div>';
  }
};
