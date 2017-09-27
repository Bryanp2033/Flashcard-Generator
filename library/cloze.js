function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, "_______")
}


var BirdCloze = new ClozeCard("The Ostrich is the fastest bird on foot","Ostrich")

module.exports = ClozeCard;
