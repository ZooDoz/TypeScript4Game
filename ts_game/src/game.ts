import * as _ from 'lodash'

class CardBox
{
    cards:Array<number>;
    constructor(size: number) 
    {
        this.cards=[size];
        for(var i = 0 ; i < size ; i ++)
           this.cards[i]=i;
        _.shuffle(this.cards);
    }

    show(): void{
        for(var i in this.cards)
            console.log(i);
    }
}

var cb = new CardBox(54);
cb.show();
export{CardBox}