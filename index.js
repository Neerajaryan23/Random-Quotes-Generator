let Quote = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "The best way to predict the future is to create it.",
  "You miss 100% of the shots you don't take."
];

const btn = document.querySelector(`#btn`);
const output = document.querySelector(`.output`);
const button = document.querySelector(`#resetBtn`);

btn.addEventListener(`click`, function() {
  console.log(`clicked`);
  let random = Math.floor(Math.random()*Quote.length);
  output.textContent = Quote[random];
});

button.addEventListener(`click`, function() {
  output.textContent = ``;
});

