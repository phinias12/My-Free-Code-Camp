var quotes = [
  "To lose one parent, Mr Worthing, may be regarded as a misfortune; to lose both looks like carelessness. -Oscar Wilde",
  "The most powerful agent of growth and transformation is something much more basic than any technique: a change of heart. -John Welwood",
  "If anyone claims what is not his, he does not belong to us, and let him come to his seat in hell. -Prophet Muhammad",
  "Next to being one in worshipping God, there is nothing in this world upon which this Church should be united than in upholding and defending the Constitution of the United States. -David Oman McKay",
  "Life is made up of sobs, sniffles, and smiles, with sniffles predominating. -O. Henry",
  "What, courage, man! What though care killed a cat, thou hast mettle enough in thee to kill care. -William Shakespeare",
  "For truth has such a face and such a mien As to be lov'd needs only to be seen. -John Dryden",
  "I don't believe in divorce. I believe in widowhood. - Carolyn Green",
  "I had a dream my life would be different from this hell I am living, so different from what it seemed. Now life has killed the dream I dreamed. -Victor Marie Hugo",
  "ABILITY, n. The natural equipment to accomplish some small part of the meaner ambitions distinguishing able men from dead ones. In the last analysis ability is commonly found to consist mainly in a high degree of solemnity. -Ambrose Gwinett Bierce"
];

function newQuote() {
  var random = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[random];
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(quotes[random]));
}