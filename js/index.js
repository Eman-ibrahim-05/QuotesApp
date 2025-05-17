var quote = document.getElementById("quote");
var auther = document.getElementById("auther");

var quotesOptions = [
  {
    quote: '"Be yourself; everyone else is already taken."',
    auther: "-Oscar Wilde",
  },
  {
    quote: '"You only live once, but if you do it right, once is enough."',
    auther: "-Mae West",
  },
  {
    quote: '"If you tell the truth, you do not have to remember anything."',
    auther: "-Mark Twain",
  },
  {
    quote: '"A friend is someone who knows all about you and still loves you."',
    auther: "-Elbert Hubbard",
  },
  {
    quote:
      '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    auther: "-Mahatma Gandhi",
  },
  {
    quote: '"A room without books is like a body without a soul."',
    auther: "-Marcus Tullius Cicero",
  },
  {
    quote:
      '"It is better to be hated for what you are than to be loved for what you are not"',
    auther: "-Andre Gide",
  },
  {
    quote: '"The only impossible journey is the one you never begin"',
    auther: "-Tony Robbins",
  },
];

var index = -1;

function getQuotes() {
  var randomQuotes;
  do {
    randomQuotes = Math.floor(Math.random() * quotesOptions.length);
  } while (randomQuotes === index);

  index = randomQuotes;

  quote.innerHTML = quotesOptions[randomQuotes].quote;
  auther.innerHTML = quotesOptions[randomQuotes].auther;
}
