function BasicCard(front, back){
    this.front = front;
    this.back = back;
}

var Bird = new BasicCard("What is the fastest bird on foot?", "Ostrich");
var Shape = new BasicCard("A heptagon is a shape with how many sides?", 7);
var Term = new BasicCard("How long is one regular term for a U.S. Representative?", 2);
var Moon = new BasicCard("Who was the first person to step foot on the moon?", "Neil Armstrong");
var Word = new BasicCard("'Carefully' is an example of what type of word?", "Adverb");

module.exports = BasicCard;