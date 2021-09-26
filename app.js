var categories = ['Movie', 'Geography', 'Animals'];

var words = [['FINDING NEMO', 'INCEPTION', 'AVENGERS', 'SHAWSHANK REDEMPTION'],
 ['AFRICA', 'RUSSIA', 'VATICAN CITY', 'CALIFORNIA'],
 ['PANDA', 'CROCODILE', 'ELEPHANT', 'SQUIRREL']];

var clues = [['Gold fish', 'Christopher Nolan', 'Superhero Epic', 'Top rated movie'],
 ['Largest Continent', 'Largest Country', 'Smallest Country', 'Silicon Valley'],
 ['Black and White', 'Land and Water', 'Largest Animal', 'Lives on Trees']];

var category_num = -1;
var word_num = -1;
var word;
var guess = '';

function game() {
  category_num = Math.floor(Math.random() * categories.length);
  word_num = Math.floor(Math.random() * words[category_num].length);

  word = words[category_num][word_num];

  document.getElementById('category').textContent = categories[category_num]
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      guess += '- '
    } else {
      guess += '_ '
    }
  }
  document.getElementById('word').textContent = guess;

  letter_list = document.createElement('div');
  letter_list.classList.add('letter-list');
  letter_list.id = 'letters';

  for (var i = 65; i < 91; i++) {
    letter = document.createElement('div');
    letter.classList.add('alphabet');
    letter.id = String.fromCharCode(i);
    letter.textContent = String.fromCharCode(i);
    letter.addEventListener('click', (e) => { letter_clicked(e)});
    letter_list.appendChild(letter);
  }

  document.getElementById('buttons').appendChild(letter_list);
}

document.addEventListener("DOMContentLoaded", game)

function animate(lives) {
  drawArray[lives]();
}

function check(letter) {
  var flag = false;
  var old_str = document.getElementById('word').textContent;
  var new_str = '';

  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      new_str += letter + ' ';
      flag = true;
    } else {
      new_str += old_str[2 * i] + ' ';
    }
  }
  document.getElementById('word').textContent = new_str;
  return flag;
}

function letter_clicked(e) {
  target = e.target;
  var lives = Math.floor(document.getElementById('lives').textContent);

  var flag = true;
  var class_list = target.classList;
  for (var class_name of class_list) {
    if (class_name === 'used') {
      flag = false;
    }
  }

  if (flag) {
    var correct = check(target.id);
    target.classList.add('used');
    if (correct == false) {
      lives -=1;
      document.getElementById('lives').textContent = lives;

      if (lives == 0) {
        document.getElementById('gameover').textContent = 'GAME OVER';
      }
      animate(lives);
    }
  }
}

document.getElementById('clue-button').onclick = () => {
  document.getElementById('clue').textContent = clues[category_num][word_num];
}

document.getElementById('play-button').onclick = () => {
  location = location;
};

// Defining canvas
myCanvas = document.getElementById("hangman");
ctx = myCanvas.getContext('2d');

function draw(fromX, fromY, toX, toY) {
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

frame1 = function() {
  draw(0, 150, 150, 150);
};

frame2 = function() {
  draw(10, 0, 10, 600);
};

frame3 = function() {
  draw(0, 5, 70, 5);
};

frame4 = function() {
  draw(60, 5, 60, 15);
};

head = function() {
  ctx.beginPath();
  ctx.arc(60, 25, 10, 0, Math.PI * 2, true);
  ctx.stroke();
}

torso = function() {
  draw(60, 36, 60, 70);
};

rightArm = function() {
  draw(60, 46, 100, 50);
};

leftArm = function() {
  draw(60, 46, 20, 50);
};

rightLeg = function() {
  draw(60, 70, 100, 100);
};

leftLeg = function() {
  draw(60, 70, 20, 100);
};

var drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];
