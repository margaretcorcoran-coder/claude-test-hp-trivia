// ---------- Data ----------

const HOUSES = [
  { key: 'gryffindor', name: 'Gryffindor', emoji: '🦁', className: 'house-gryffindor' },
  { key: 'slytherin', name: 'Slytherin', emoji: '🐍', className: 'house-slytherin' },
  { key: 'hufflepuff', name: 'Hufflepuff', emoji: '🦡', className: 'house-hufflepuff' },
  { key: 'ravenclaw', name: 'Ravenclaw', emoji: '🦅', className: 'house-ravenclaw' },
];

// Points: true/false = 10, easy MC = 15, medium MC = 20, hard MC = 25
const QUESTION_BANK = [
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What is the name of Harry Potter\'s owl?', options: ['Errol', 'Hedwig', 'Pigwidgeon', 'Fawkes'], answer: 1 },
  { type: 'tf', points: 10, question: 'Harry Potter has a lightning-bolt scar on his forehead.', answer: true },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What house is Harry Potter sorted into?', options: ['Slytherin', 'Hufflepuff', 'Gryffindor', 'Ravenclaw'], answer: 2 },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What is the name of the three-headed dog guarding the Philosopher\'s Stone?', options: ['Norbert', 'Fluffy', 'Fang', 'Buckbeak'], answer: 1 },
  { type: 'tf', points: 10, question: 'Hermione Granger is a pure-blood witch.', answer: false },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What position does Harry play on his Quidditch team?', options: ['Keeper', 'Chaser', 'Seeker', 'Beater'], answer: 2 },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What is the incantation for the Disarming Charm?', options: ['Expecto Patronum', 'Expelliarmus', 'Alohomora', 'Wingardium Leviosa'], answer: 1 },
  { type: 'tf', points: 10, question: 'Platform 9¾ is located at King\'s Cross Station.', answer: true },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'Who is the Half-Blood Prince?', options: ['Sirius Black', 'Severus Snape', 'Tom Riddle', 'Remus Lupin'], answer: 1 },
  { type: 'mc', difficulty: 'hard', points: 25, question: 'What creature guards the vaults at Gringotts Bank?', options: ['Basilisk', 'Hippogriff', 'Dragon', 'Thestral'], answer: 2 },
  { type: 'tf', points: 10, question: 'Ron Weasley\'s Patronus is a Jack Russell terrier.', answer: true },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What is the name of Hagrid\'s giant spider?', options: ['Aragog', 'Shelob', 'Tarantula', 'Grawp'], answer: 0 },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What potion allows the drinker to assume the appearance of someone else?', options: ['Veritaserum', 'Polyjuice Potion', 'Amortentia', 'Felix Felicis'], answer: 1 },
  { type: 'tf', points: 10, question: 'Dumbledore\'s full name includes "Percival".', answer: true },
  { type: 'mc', difficulty: 'hard', points: 25, question: 'What is the name of the Weasley family\'s home?', options: ['The Nest', 'The Burrow', 'The Hollow', 'The Roost'], answer: 1 },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'Who teaches Potions during Harry\'s first five years at Hogwarts?', options: ['Horace Slughorn', 'Minerva McGonagall', 'Severus Snape', 'Remus Lupin'], answer: 2 },
  { type: 'tf', points: 10, question: 'A Horcrux is an object in which a witch or wizard has hidden part of their soul.', answer: true },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What is the name of Hermione\'s cat?', options: ['Crookshanks', 'Mrs. Norris', 'Scabbers', 'Trevor'], answer: 0 },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What does the spell "Expecto Patronum" produce?', options: ['A shield of fire', 'A silver guardian animal', 'A beam of light', 'An invisible wall'], answer: 1 },
  { type: 'tf', points: 10, question: 'Neville Longbottom\'s toad is named Trevor.', answer: true },
  { type: 'mc', difficulty: 'hard', points: 25, question: 'What is the name of the Ministry of Magic department that deals with magical creatures?', options: ['Department of Mysteries', 'Department for the Regulation and Control of Magical Creatures', 'Department of Magical Law Enforcement', 'Improper Use of Magic Office'], answer: 1 },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What is Voldemort\'s birth name?', options: ['Tom Marvolo Riddle', 'Salazar Slytherin', 'Gellert Grindelwald', 'Barty Crouch Jr.'], answer: 0 },
  { type: 'tf', points: 10, question: 'The Sorting Hat once considered putting Harry in Slytherin.', answer: true },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What magical object allows the user to relive memories?', options: ['Time-Turner', 'Pensieve', 'Marauder\'s Map', 'Sorcerer\'s Stone'], answer: 1 },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'Who is the caretaker of Hogwarts?', options: ['Argus Filch', 'Rubeus Hagrid', 'Albus Dumbledore', 'Filius Flitwick'], answer: 0 },
  { type: 'tf', points: 10, question: 'Fred and George Weasley are triplets.', answer: false },
  { type: 'mc', difficulty: 'hard', points: 25, question: 'What is the name of the wand that beat Draco Malfoy\'s wand, becoming its master?', options: ['The Phoenix Wand', 'The Elder Wand', 'The Holly Wand', 'The Cedar Wand'], answer: 1 },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What is the name of the game played on broomsticks?', options: ['Gobstones', 'Wizard\'s Chess', 'Quidditch', 'Exploding Snap'], answer: 2 },
  { type: 'tf', points: 10, question: 'Dobby is a house-elf who used to serve the Malfoy family.', answer: true },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What subject does Professor McGonagall teach?', options: ['Potions', 'Transfiguration', 'Charms', 'Herbology'], answer: 1 },
  { type: 'mc', difficulty: 'hard', points: 25, question: 'How many Horcruxes did Voldemort create (including the accidental one)?', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 2 },
  { type: 'tf', points: 10, question: 'Luna Lovegood\'s father is the editor of The Quibbler.', answer: true },
  { type: 'mc', difficulty: 'medium', points: 20, question: 'What does the Marauder\'s Map reveal?', options: ['Hidden treasure', 'The location of every person in Hogwarts', 'The future', 'Secret spells'], answer: 1 },
  { type: 'mc', difficulty: 'easy', points: 15, question: 'What is the name of the Hogwarts Express engine color?', options: ['Blue', 'Green', 'Scarlet', 'Black'], answer: 2 },
  { type: 'tf', points: 10, question: 'Buckbeak is a Hippogriff.', answer: true },
];

const NUM_QUESTIONS = 16;

// ---------- State ----------

let players = [];
let gameQuestions = [];
let currentQuestionIndex = 0;
let currentPlayerIndex = 0;
let answered = false;

// ---------- Setup Screen ----------

const playerInputsEl = document.getElementById('player-inputs');
const addPlayerBtn = document.getElementById('add-player-btn');
const removePlayerBtn = document.getElementById('remove-player-btn');
const sortBtn = document.getElementById('sort-btn');
const setupError = document.getElementById('setup-error');

const MAX_PLAYERS = 4;
const MIN_PLAYERS = 1;

function renderPlayerInputs(count) {
  playerInputsEl.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const row = document.createElement('div');
    row.className = 'player-input-row';
    row.innerHTML = `
      <label for="player-name-${i}">Player ${i + 1}</label>
      <input type="text" id="player-name-${i}" maxlength="20" placeholder="Enter name" />
    `;
    playerInputsEl.appendChild(row);
  }
}

function getPlayerInputCount() {
  return playerInputsEl.querySelectorAll('.player-input-row').length;
}

addPlayerBtn.addEventListener('click', () => {
  const count = getPlayerInputCount();
  if (count < MAX_PLAYERS) {
    renderPlayerInputs(count + 1);
  }
});

removePlayerBtn.addEventListener('click', () => {
  const count = getPlayerInputCount();
  if (count > MIN_PLAYERS) {
    renderPlayerInputs(count - 1);
  }
});

renderPlayerInputs(2);

sortBtn.addEventListener('click', () => {
  const count = getPlayerInputCount();
  const names = [];
  for (let i = 0; i < count; i++) {
    const val = document.getElementById(`player-name-${i}`).value.trim();
    if (!val) {
      setupError.textContent = 'Please enter a name for every player.';
      return;
    }
    names.push(val);
  }
  setupError.textContent = '';
  players = names.map((name) => ({
    name,
    house: null,
    score: 0,
  }));
  showScreen('screen-sorting');
  runSorting();
});

// ---------- Sorting Screen ----------

const sortingStatus = document.getElementById('sorting-status');
const sortedResultsEl = document.getElementById('sorted-results');
const continueToGameBtn = document.getElementById('continue-to-game-btn');

function randomHouse() {
  return HOUSES[Math.floor(Math.random() * HOUSES.length)];
}

function runSorting() {
  sortedResultsEl.innerHTML = '';
  continueToGameBtn.classList.add('hidden');
  let index = 0;

  function sortNext() {
    if (index >= players.length) {
      sortingStatus.textContent = 'Sorting complete!';
      continueToGameBtn.classList.remove('hidden');
      return;
    }
    const player = players[index];
    sortingStatus.textContent = `Sorting ${player.name}...`;
    setTimeout(() => {
      const house = randomHouse();
      player.house = house;
      const div = document.createElement('div');
      div.className = `house-result ${house.className}`;
      div.innerHTML = `
        <div class="player-name">${escapeHtml(player.name)}</div>
        <div class="house-name">${house.emoji} ${house.name}</div>
      `;
      sortedResultsEl.appendChild(div);
      index++;
      sortNext();
    }, 900);
  }

  sortNext();
}

continueToGameBtn.addEventListener('click', () => {
  startGame();
});

// ---------- Game Screen ----------

const scoreboardList = document.getElementById('scoreboard-list');
const questionCounter = document.getElementById('question-counter');
const currentTurnEl = document.getElementById('current-turn');
const pointsBadge = document.getElementById('points-badge');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const feedbackEl = document.getElementById('feedback');
const nextQuestionBtn = document.getElementById('next-question-btn');

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startGame() {
  gameQuestions = shuffle(QUESTION_BANK).slice(0, Math.min(NUM_QUESTIONS, QUESTION_BANK.length));
  currentQuestionIndex = 0;
  currentPlayerIndex = 0;
  players.forEach((p) => (p.score = 0));
  showScreen('screen-game');
  renderScoreboard();
  renderQuestion();
}

function renderScoreboard() {
  scoreboardList.innerHTML = '';
  players.forEach((player, i) => {
    const li = document.createElement('li');
    li.className = 'score-item' + (i === currentPlayerIndex ? ' active-turn' : '');
    li.style.background = 'rgba(255,255,255,0.04)';
    li.innerHTML = `
      <span>${player.house.emoji} ${escapeHtml(player.name)}</span>
      <span class="score-points">${player.score}</span>
    `;
    scoreboardList.appendChild(li);
  });
}

function renderQuestion() {
  answered = false;
  feedbackEl.classList.add('hidden');
  feedbackEl.textContent = '';
  nextQuestionBtn.classList.add('hidden');

  const q = gameQuestions[currentQuestionIndex];
  const player = players[currentPlayerIndex];

  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${gameQuestions.length}`;
  currentTurnEl.textContent = `${player.house.emoji} ${player.name}'s turn`;
  pointsBadge.textContent = `Worth ${q.points} points`;
  questionText.textContent = q.question;

  answersContainer.innerHTML = '';

  if (q.type === 'mc') {
    q.options.forEach((option, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = option;
      btn.addEventListener('click', () => handleAnswer(i === q.answer, btn));
      answersContainer.appendChild(btn);
    });
  } else {
    const trueBtn = document.createElement('button');
    trueBtn.className = 'answer-btn';
    trueBtn.textContent = 'True';
    trueBtn.addEventListener('click', () => handleAnswer(q.answer === true, trueBtn));

    const falseBtn = document.createElement('button');
    falseBtn.className = 'answer-btn';
    falseBtn.textContent = 'False';
    falseBtn.addEventListener('click', () => handleAnswer(q.answer === false, falseBtn));

    answersContainer.appendChild(trueBtn);
    answersContainer.appendChild(falseBtn);
  }

  renderScoreboard();
}

function handleAnswer(isCorrect, clickedBtn) {
  if (answered) return;
  answered = true;

  const q = gameQuestions[currentQuestionIndex];
  const player = players[currentPlayerIndex];
  const buttons = answersContainer.querySelectorAll('.answer-btn');
  buttons.forEach((btn) => (btn.disabled = true));

  clickedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (!isCorrect) {
    // Highlight the correct answer too
    if (q.type === 'mc') {
      buttons[q.answer].classList.add('correct');
    } else {
      const correctText = q.answer ? 'True' : 'False';
      buttons.forEach((btn) => {
        if (btn.textContent === correctText) btn.classList.add('correct');
      });
    }
  }

  feedbackEl.classList.remove('hidden');
  if (isCorrect) {
    player.score += q.points;
    feedbackEl.className = 'feedback correct';
    feedbackEl.textContent = `✅ Correct, ${player.name}! +${q.points} points for ${player.house.name}!`;
  } else {
    feedbackEl.className = 'feedback incorrect';
    feedbackEl.textContent = `❌ Not quite, ${player.name}. No points this round.`;
  }

  renderScoreboard();
  nextQuestionBtn.classList.remove('hidden');
}

nextQuestionBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  if (currentQuestionIndex >= gameQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

// ---------- Results Screen ----------

const winnerBanner = document.getElementById('winner-banner');
const houseCupEl = document.getElementById('house-cup');
const finalScoresEl = document.getElementById('final-scores');
const playAgainBtn = document.getElementById('play-again-btn');

function showResults() {
  showScreen('screen-results');

  const sorted = [...players].sort((a, b) => b.score - a.score);
  const topScore = sorted[0].score;
  const winners = sorted.filter((p) => p.score === topScore);

  if (winners.length === 1) {
    winnerBanner.textContent = `🎉 ${winners[0].name} wins with ${topScore} points! 🎉`;
  } else {
    winnerBanner.textContent = `🎉 It's a tie between ${winners.map((w) => w.name).join(' & ')} with ${topScore} points! 🎉`;
  }

  // House cup: sum points by house
  const houseTotals = {};
  players.forEach((p) => {
    houseTotals[p.house.key] = (houseTotals[p.house.key] || 0) + p.score;
  });
  const houseWinnerKey = Object.keys(houseTotals).reduce((a, b) => (houseTotals[a] >= houseTotals[b] ? a : b));
  const houseWinner = HOUSES.find((h) => h.key === houseWinnerKey);
  houseCupEl.textContent = `${houseWinner.emoji} ${houseWinner.name} wins the House Cup with ${houseTotals[houseWinnerKey]} points!`;

  finalScoresEl.innerHTML = '';
  sorted.forEach((player) => {
    const li = document.createElement('li');
    li.className = 'final-score-item ' + player.house.className + (player.score === topScore ? ' first-place' : '');
    li.innerHTML = `
      <span>${player.house.emoji} ${escapeHtml(player.name)} (${player.house.name})</span>
      <span class="score-points">${player.score} pts</span>
    `;
    finalScoresEl.appendChild(li);
  });
}

playAgainBtn.addEventListener('click', () => {
  players = [];
  showScreen('screen-setup');
});

// ---------- Utils ----------

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
