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
        console.log(this.cards);
    }

    getCard(size: number): Array<number>
    {
        if(this.cards.length < size)
            return [];
        let ret = this.cards.splice(0,size);
        return ret;
    }
}

export{CardBox}