function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, "_______")
}

module.exports = ClozeCard;
