function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.partial = function(){

        value = this.text.split(" ");
        for(i = 0; i < value.length; i++){
            if(this.cloze == value[i]){
                this.text.replace(value[i] , "______")
                console.log(this.text)
            }
        }

    }
}



var BirdCloze = new ClozeCard("The Ostrich is the fastest bird on foot","Ostrich")

BirdCloze.partial()

module.exports = ClozeCard;
