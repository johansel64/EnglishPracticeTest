/* =============================================
   Data Layer — Questions, Study Guide, Topics
   ============================================= */
var App = App || {};

App.topics = [
  { id: 'present-progressive',  name: 'Present Progressive',   difficulty: 'beginner' },
  { id: 'simple-present',       name: 'Simple Present',        difficulty: 'beginner' },
  { id: 'was-were',             name: 'Was / Were',            difficulty: 'beginner' },
  { id: 'countable',            name: 'Countable/Uncountable', difficulty: 'beginner' },
  { id: 'vocabulary',           name: 'Vocabulary',            difficulty: 'beginner' },
  { id: 'past-simple',          name: 'Past Simple',           difficulty: 'intermediate' },
  { id: 'will-going',           name: 'Will vs Be Going To',   difficulty: 'intermediate' },
  { id: 'comparatives',         name: 'Comparatives',          difficulty: 'intermediate' },
  { id: 'prepositions',         name: 'Prepositions',          difficulty: 'intermediate' },
  { id: 'modals',               name: 'Modal Verbs',           difficulty: 'intermediate' },
  { id: 'present-perfect',      name: 'Present Perfect',       difficulty: 'advanced' },
  { id: 'conditionals',         name: 'Conditionals',          difficulty: 'advanced' }
];

App.questionBank = [
  // ══════════════════════════════════════════════
  // PRESENT PROGRESSIVE (18 questions)
  // ══════════════════════════════════════════════
  {
    id: 1, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete with the correct form:',
    text: 'Sarah <blank> (play) tennis right now.',
    answer: 'is playing',
    variations: ['is playing', 'isplaying', "'s playing"]
  },
  {
    id: 2, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete:',
    text: 'They <blank> (not watch) TV at the moment.',
    answer: 'are not watching',
    variations: ['are not watching', "aren't watching", 'arent watching']
  },
  {
    id: 3, type: 'multiple', topic: 'present-progressive', difficulty: 'beginner',
    question: '"_____ you studying English right now?"',
    options: ['Are', 'Is', 'Do', 'Does'],
    answer: 0
  },
  {
    id: 4, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete:',
    text: 'My brother <blank> (read) a book in his room.',
    answer: 'is reading',
    variations: ['is reading', 'isreading', "'s reading"]
  },
  {
    id: 5, type: 'multiple', topic: 'present-progressive', difficulty: 'beginner',
    question: 'The children _____ in the park.',
    options: ['is playing', 'are playing', 'playing', 'plays'],
    answer: 1
  },
  {
    id: 6, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete:',
    text: 'I <blank> (not sleep) right now.',
    answer: 'am not sleeping',
    variations: ['am not sleeping', 'amnot sleeping', "'m not sleeping"]
  },
  {
    id: 7, type: 'multiple', topic: 'present-progressive', difficulty: 'beginner',
    question: 'She _____ a letter to her friend.',
    options: ['writes', 'is writing', 'write', 'are writing'],
    answer: 1
  },
  {
    id: 8, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete:',
    text: 'We <blank> (study) for the exam right now.',
    answer: 'are studying',
    variations: ['are studying', 'arestudying', "'re studying"]
  },
  {
    id: 9, type: 'multiple', topic: 'present-progressive', difficulty: 'beginner',
    question: '"What _____ you doing?" "I\'m cooking dinner."',
    options: ['is', 'are', 'do', 'does'],
    answer: 1
  },
  {
    id: 10, type: 'reorder', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Put the words in the correct order:',
    words: ['is', 'The dog', 'in the garden', 'sleeping'],
    answer: 'The dog is sleeping in the garden'
  },
  {
    id: 11, type: 'error', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'He are working in the office right now.',
    answer: 'He is working in the office right now.',
    explanation: 'With "he", use "is", not "are".'
  },
  {
    id: 12, type: 'multiple', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Look! It _____ outside.',
    options: ['snows', 'is snowing', 'snowing', 'are snowing'],
    answer: 1
  },
  {
    id: 13, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete:',
    text: 'Listen! The birds <blank> (sing).',
    answer: 'are singing',
    variations: ['are singing', 'aresinging', "'re singing"]
  },
  {
    id: 14, type: 'reorder', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Put the words in the correct order:',
    words: ['are', 'Why', 'you', 'crying', '?'],
    answer: 'Why are you crying?'
  },
  {
    id: 15, type: 'error', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'I am not understand this lesson.',
    answer: 'I am not understanding this lesson.',
    explanation: 'Use verb-ing after "am/is/are".'
  },
  {
    id: 16, type: 'listening', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Listen and type what you hear:',
    audioText: 'She is learning English at school.',
    answer: 'she is learning english at school'
  },
  {
    id: 17, type: 'multiple', topic: 'present-progressive', difficulty: 'beginner',
    question: 'My parents _____ TV at the moment.',
    options: ['watch', 'watches', 'are watching', 'is watching'],
    answer: 2
  },
  {
    id: 18, type: 'fill', topic: 'present-progressive', difficulty: 'beginner',
    question: 'Complete:',
    text: 'The cat <blank> (chase) the mouse.',
    answer: 'is chasing',
    variations: ['is chasing', 'ischasing', "'s chasing"]
  },

  // ══════════════════════════════════════════════
  // SIMPLE PRESENT (18 questions)
  // ══════════════════════════════════════════════
  {
    id: 101, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: 'She _____ to school every day.',
    options: ['go', 'goes', 'going', 'is go'],
    answer: 1
  },
  {
    id: 102, type: 'fill', topic: 'simple-present', difficulty: 'beginner',
    question: 'Complete:',
    text: 'They <blank> (live) in San Jose.',
    answer: 'live',
    variations: ['live']
  },
  {
    id: 103, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: '"_____ you like coffee?" "Yes, I do."',
    options: ['Do', 'Does', 'Is', 'Are'],
    answer: 0
  },
  {
    id: 104, type: 'fill', topic: 'simple-present', difficulty: 'beginner',
    question: 'Complete:',
    text: 'My father <blank> (work) at a hospital.',
    answer: 'works',
    variations: ['works']
  },
  {
    id: 105, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: 'He _____ eat meat. He\'s vegetarian.',
    options: ['doesn\'t', 'don\'t', 'isn\'t', 'aren\'t'],
    answer: 0
  },
  {
    id: 106, type: 'fill', topic: 'simple-present', difficulty: 'beginner',
    question: 'Complete:',
    text: 'We <blank> (not have) class on Fridays.',
    answer: 'do not have',
    variations: ['do not have', "don't have", 'dont have']
  },
  {
    id: 107, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: 'The sun _____ in the east.',
    options: ['rise', 'rises', 'rising', 'is rise'],
    answer: 1
  },
  {
    id: 108, type: 'reorder', topic: 'simple-present', difficulty: 'beginner',
    question: 'Put the words in the correct order:',
    words: ['does', 'What time', 'start', 'the class', '?'],
    answer: 'What time does the class start?'
  },
  {
    id: 109, type: 'error', topic: 'simple-present', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'She don\'t like spicy food.',
    answer: 'She doesn\'t like spicy food.',
    explanation: 'With third person (he/she/it), use "doesn\'t".'
  },
  {
    id: 110, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: 'I _____ breakfast at 7 AM every morning.',
    options: ['has', 'have', 'having', 'am have'],
    answer: 1
  },
  {
    id: 111, type: 'fill', topic: 'simple-present', difficulty: 'beginner',
    question: 'Complete:',
    text: 'A doctor <blank> (help) sick people.',
    answer: 'helps',
    variations: ['helps']
  },
  {
    id: 112, type: 'error', topic: 'simple-present', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'Where you live?',
    answer: 'Where do you live?',
    explanation: 'Questions in simple present need "do" or "does".'
  },
  {
    id: 113, type: 'reorder', topic: 'simple-present', difficulty: 'beginner',
    question: 'Put the words in the correct order:',
    words: ['always', 'She', 'her homework', 'does', 'after school'],
    answer: 'She always does her homework after school'
  },
  {
    id: 114, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: '_____ your brother play the guitar?',
    options: ['Do', 'Does', 'Is', 'Are'],
    answer: 1
  },
  {
    id: 115, type: 'fill', topic: 'simple-present', difficulty: 'beginner',
    question: 'Complete:',
    text: 'Costa Ricans <blank> (speak) Spanish.',
    answer: 'speak',
    variations: ['speak']
  },
  {
    id: 116, type: 'listening', topic: 'simple-present', difficulty: 'beginner',
    question: 'Listen and type what you hear:',
    audioText: 'She works at the hospital every day.',
    answer: 'she works at the hospital every day'
  },
  {
    id: 117, type: 'multiple', topic: 'simple-present', difficulty: 'beginner',
    question: 'Water _____ at 100 degrees Celsius.',
    options: ['boil', 'boils', 'boiling', 'is boil'],
    answer: 1
  },
  {
    id: 118, type: 'fill', topic: 'simple-present', difficulty: 'beginner',
    question: 'Complete:',
    text: 'It <blank> (rain) a lot in the rainforest.',
    answer: 'rains',
    variations: ['rains']
  },

  // ══════════════════════════════════════════════
  // WAS / WERE (14 questions)
  // ══════════════════════════════════════════════
  {
    id: 201, type: 'multiple', topic: 'was-were', difficulty: 'beginner',
    question: 'She _____ very happy yesterday.',
    options: ['was', 'were', 'is', 'are'],
    answer: 0
  },
  {
    id: 202, type: 'fill', topic: 'was-were', difficulty: 'beginner',
    question: 'Complete:',
    text: 'They <blank> (be) at the party last night.',
    answer: 'were',
    variations: ['were']
  },
  {
    id: 203, type: 'multiple', topic: 'was-were', difficulty: 'beginner',
    question: 'Where _____ you born?',
    options: ['was', 'were', 'is', 'are'],
    answer: 1
  },
  {
    id: 204, type: 'fill', topic: 'was-were', difficulty: 'beginner',
    question: 'Complete:',
    text: 'I <blank> (not be) at home this morning.',
    answer: 'was not',
    variations: ['was not', "wasn't", 'wasnt']
  },
  {
    id: 205, type: 'error', topic: 'was-were', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'We was at the beach last weekend.',
    answer: 'We were at the beach last weekend.',
    explanation: 'With plural subjects, use "were".'
  },
  {
    id: 206, type: 'multiple', topic: 'was-were', difficulty: 'beginner',
    question: 'The weather _____ cold last night.',
    options: ['was', 'were', 'is', 'are'],
    answer: 0
  },
  {
    id: 207, type: 'fill', topic: 'was-were', difficulty: 'beginner',
    question: 'Complete:',
    text: 'The students <blank> (be) tired after the exam.',
    answer: 'were',
    variations: ['were']
  },
  {
    id: 208, type: 'reorder', topic: 'was-were', difficulty: 'beginner',
    question: 'Put the words in the correct order:',
    words: ['were', 'you', 'Where', 'yesterday', '?'],
    answer: 'Where were you yesterday?'
  },
  {
    id: 209, type: 'multiple', topic: 'was-were', difficulty: 'beginner',
    question: 'My brother and I _____ at the concert.',
    options: ['was', 'were', 'is', 'are'],
    answer: 1
  },
  {
    id: 210, type: 'fill', topic: 'was-were', difficulty: 'beginner',
    question: 'Complete:',
    text: 'He <blank> (not be) happy with the result.',
    answer: 'was not',
    variations: ['was not', "wasn't", 'wasnt']
  },
  {
    id: 211, type: 'error', topic: 'was-were', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'There was many people at the park.',
    answer: 'There were many people at the park.',
    explanation: '"People" is plural, so use "were".'
  },
  {
    id: 212, type: 'listening', topic: 'was-were', difficulty: 'beginner',
    question: 'Listen and type what you hear:',
    audioText: 'It was a beautiful day yesterday.',
    answer: 'it was a beautiful day yesterday'
  },
  {
    id: 213, type: 'multiple', topic: 'was-were', difficulty: 'beginner',
    question: '_____ the movie good?',
    options: ['Was', 'Were', 'Is', 'Are'],
    answer: 0
  },
  {
    id: 214, type: 'fill', topic: 'was-were', difficulty: 'beginner',
    question: 'Complete:',
    text: 'My keys <blank> (be) on the table.',
    answer: 'were',
    variations: ['were']
  },

  // ══════════════════════════════════════════════
  // WILL vs BE GOING TO (14 questions)
  // ══════════════════════════════════════════════
  {
    id: 301, type: 'multiple', topic: 'will-going', difficulty: 'intermediate',
    question: 'I think it _____ rain tomorrow.',
    options: ['will', 'is going to', 'going to', 'will to'],
    answer: 0
  },
  {
    id: 302, type: 'fill', topic: 'will-going', difficulty: 'intermediate',
    question: 'Complete with will or be going to:',
    text: 'Look at those clouds! It <blank> (rain).',
    answer: 'is going to rain',
    variations: ['is going to rain', "'s going to rain"]
  },
  {
    id: 303, type: 'multiple', topic: 'will-going', difficulty: 'intermediate',
    question: 'She _____ study medicine next year.',
    options: ['will', 'is going to', 'going', 'will to'],
    answer: 1
  },
  {
    id: 304, type: 'fill', topic: 'will-going', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'I promise I <blank> (help) you.',
    answer: 'will help',
    variations: ["will help", "'ll help"]
  },
  {
    id: 305, type: 'error', topic: 'will-going', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'I will to travel to Europe next summer.',
    answer: 'I am going to travel to Europe next summer.',
    explanation: 'Do not use "to" after "will". Use "will travel" or "am going to travel".'
  },
  {
    id: 306, type: 'multiple', topic: 'will-going', difficulty: 'intermediate',
    question: '"The phone is ringing!" "I _____ get it."',
    options: ['am going to', 'will', 'going to', 'am will'],
    answer: 1
  },
  {
    id: 307, type: 'reorder', topic: 'will-going', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['going to', 'She', 'buy', 'is', 'a new car'],
    answer: 'She is going to buy a new car'
  },
  {
    id: 308, type: 'fill', topic: 'will-going', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'I have a plan. I <blank> (start) a business.',
    answer: 'am going to start',
    variations: ['am going to start', "'m going to start"]
  },
  {
    id: 309, type: 'multiple', topic: 'will-going', difficulty: 'intermediate',
    question: 'They _____ probably arrive late.',
    options: ['will', 'are going to', 'going to', 'are will'],
    answer: 0
  },
  {
    id: 310, type: 'error', topic: 'will-going', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'We are go to visit our grandparents this weekend.',
    answer: 'We are going to visit our grandparents this weekend.',
    explanation: 'The correct form is "are going to + verb".'
  },
  {
    id: 311, type: 'fill', topic: 'will-going', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'Don\'t worry, I <blank> (be) careful.',
    answer: 'will be',
    variations: ["will be", "'ll be"]
  },
  {
    id: 312, type: 'reorder', topic: 'will-going', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['will', 'you', 'the meeting', 'attend', '?'],
    answer: 'Will you attend the meeting?'
  },
  {
    id: 313, type: 'listening', topic: 'will-going', difficulty: 'intermediate',
    question: 'Listen and type what you hear:',
    audioText: 'I am going to study English tonight.',
    answer: 'i am going to study english tonight'
  },
  {
    id: 314, type: 'multiple', topic: 'will-going', difficulty: 'intermediate',
    question: 'I have already decided. I _____ a doctor.',
    options: ['will become', 'am going to become', 'become', 'will to become'],
    answer: 1
  },

  // ══════════════════════════════════════════════
  // COUNTABLE / UNCOUNTABLE (13 questions)
  // ══════════════════════════════════════════════
  {
    id: 401, type: 'multiple', topic: 'countable', difficulty: 'beginner',
    question: 'How _____ apples do you want?',
    options: ['many', 'much', 'any', 'some'],
    answer: 0
  },
  {
    id: 402, type: 'fill', topic: 'countable', difficulty: 'beginner',
    question: 'Complete:',
    text: 'How <blank> (much/many) water do you drink per day?',
    answer: 'much',
    variations: ['much']
  },
  {
    id: 403, type: 'multiple', topic: 'countable', difficulty: 'beginner',
    question: 'There isn\'t _____ milk in the fridge.',
    options: ['many', 'much', 'some', 'a few'],
    answer: 1
  },
  {
    id: 404, type: 'fill', topic: 'countable', difficulty: 'beginner',
    question: 'Complete:',
    text: 'I have <blank> (a few / a little) friends in this city.',
    answer: 'a few',
    variations: ['a few', 'afew']
  },
  {
    id: 405, type: 'error', topic: 'countable', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'I need some informations about the course.',
    answer: 'I need some information about the course.',
    explanation: '"Information" is uncountable. No -s.'
  },
  {
    id: 406, type: 'multiple', topic: 'countable', difficulty: 'beginner',
    question: 'There are _____ books on the shelf.',
    options: ['much', 'many', 'a little', 'any amount of'],
    answer: 1
  },
  {
    id: 407, type: 'fill', topic: 'countable', difficulty: 'beginner',
    question: 'Complete:',
    text: 'She has <blank> (a little / a few) money saved.',
    answer: 'a little',
    variations: ['a little', 'alittle']
  },
  {
    id: 408, type: 'multiple', topic: 'countable', difficulty: 'beginner',
    question: 'Which word is uncountable?',
    options: ['chair', 'furniture', 'table', 'desk'],
    answer: 1
  },
  {
    id: 409, type: 'reorder', topic: 'countable', difficulty: 'beginner',
    question: 'Put the words in order:',
    words: ['How many', 'do', 'you', 'need', 'eggs', '?'],
    answer: 'How many eggs do you need?'
  },
  {
    id: 410, type: 'error', topic: 'countable', difficulty: 'beginner',
    question: 'Correct the error:',
    sentence: 'I don\'t have much books at home.',
    answer: 'I don\'t have many books at home.',
    explanation: '"Books" are countable, so use "many".'
  },
  {
    id: 411, type: 'multiple', topic: 'countable', difficulty: 'beginner',
    question: 'Can I have _____ sugar in my coffee?',
    options: ['a few', 'a little', 'many', 'few'],
    answer: 1
  },
  {
    id: 412, type: 'fill', topic: 'countable', difficulty: 'beginner',
    question: 'Complete:',
    text: 'There are <blank> (a few / a little) oranges left.',
    answer: 'a few',
    variations: ['a few', 'afew']
  },
  {
    id: 413, type: 'multiple', topic: 'countable', difficulty: 'beginner',
    question: 'I have _____ time before the meeting.',
    options: ['a few minutes of', 'a little', 'many', 'few'],
    answer: 1
  },

  // ══════════════════════════════════════════════
  // VOCABULARY (15 questions)
  // ══════════════════════════════════════════════
  {
    id: 501, type: 'multiple', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Your mother\'s sister is your _____.',
    options: ['aunt', 'cousin', 'niece', 'grandmother'],
    answer: 0
  },
  {
    id: 502, type: 'multiple', topic: 'vocabulary', difficulty: 'beginner',
    question: 'The room where you cook is the _____.',
    options: ['bathroom', 'kitchen', 'living room', 'bedroom'],
    answer: 1
  },
  {
    id: 503, type: 'matching', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Match the family members with their translations:',
    pairs: [
      { left: 'Brother',  right: 'Hermano',  rightOptions: ['Hermano', 'Hermana', 'Primo', 'Tío'] },
      { left: 'Sister',   right: 'Hermana',  rightOptions: ['Hermano', 'Hermana', 'Prima', 'Tía'] },
      { left: 'Uncle',    right: 'Tío',      rightOptions: ['Tío', 'Tía', 'Abuelo', 'Primo'] },
      { left: 'Aunt',     right: 'Tía',      rightOptions: ['Tío', 'Tía', 'Abuela', 'Prima'] }
    ]
  },
  {
    id: 504, type: 'multiple', topic: 'vocabulary', difficulty: 'beginner',
    question: 'An apartment in a tall building is also called a _____.',
    options: ['flat', 'cottage', 'farm', 'cabin'],
    answer: 0
  },
  {
    id: 505, type: 'fill', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Complete with a family word:',
    text: 'My father\'s father is my <blank>.',
    answer: 'grandfather',
    variations: ['grandfather', 'grandpa']
  },
  {
    id: 506, type: 'multiple', topic: 'vocabulary', difficulty: 'beginner',
    question: 'The place where you sleep is the _____.',
    options: ['bathroom', 'bedroom', 'garage', 'garden'],
    answer: 1
  },
  {
    id: 507, type: 'fill', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Complete:',
    text: 'My mother\'s daughter (not me) is my <blank>.',
    answer: 'sister',
    variations: ['sister']
  },
  {
    id: 508, type: 'listening', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Listen and type the word:',
    audioText: 'grandmother',
    answer: 'grandmother'
  },
  {
    id: 509, type: 'multiple', topic: 'vocabulary', difficulty: 'beginner',
    question: 'A small house in the countryside is a _____.',
    options: ['cottage', 'skyscraper', 'mansion', 'basement'],
    answer: 0
  },
  {
    id: 510, type: 'fill', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Complete:',
    text: 'My uncle\'s children are my <blank>.',
    answer: 'cousins',
    variations: ['cousins', 'cousin']
  },
  {
    id: 511, type: 'multiple', topic: 'vocabulary', difficulty: 'intermediate',
    question: 'A person who doesn\'t eat meat is a _____.',
    options: ['vegetarian', 'carnivore', 'chef', 'baker'],
    answer: 0
  },
  {
    id: 512, type: 'fill', topic: 'vocabulary', difficulty: 'intermediate',
    question: 'Complete with the room:',
    text: 'You take a shower in the <blank>.',
    answer: 'bathroom',
    variations: ['bathroom']
  },
  {
    id: 513, type: 'listening', topic: 'vocabulary', difficulty: 'beginner',
    question: 'Listen and type the word:',
    audioText: 'kitchen',
    answer: 'kitchen'
  },
  {
    id: 514, type: 'reorder', topic: 'vocabulary', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['has', 'My house', 'three', 'bedrooms', 'and', 'two bathrooms'],
    answer: 'My house has three bedrooms and two bathrooms'
  },
  {
    id: 515, type: 'multiple', topic: 'vocabulary', difficulty: 'intermediate',
    question: 'The person you are married to is your _____.',
    options: ['spouse', 'sibling', 'cousin', 'relative'],
    answer: 0
  },

  // ══════════════════════════════════════════════
  // PAST SIMPLE (18 questions)
  // ══════════════════════════════════════════════
  {
    id: 601, type: 'multiple', topic: 'past-simple', difficulty: 'intermediate',
    question: 'She _____ to the store yesterday.',
    options: ['go', 'goes', 'went', 'gone'],
    answer: 2
  },
  {
    id: 602, type: 'fill', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Complete with past simple:',
    text: 'They <blank> (visit) their grandparents last weekend.',
    answer: 'visited',
    variations: ['visited']
  },
  {
    id: 603, type: 'multiple', topic: 'past-simple', difficulty: 'intermediate',
    question: 'I _____ a great movie last night.',
    options: ['see', 'saw', 'seen', 'seeing'],
    answer: 1
  },
  {
    id: 604, type: 'fill', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'She <blank> (not go) to the party.',
    answer: 'did not go',
    variations: ['did not go', "didn't go", 'didnt go']
  },
  {
    id: 605, type: 'error', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'I didn\'t went to work yesterday.',
    answer: 'I didn\'t go to work yesterday.',
    explanation: 'After "didn\'t", use the base form of the verb.'
  },
  {
    id: 606, type: 'multiple', topic: 'past-simple', difficulty: 'intermediate',
    question: '_____ you at home last night?',
    options: ['Did', 'Were', 'Was', 'Are'],
    answer: 1
  },
  {
    id: 607, type: 'fill', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'He <blank> (buy) a new car last month.',
    answer: 'bought',
    variations: ['bought']
  },
  {
    id: 608, type: 'reorder', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['did', 'What', 'you', 'last night', 'do', '?'],
    answer: 'What did you do last night?'
  },
  {
    id: 609, type: 'error', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'She goed to the beach on Saturday.',
    answer: 'She went to the beach on Saturday.',
    explanation: '"Go" is irregular: go → went.'
  },
  {
    id: 610, type: 'multiple', topic: 'past-simple', difficulty: 'intermediate',
    question: 'We _____ dinner at a restaurant.',
    options: ['eated', 'ate', 'eat', 'eating'],
    answer: 1
  },
  {
    id: 611, type: 'fill', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'I <blank> (write) an email this morning.',
    answer: 'wrote',
    variations: ['wrote']
  },
  {
    id: 612, type: 'reorder', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['didn\'t', 'He', 'the test', 'pass'],
    answer: 'He didn\'t pass the test'
  },
  {
    id: 613, type: 'listening', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Listen and type what you hear:',
    audioText: 'They went to the cinema yesterday.',
    answer: 'they went to the cinema yesterday'
  },
  {
    id: 614, type: 'multiple', topic: 'past-simple', difficulty: 'intermediate',
    question: 'She _____ her homework before dinner.',
    options: ['do', 'done', 'did', 'does'],
    answer: 2
  },
  {
    id: 615, type: 'fill', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'We <blank> (have) a great time at the party.',
    answer: 'had',
    variations: ['had']
  },
  {
    id: 616, type: 'error', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'Did you saw the accident?',
    answer: 'Did you see the accident?',
    explanation: 'After "did", use the base form: see (not saw).'
  },
  {
    id: 617, type: 'multiple', topic: 'past-simple', difficulty: 'intermediate',
    question: 'He _____ me a beautiful gift.',
    options: ['give', 'gave', 'gived', 'given'],
    answer: 1
  },
  {
    id: 618, type: 'fill', topic: 'past-simple', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'She <blank> (sleep) for ten hours last night.',
    answer: 'slept',
    variations: ['slept']
  },

  // ══════════════════════════════════════════════
  // COMPARATIVES & SUPERLATIVES (14 questions)
  // ══════════════════════════════════════════════
  {
    id: 701, type: 'multiple', topic: 'comparatives', difficulty: 'intermediate',
    question: 'This book is _____ than that one.',
    options: ['more interesting', 'interestinger', 'most interesting', 'interesting'],
    answer: 0
  },
  {
    id: 702, type: 'fill', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Complete with the comparative:',
    text: 'She is <blank> (tall) than her sister.',
    answer: 'taller',
    variations: ['taller']
  },
  {
    id: 703, type: 'multiple', topic: 'comparatives', difficulty: 'intermediate',
    question: 'This is the _____ restaurant in the city.',
    options: ['better', 'best', 'good', 'more good'],
    answer: 1
  },
  {
    id: 704, type: 'fill', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Complete with the superlative:',
    text: 'It was the <blank> (bad) day of my life.',
    answer: 'worst',
    variations: ['worst']
  },
  {
    id: 705, type: 'error', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'My car is more faster than yours.',
    answer: 'My car is faster than yours.',
    explanation: 'Short adjectives use -er, not "more". Faster, not "more faster".'
  },
  {
    id: 706, type: 'multiple', topic: 'comparatives', difficulty: 'intermediate',
    question: 'She is the _____ student in the class.',
    options: ['more intelligent', 'intelligentest', 'most intelligent', 'intelligent'],
    answer: 2
  },
  {
    id: 707, type: 'fill', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'Summer is <blank> (hot) than spring.',
    answer: 'hotter',
    variations: ['hotter']
  },
  {
    id: 708, type: 'reorder', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['is', 'the', 'She', 'in the team', 'fastest', 'runner'],
    answer: 'She is the fastest runner in the team'
  },
  {
    id: 709, type: 'error', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'He is the more tall in his family.',
    answer: 'He is the tallest in his family.',
    explanation: 'Short adjectives: -est for superlatives. "Tallest", not "most tall".'
  },
  {
    id: 710, type: 'fill', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'This exercise is <blank> (easy) than the last one.',
    answer: 'easier',
    variations: ['easier']
  },
  {
    id: 711, type: 'multiple', topic: 'comparatives', difficulty: 'intermediate',
    question: 'English is _____ than I thought.',
    options: ['more easy', 'easier', 'easiest', 'most easy'],
    answer: 1
  },
  {
    id: 712, type: 'listening', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Listen and type what you hear:',
    audioText: 'This is the most expensive car in the world.',
    answer: 'this is the most expensive car in the world'
  },
  {
    id: 713, type: 'multiple', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Mount Everest is the _____ mountain in the world.',
    options: ['higher', 'highest', 'more high', 'most high'],
    answer: 1
  },
  {
    id: 714, type: 'fill', topic: 'comparatives', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'This phone is <blank> (expensive) than that one.',
    answer: 'more expensive',
    variations: ['more expensive']
  },

  // ══════════════════════════════════════════════
  // PREPOSITIONS (14 questions)
  // ══════════════════════════════════════════════
  {
    id: 801, type: 'multiple', topic: 'prepositions', difficulty: 'intermediate',
    question: 'The meeting starts _____ 9 AM.',
    options: ['at', 'in', 'on', 'by'],
    answer: 0
  },
  {
    id: 802, type: 'fill', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Complete with in, on, or at:',
    text: 'My birthday is <blank> March.',
    answer: 'in',
    variations: ['in']
  },
  {
    id: 803, type: 'multiple', topic: 'prepositions', difficulty: 'intermediate',
    question: 'I\'ll see you _____ Monday.',
    options: ['at', 'in', 'on', 'for'],
    answer: 2
  },
  {
    id: 804, type: 'fill', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'The book is <blank> the table.',
    answer: 'on',
    variations: ['on']
  },
  {
    id: 805, type: 'error', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'I was born on 2005.',
    answer: 'I was born in 2005.',
    explanation: 'Use "in" for years, "on" for specific dates.'
  },
  {
    id: 806, type: 'multiple', topic: 'prepositions', difficulty: 'intermediate',
    question: 'She lives _____ New York.',
    options: ['at', 'in', 'on', 'to'],
    answer: 1
  },
  {
    id: 807, type: 'fill', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'I go to work <blank> bus every day.',
    answer: 'by',
    variations: ['by']
  },
  {
    id: 808, type: 'reorder', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['waiting', 'I\'m', 'you', 'for', 'at the station'],
    answer: 'I\'m waiting for you at the station'
  },
  {
    id: 809, type: 'error', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'She is good in playing the piano.',
    answer: 'She is good at playing the piano.',
    explanation: 'Use "good at" for skills and abilities.'
  },
  {
    id: 810, type: 'multiple', topic: 'prepositions', difficulty: 'intermediate',
    question: 'The cat is hiding _____ the bed.',
    options: ['between', 'under', 'on', 'at'],
    answer: 1
  },
  {
    id: 811, type: 'fill', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'We always have dinner <blank> 7 PM.',
    answer: 'at',
    variations: ['at']
  },
  {
    id: 812, type: 'listening', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Listen and type what you hear:',
    audioText: 'The keys are on the kitchen table.',
    answer: 'the keys are on the kitchen table'
  },
  {
    id: 813, type: 'multiple', topic: 'prepositions', difficulty: 'intermediate',
    question: 'He arrived _____ the airport late.',
    options: ['at', 'in', 'on', 'to'],
    answer: 0
  },
  {
    id: 814, type: 'fill', topic: 'prepositions', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'She is interested <blank> learning languages.',
    answer: 'in',
    variations: ['in']
  },

  // ══════════════════════════════════════════════
  // MODAL VERBS (14 questions)
  // ══════════════════════════════════════════════
  {
    id: 901, type: 'multiple', topic: 'modals', difficulty: 'intermediate',
    question: 'You _____ wear a seatbelt in the car. It\'s the law.',
    options: ['must', 'can', 'might', 'would'],
    answer: 0
  },
  {
    id: 902, type: 'fill', topic: 'modals', difficulty: 'intermediate',
    question: 'Complete with can or can\'t:',
    text: 'She <blank> (not) swim. She never learned.',
    answer: 'can\'t',
    variations: ["can't", 'cant', 'cannot']
  },
  {
    id: 903, type: 'multiple', topic: 'modals', difficulty: 'intermediate',
    question: '_____ I borrow your pen, please?',
    options: ['Must', 'Should', 'Can', 'Would'],
    answer: 2
  },
  {
    id: 904, type: 'fill', topic: 'modals', difficulty: 'intermediate',
    question: 'Complete with should or shouldn\'t:',
    text: 'You <blank> eat so much sugar. It\'s not healthy.',
    answer: 'shouldn\'t',
    variations: ["shouldn't", 'shouldnt', 'should not']
  },
  {
    id: 905, type: 'error', topic: 'modals', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'You must to study for the exam.',
    answer: 'You must study for the exam.',
    explanation: 'After modal verbs (must, can, should), use base form without "to".'
  },
  {
    id: 906, type: 'multiple', topic: 'modals', difficulty: 'intermediate',
    question: 'It _____ rain later. Take an umbrella.',
    options: ['must', 'might', 'should to', 'can to'],
    answer: 1
  },
  {
    id: 907, type: 'fill', topic: 'modals', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'I <blank> (can) speak three languages.',
    answer: 'can',
    variations: ['can']
  },
  {
    id: 908, type: 'reorder', topic: 'modals', difficulty: 'intermediate',
    question: 'Put the words in order:',
    words: ['should', 'You', 'more water', 'drink', 'every day'],
    answer: 'You should drink more water every day'
  },
  {
    id: 909, type: 'error', topic: 'modals', difficulty: 'intermediate',
    question: 'Correct the error:',
    sentence: 'He cans speak English very well.',
    answer: 'He can speak English very well.',
    explanation: 'Modal verbs don\'t add -s in third person: "can", not "cans".'
  },
  {
    id: 910, type: 'multiple', topic: 'modals', difficulty: 'intermediate',
    question: 'You _____ smoke here. It\'s prohibited.',
    options: ['mustn\'t', 'don\'t have to', 'should', 'can'],
    answer: 0
  },
  {
    id: 911, type: 'fill', topic: 'modals', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'She <blank> (might) come to the party. She\'s not sure.',
    answer: 'might',
    variations: ['might']
  },
  {
    id: 912, type: 'listening', topic: 'modals', difficulty: 'intermediate',
    question: 'Listen and type what you hear:',
    audioText: 'You should exercise three times a week.',
    answer: 'you should exercise three times a week'
  },
  {
    id: 913, type: 'multiple', topic: 'modals', difficulty: 'intermediate',
    question: '_____ you help me with this heavy box?',
    options: ['Must', 'Could', 'Should to', 'Might to'],
    answer: 1
  },
  {
    id: 914, type: 'fill', topic: 'modals', difficulty: 'intermediate',
    question: 'Complete:',
    text: 'I <blank> (not can) come to the meeting tomorrow.',
    answer: 'can\'t',
    variations: ["can't", 'cant', 'cannot']
  },

  // ══════════════════════════════════════════════
  // PRESENT PERFECT (16 questions)
  // ══════════════════════════════════════════════
  {
    id: 1001, type: 'multiple', topic: 'present-perfect', difficulty: 'advanced',
    question: 'She _____ to Paris three times.',
    options: ['has been', 'has gone', 'went', 'goes'],
    answer: 0
  },
  {
    id: 1002, type: 'fill', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Complete with present perfect:',
    text: 'I <blank> (finish) my homework.',
    answer: 'have finished',
    variations: ['have finished', "'ve finished"]
  },
  {
    id: 1003, type: 'multiple', topic: 'present-perfect', difficulty: 'advanced',
    question: 'He _____ that movie yet.',
    options: ['hasn\'t seen', 'didn\'t see', 'doesn\'t see', 'haven\'t seen'],
    answer: 0
  },
  {
    id: 1004, type: 'fill', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Complete:',
    text: 'She <blank> (live) here since 2010.',
    answer: 'has lived',
    variations: ['has lived', "'s lived"]
  },
  {
    id: 1005, type: 'error', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Correct the error:',
    sentence: 'I have went to the bank this morning.',
    answer: 'I have gone to the bank this morning.',
    explanation: 'Past participle of "go" is "gone", not "went".'
  },
  {
    id: 1006, type: 'multiple', topic: 'present-perfect', difficulty: 'advanced',
    question: 'We _____ each other for ten years.',
    options: ['have known', 'knew', 'know', 'are knowing'],
    answer: 0
  },
  {
    id: 1007, type: 'reorder', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Put the words in order:',
    words: ['Have', 'ever', 'you', 'to Europe', 'been', '?'],
    answer: 'Have you ever been to Europe?'
  },
  {
    id: 1008, type: 'fill', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Complete:',
    text: 'They <blank> (not eat) lunch yet.',
    answer: 'have not eaten',
    variations: ['have not eaten', "haven't eaten", 'havent eaten']
  },
  {
    id: 1009, type: 'error', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Correct the error:',
    sentence: 'She has lived here since five years.',
    answer: 'She has lived here for five years.',
    explanation: 'Use "for" with periods of time (five years), "since" with starting points (2019).'
  },
  {
    id: 1010, type: 'multiple', topic: 'present-perfect', difficulty: 'advanced',
    question: 'I _____ my keys. Can you help me find them?',
    options: ['have lost', 'lost', 'am losing', 'lose'],
    answer: 0
  },
  {
    id: 1011, type: 'fill', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Complete:',
    text: 'He <blank> (already / do) the dishes.',
    answer: 'has already done',
    variations: ['has already done', "'s already done"]
  },
  {
    id: 1012, type: 'listening', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Listen and type what you hear:',
    audioText: 'I have never been to Asia.',
    answer: 'i have never been to asia'
  },
  {
    id: 1013, type: 'multiple', topic: 'present-perfect', difficulty: 'advanced',
    question: '_____ you ever eaten sushi?',
    options: ['Have', 'Has', 'Did', 'Do'],
    answer: 0
  },
  {
    id: 1014, type: 'reorder', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Put the words in order:',
    words: ['has', 'just', 'She', 'the office', 'left'],
    answer: 'She has just left the office'
  },
  {
    id: 1015, type: 'fill', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Complete:',
    text: 'We <blank> (be) friends since childhood.',
    answer: 'have been',
    variations: ['have been', "'ve been"]
  },
  {
    id: 1016, type: 'error', topic: 'present-perfect', difficulty: 'advanced',
    question: 'Correct the error:',
    sentence: 'Did you have ever tried paella?',
    answer: 'Have you ever tried paella?',
    explanation: '"Ever" is used with present perfect, not simple past.'
  },

  // ══════════════════════════════════════════════
  // CONDITIONALS — First Conditional (12 questions)
  // ══════════════════════════════════════════════
  {
    id: 1101, type: 'multiple', topic: 'conditionals', difficulty: 'advanced',
    question: 'If it _____, we will stay home.',
    options: ['rains', 'will rain', 'rained', 'raining'],
    answer: 0
  },
  {
    id: 1102, type: 'fill', topic: 'conditionals', difficulty: 'advanced',
    question: 'Complete the first conditional:',
    text: 'If you study hard, you <blank> (pass) the exam.',
    answer: 'will pass',
    variations: ["will pass", "'ll pass"]
  },
  {
    id: 1103, type: 'multiple', topic: 'conditionals', difficulty: 'advanced',
    question: 'She will be happy if she _____ the job.',
    options: ['gets', 'will get', 'got', 'getting'],
    answer: 0
  },
  {
    id: 1104, type: 'fill', topic: 'conditionals', difficulty: 'advanced',
    question: 'Complete:',
    text: 'If I <blank> (see) him, I will tell him the news.',
    answer: 'see',
    variations: ['see']
  },
  {
    id: 1105, type: 'error', topic: 'conditionals', difficulty: 'advanced',
    question: 'Correct the error:',
    sentence: 'If you will eat too much, you will feel sick.',
    answer: 'If you eat too much, you will feel sick.',
    explanation: 'In first conditional, the if-clause uses simple present, not "will".'
  },
  {
    id: 1106, type: 'multiple', topic: 'conditionals', difficulty: 'advanced',
    question: 'We _____ if we don\'t hurry.',
    options: ['will be late', 'are late', 'late', 'being late'],
    answer: 0
  },
  {
    id: 1107, type: 'reorder', topic: 'conditionals', difficulty: 'advanced',
    question: 'Put the words in order:',
    words: ['will go', 'if', 'to the beach', 'it is sunny', 'We'],
    answer: 'We will go to the beach if it is sunny'
  },
  {
    id: 1108, type: 'fill', topic: 'conditionals', difficulty: 'advanced',
    question: 'Complete:',
    text: 'If she <blank> (not come), I will be disappointed.',
    answer: 'doesn\'t come',
    variations: ["doesn't come", 'does not come', 'doesnt come']
  },
  {
    id: 1109, type: 'error', topic: 'conditionals', difficulty: 'advanced',
    question: 'Correct the error:',
    sentence: 'I will call you if I will arrive early.',
    answer: 'I will call you if I arrive early.',
    explanation: 'If-clause uses simple present, not future.'
  },
  {
    id: 1110, type: 'listening', topic: 'conditionals', difficulty: 'advanced',
    question: 'Listen and type what you hear:',
    audioText: 'If it rains tomorrow, I will stay at home.',
    answer: 'if it rains tomorrow i will stay at home'
  },
  {
    id: 1111, type: 'multiple', topic: 'conditionals', difficulty: 'advanced',
    question: 'If we leave now, we _____ the train.',
    options: ['will catch', 'catch', 'catches', 'caught'],
    answer: 0
  },
  {
    id: 1112, type: 'fill', topic: 'conditionals', difficulty: 'advanced',
    question: 'Complete:',
    text: 'He <blank> (be) angry if you break his phone.',
    answer: 'will be',
    variations: ["will be", "'ll be"]
  }
];

// ══════════════════════════════════════════════
// STUDY GUIDE CONTENT
// ══════════════════════════════════════════════
App.studyGuide = {
  'present-progressive': {
    title: 'Present Progressive (Presente Continuo)',
    sections: [
      { type: 'h4', text: 'Structure (Estructura)' },
      { type: 'formula', text: 'Subject + am/is/are + verb-ing' },
      { type: 'h4', text: 'Conjugation (Conjugación)' },
      { type: 'table', headers: ['Subject', 'To Be', 'Example'], rows: [
        ['I', 'am', 'I am working'],
        ['You', 'are', 'You are studying'],
        ['He/She/It', 'is', 'She is playing'],
        ['We', 'are', 'We are eating'],
        ['They', 'are', 'They are running']
      ]},
      { type: 'h4', text: 'Affirmative (Afirmativo)' },
      { type: 'example', text: 'I am playing / She is working / They are studying' },
      { type: 'h4', text: 'Negative (Negativo)' },
      { type: 'formula', text: 'Subject + am/is/are + NOT + verb-ing' },
      { type: 'example', text: 'I am not sleeping / He is not watching TV' },
      { type: 'h4', text: 'Question (Pregunta)' },
      { type: 'formula', text: 'Am/Is/Are + subject + verb-ing?' },
      { type: 'example', text: 'Are you studying? / Is she working?' },
      { type: 'h4', text: 'Use (Uso)' },
      { type: 'p', text: 'Actions happening RIGHT NOW or at this moment. Also for temporary situations and future arrangements.' },
      { type: 'example', text: 'I am studying English right now.' }
    ]
  },
  'simple-present': {
    title: 'Simple Present (Presente Simple)',
    sections: [
      { type: 'h4', text: 'Structure' },
      { type: 'formula', text: 'Subject + verb (base form)' },
      { type: 'formula', text: 'He/She/It + verb + s/es' },
      { type: 'h4', text: 'Conjugation' },
      { type: 'table', headers: ['Subject', 'Verb', 'Example'], rows: [
        ['I', 'work', 'I work every day'],
        ['You', 'work', 'You work hard'],
        ['He/She/It', 'works', 'She works at ICE'],
        ['We', 'work', 'We work together'],
        ['They', 'work', 'They work here']
      ]},
      { type: 'h4', text: 'Negative' },
      { type: 'formula', text: 'Subject + do/does + NOT + base verb' },
      { type: 'example', text: 'I don\'t like coffee / She doesn\'t eat meat' },
      { type: 'h4', text: 'Question' },
      { type: 'formula', text: 'Do/Does + subject + base verb?' },
      { type: 'example', text: 'Do you speak English? / Does she work here?' },
      { type: 'h4', text: 'Use' },
      { type: 'p', text: 'For habits, routines, general truths, and facts. Signal words: always, usually, often, sometimes, never, every day.' }
    ]
  },
  'was-were': {
    title: 'Was / Were (Pasado del verbo To Be)',
    sections: [
      { type: 'h4', text: 'Structure' },
      { type: 'formula', text: 'I/He/She/It + was' },
      { type: 'formula', text: 'You/We/They + were' },
      { type: 'h4', text: 'Examples' },
      { type: 'table', headers: ['Subject', 'Verb', 'Example'], rows: [
        ['I', 'was', 'I was tired'],
        ['He/She/It', 'was', 'She was happy'],
        ['You', 'were', 'You were late'],
        ['We', 'were', 'We were at home'],
        ['They', 'were', 'They were friends']
      ]},
      { type: 'h4', text: 'Negative' },
      { type: 'formula', text: 'Subject + was/were + NOT' },
      { type: 'example', text: 'I wasn\'t tired / They weren\'t here' },
      { type: 'h4', text: 'Question' },
      { type: 'formula', text: 'Was/Were + subject ...?' },
      { type: 'example', text: 'Was she happy? / Were you at home?' },
      { type: 'h4', text: 'Use' },
      { type: 'p', text: 'To describe states, locations, and feelings in the past. Signal words: yesterday, last week, in 2010.' }
    ]
  },
  'will-going': {
    title: 'Will vs Be Going To (Futuro)',
    sections: [
      { type: 'h4', text: 'Will — Structure' },
      { type: 'formula', text: 'Subject + will + base verb' },
      { type: 'example', text: 'I will help you / She will arrive soon' },
      { type: 'h4', text: 'Be Going To — Structure' },
      { type: 'formula', text: 'Subject + am/is/are + going to + base verb' },
      { type: 'example', text: 'I am going to study / She is going to travel' },
      { type: 'h4', text: 'Key Difference' },
      { type: 'table', headers: ['Use', 'Will', 'Be Going To'], rows: [
        ['Spontaneous decisions', 'I\'ll get the phone!', '✗'],
        ['Predictions (opinion)', 'I think it will rain', '✗'],
        ['Plans (already decided)', '✗', 'I\'m going to study law'],
        ['Predictions (evidence)', '✗', 'Look! It\'s going to rain']
      ]}
    ]
  },
  'countable': {
    title: 'Countable & Uncountable Nouns',
    sections: [
      { type: 'h4', text: 'Countable Nouns' },
      { type: 'p', text: 'Things you can count: apples, books, chairs, people. Use a/an, many, a few, numbers.' },
      { type: 'h4', text: 'Uncountable Nouns' },
      { type: 'p', text: 'Things you CANNOT count: water, rice, information, money, furniture. Use much, a little, some.' },
      { type: 'h4', text: 'Quick Reference' },
      { type: 'table', headers: ['Quantifier', 'Countable', 'Uncountable'], rows: [
        ['Many', '✓ How many apples?', '✗'],
        ['Much', '✗', '✓ How much water?'],
        ['A few', '✓ A few books', '✗'],
        ['A little', '✗', '✓ A little money'],
        ['Some', '✓ Some chairs', '✓ Some rice'],
        ['Any', '✓ Any questions?', '✓ Any milk?']
      ]}
    ]
  },
  'vocabulary': {
    title: 'Vocabulary — Family & Home',
    sections: [
      { type: 'h4', text: 'Family Members (Miembros de la familia)' },
      { type: 'table', headers: ['English', 'Spanish'], rows: [
        ['Mother', 'Madre'], ['Father', 'Padre'], ['Sister', 'Hermana'],
        ['Brother', 'Hermano'], ['Grandmother', 'Abuela'], ['Grandfather', 'Abuelo'],
        ['Aunt', 'Tía'], ['Uncle', 'Tío'], ['Cousin', 'Primo/a'],
        ['Niece', 'Sobrina'], ['Nephew', 'Sobrino'], ['Spouse', 'Esposo/a']
      ]},
      { type: 'h4', text: 'Rooms in a House' },
      { type: 'table', headers: ['English', 'Spanish'], rows: [
        ['Kitchen', 'Cocina'], ['Bedroom', 'Dormitorio'], ['Bathroom', 'Baño'],
        ['Living room', 'Sala'], ['Dining room', 'Comedor'], ['Garage', 'Garaje'],
        ['Garden', 'Jardín'], ['Basement', 'Sótano']
      ]},
      { type: 'h4', text: 'Types of Homes' },
      { type: 'table', headers: ['English', 'Spanish'], rows: [
        ['House', 'Casa'], ['Apartment/Flat', 'Apartamento'], ['Cottage', 'Cabaña'],
        ['Mansion', 'Mansión'], ['Farm', 'Granja']
      ]}
    ]
  },
  'past-simple': {
    title: 'Past Simple (Pasado Simple)',
    sections: [
      { type: 'h4', text: 'Structure' },
      { type: 'formula', text: 'Subject + verb (past form)' },
      { type: 'h4', text: 'Regular Verbs' },
      { type: 'formula', text: 'Base verb + ed' },
      { type: 'example', text: 'work → worked, play → played, study → studied' },
      { type: 'h4', text: 'Common Irregular Verbs' },
      { type: 'table', headers: ['Base', 'Past', 'Base', 'Past'], rows: [
        ['go', 'went', 'come', 'came'], ['have', 'had', 'do', 'did'],
        ['eat', 'ate', 'drink', 'drank'], ['see', 'saw', 'take', 'took'],
        ['buy', 'bought', 'think', 'thought'], ['give', 'gave', 'get', 'got'],
        ['make', 'made', 'know', 'knew'], ['say', 'said', 'tell', 'told'],
        ['write', 'wrote', 'read', 'read'], ['speak', 'spoke', 'find', 'found']
      ]},
      { type: 'h4', text: 'Negative' },
      { type: 'formula', text: 'Subject + did not + base verb' },
      { type: 'example', text: 'I didn\'t go / She didn\'t study' },
      { type: 'h4', text: 'Question' },
      { type: 'formula', text: 'Did + subject + base verb?' },
      { type: 'example', text: 'Did you work yesterday? / Did she come?' },
      { type: 'h4', text: 'Use' },
      { type: 'p', text: 'For completed actions in the past. Signal words: yesterday, last week, in 2010, ago.' }
    ]
  },
  'comparatives': {
    title: 'Comparatives & Superlatives',
    sections: [
      { type: 'h4', text: 'Comparative (Comparar dos cosas)' },
      { type: 'formula', text: 'Short adjectives: adj + er + than' },
      { type: 'example', text: 'She is taller than her sister.' },
      { type: 'formula', text: 'Long adjectives: more + adj + than' },
      { type: 'example', text: 'This book is more interesting than that one.' },
      { type: 'h4', text: 'Superlative (El más...)' },
      { type: 'formula', text: 'Short: the + adj + est' },
      { type: 'example', text: 'She is the tallest in the class.' },
      { type: 'formula', text: 'Long: the most + adj' },
      { type: 'example', text: 'This is the most expensive car.' },
      { type: 'h4', text: 'Irregular Forms' },
      { type: 'table', headers: ['Adjective', 'Comparative', 'Superlative'], rows: [
        ['good', 'better', 'best'], ['bad', 'worse', 'worst'],
        ['far', 'farther/further', 'farthest/furthest'], ['little', 'less', 'least']
      ]}
    ]
  },
  'prepositions': {
    title: 'Prepositions of Time & Place',
    sections: [
      { type: 'h4', text: 'Time — At / In / On' },
      { type: 'table', headers: ['Preposition', 'Use', 'Example'], rows: [
        ['At', 'Specific times', 'at 3 PM, at midnight'],
        ['In', 'Months, years, seasons', 'in June, in 2020'],
        ['On', 'Days and dates', 'on Monday, on May 5th']
      ]},
      { type: 'h4', text: 'Place — At / In / On' },
      { type: 'table', headers: ['Preposition', 'Use', 'Example'], rows: [
        ['At', 'Specific points', 'at the bus stop, at home'],
        ['In', 'Enclosed spaces', 'in the room, in Costa Rica'],
        ['On', 'Surfaces', 'on the table, on the wall']
      ]},
      { type: 'h4', text: 'Common Preposition Phrases' },
      { type: 'example', text: 'interested in, good at, afraid of, wait for, listen to, look at, depend on' }
    ]
  },
  'modals': {
    title: 'Modal Verbs (Verbos Modales)',
    sections: [
      { type: 'h4', text: 'Key Rules' },
      { type: 'p', text: '1. No -s in third person (he can, NOT he cans). 2. No "to" after modals (you must go, NOT you must to go). 3. Use base verb after modals.' },
      { type: 'h4', text: 'Common Modal Verbs' },
      { type: 'table', headers: ['Modal', 'Meaning', 'Example'], rows: [
        ['Can', 'Ability / Permission', 'I can swim / Can I go?'],
        ['Can\'t', 'Impossibility / Prohibition', 'You can\'t smoke here'],
        ['Must', 'Obligation', 'You must wear a seatbelt'],
        ['Mustn\'t', 'Prohibition', 'You mustn\'t tell anyone'],
        ['Should', 'Advice / Recommendation', 'You should study more'],
        ['Shouldn\'t', 'Negative advice', 'You shouldn\'t eat junk food'],
        ['Might', 'Possibility (maybe)', 'It might rain later'],
        ['Could', 'Polite request / Possibility', 'Could you help me?']
      ]}
    ]
  },
  'present-perfect': {
    title: 'Present Perfect (Presente Perfecto)',
    sections: [
      { type: 'h4', text: 'Structure' },
      { type: 'formula', text: 'Subject + have/has + past participle' },
      { type: 'h4', text: 'Examples' },
      { type: 'example', text: 'I have visited Paris. / She has finished her homework.' },
      { type: 'h4', text: 'Negative' },
      { type: 'formula', text: 'Subject + have/has + NOT + past participle' },
      { type: 'example', text: 'I haven\'t seen that movie. / He hasn\'t called yet.' },
      { type: 'h4', text: 'For vs Since' },
      { type: 'table', headers: ['Preposition', 'Use', 'Example'], rows: [
        ['For', 'Duration (period of time)', 'for two years, for a long time'],
        ['Since', 'Starting point', 'since 2019, since Monday, since I was a child']
      ]},
      { type: 'h4', text: 'Use' },
      { type: 'p', text: 'Life experiences (ever/never), recent past with present result (just/already/yet), situations that started in the past and continue now.' }
    ]
  },
  'conditionals': {
    title: 'First Conditional (Primer Condicional)',
    sections: [
      { type: 'h4', text: 'Structure' },
      { type: 'formula', text: 'If + present simple, will + base verb' },
      { type: 'h4', text: 'Examples' },
      { type: 'example', text: 'If it rains, I will take an umbrella.' },
      { type: 'example', text: 'She will pass the exam if she studies.' },
      { type: 'h4', text: 'Key Rule' },
      { type: 'p', text: 'The if-clause uses SIMPLE PRESENT (NOT will). The main clause uses WILL + base verb.' },
      { type: 'h4', text: 'Use' },
      { type: 'p', text: 'For real/possible situations in the future. There is a real possibility the condition will happen.' },
      { type: 'example', text: 'If I have time, I will call you. (It\'s possible I\'ll have time.)' }
    ]
  }
};

// ══════════════════════════════════════════════
// FLASHCARDS DATA
// ══════════════════════════════════════════════
App.flashcards = [
  { front: 'Grandmother', back: 'Abuela', hint: 'Family' },
  { front: 'Kitchen', back: 'Cocina', hint: 'House' },
  { front: 'Beautiful', back: 'Hermoso/a', hint: 'Adjective' },
  { front: 'Dangerous', back: 'Peligroso', hint: 'Adjective' },
  { front: 'Cousin', back: 'Primo/a', hint: 'Family' },
  { front: 'Umbrella', back: 'Paraguas', hint: 'Object' },
  { front: 'Neighborhood', back: 'Vecindario', hint: 'Place' },
  { front: 'Spouse', back: 'Esposo/a', hint: 'Family' },
  { front: 'Siblings', back: 'Hermanos', hint: 'Family' },
  { front: 'Bathroom', back: 'Baño', hint: 'House' },
  { front: 'Garden', back: 'Jardín', hint: 'House' },
  { front: 'Important', back: 'Importante', hint: 'Adjective' },
  { front: 'Building', back: 'Edificio', hint: 'Place' },
  { front: 'Comfortable', back: 'Cómodo', hint: 'Adjective' },
  { front: 'Nephew', back: 'Sobrino', hint: 'Family' },
  { front: 'Niece', back: 'Sobrina', hint: 'Family' },
  { front: 'Ceiling', back: 'Techo (interior)', hint: 'House' },
  { front: 'Floor', back: 'Piso / Suelo', hint: 'House' },
  { front: 'Apartment', back: 'Apartamento', hint: 'House' },
  { front: 'Delicious', back: 'Delicioso', hint: 'Adjective' },
  { front: 'Homework', back: 'Tarea', hint: 'School' },
  { front: 'Schedule', back: 'Horario', hint: 'Work' },
  { front: 'Advice', back: 'Consejo', hint: 'Abstract' },
  { front: 'Knowledge', back: 'Conocimiento', hint: 'Abstract' },
  { front: 'Crowded', back: 'Lleno de gente', hint: 'Adjective' },
  { front: 'Skyline', back: 'Horizonte', hint: 'Place' },
  { front: 'Remember', back: 'Recordar', hint: 'Verb' },
  { front: 'Forget', back: 'Olvidar', hint: 'Verb' },
  { front: 'Believe', back: 'Creer', hint: 'Verb' },
  { front: 'Achieve', back: 'Lograr', hint: 'Verb' }
];
