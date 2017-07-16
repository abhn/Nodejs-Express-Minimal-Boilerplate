const quoteArray = [
  "Life is pain, Highness. Anyone who says differently is selling something.",
  "If you wish to make anything from scratch, you must first invent the Universe",
  "In reality, all models are wrong. The practical question is, how wrong does it have to be to not be useful",
  "You shouldn't learn anything just because you have to. You must feel the need for it in your own Universe"
]

exports.getQuote = function() {
  var rid = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[rid];
}
