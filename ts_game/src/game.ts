import * as lodash from 'lodash'

class CardBox
{
    cards:Array<number>;
    constructor(size: number) 
    {
        this.cards=[size];
        for(var i = 0 ; i < size ; i ++)
           this.cards[i]=i;
        
    }
}

export{CardBox}