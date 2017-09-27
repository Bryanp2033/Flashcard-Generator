function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.partial = function(){
        new_word = this.text.replace(this.cloze, "_______")
        console.log(new_word)
    }
}



var BirdCloze = new ClozeCard("The Ostrich is the fastest bird on foot","Ostrich")

BirdCloze.partial()

module.exports = ClozeCard;
