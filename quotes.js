const quoteArray = [
  "Life is pain, Highness. Anyone who says differently is selling something.",
  "If you wish to make anything from scratch, you must first invent the Universe",
  "In reality, all models are wrong. The practical question is, how wrong does it have to be to not be useful",
  "You shouldn't learn anything just because you have to. You must feel the need for it in your own Universe",
  "If you think it is hard to get humans to follow traffic laws, imagine convincing an astroid to move along an ellipse - the grand design",
  "Today you, tomorrow me. - reddit",
  "I don't want to float. I want to swim",
  "'Just be yourself' only works if you’re like, super cool to begin with!",
  "Never fall in love with your code. When time comes, be ready to throw it away",
  "Technology steamroller",
  "In the long run, all of us are dead.",
  "Today is the first day of the rest of your life.",
  "Your life is ending one minute at a time. If you were to die tomorrow, what would you do today?",
  "It is never to late to become what you never were.",
  "The ability to learn, the means of learning, the tools of learning, are abundant and infinite. It’s the desire that’s incredibly scarce."
]

exports.getQuote = function() {
  var rid = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[rid];
}
