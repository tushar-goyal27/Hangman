var categories = ['Movie', 'Geography', 'Animals'];

var words = [['Finding Nemo', 'Inception', 'Avengers', 'Shawshank Redemption'],
 ['Africa', 'Russia', 'Vatican City', 'California'],
 ['Panda', 'Crocodile', 'Elephant', 'Squirrel']];

var clues = [['Gold fish', 'Christopher Nolan', 'Superhero Epic', 'Top rated movie'],
 ['Largest Continent', 'Largest Country', 'Smallest Country', 'Silicon Valley'],
 ['Black and White', 'Land and Water', 'Largest Animal', 'Lives on Trees']];

var category_num = -1;
var word_num = -1;
var word;

function game() {
  category_num = Math.floor(Math.random() * categories.length);
  word_num = Math.floor(Math.random() * words[category_num].length);

  word = words[category_num][word_num];

  document.getElementById('category').textContent = categories[category_num]
  var guess = '';
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

  for (var i = 97; i < 123; i++) {
    letter = document.createElement('div');
    letter.classList.add('alphabet');
    letter.id = String.fromCharCode(i);
    letter.textContent = String.fromCharCode(i);
    letter_list.appendChild(letter);
  }

  document.getElementById('buttons').appendChild(letter_list);

}


document.addEventListener("DOMContentLoaded", game)
