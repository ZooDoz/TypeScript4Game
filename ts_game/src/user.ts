
import {Card} from './card';

class User
{
    //牌组
    cards: Array<Card>;
    position: number;

    constructor(position: number)
    {
        this.position = position;
        this.cards = [];
    }

    addCards(cs: Array<Card>): void
    {
        this.cards.concat(cs);
    }

    addCard(c: Card): void
    {
        this.cards.push(c);
    }

    removeCard(c: Card):void
    {
        let i = this.cards.indexOf(c);
        if (i >= 0)
            this.cards.slice(i, 1);
    }
}

export{User}