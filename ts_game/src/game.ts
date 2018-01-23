import * as _ from 'lodash'

class CardBox
{
    cards:Array<number>;
    constructor(size: number) 
    {
        this.cards=[size];
        for(let i = 0 ; i < size ; i ++)
            this.cards[i]=i;
       this.cards = _.shuffle(this.cards);
       
    }

    show(): void
    {
        //in是遍历key值
        for(let i in this.cards)
            console.log(this.cards[i]);
    }
}

var cb = new CardBox(54);
cb.show();
export{CardBox}