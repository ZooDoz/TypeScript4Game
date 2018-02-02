import {CardBox} from './cardBox';
import {Card} from './card';
import {User} from './user';
import * as ReadLine from 'readline'

class Table
{
    //牌盒
    cb: CardBox;
    //桌面上的排
    cs: Array<Card>;
    //桌面上的人
    us: Array<User>;
    //轮圈次序
    i: number;

    constructor()
    {
        this.cb = new CardBox(136);
        this.us = [];
        this.cs = [];
        this.i = 1;
    }

    join(u: User): void
    {
        this.us.push(u);
    }

    leave(u: User): void
    {
        let i = this.us.indexOf(u);
        if (i > 0)
            this.us.splice(i, 1);
    }

    initCard(): void
    {
        for(let i = 0 ; i < 16 ; i++)
        {
            let u = this.us[ i % this.us.length];
            let getCards;
            if(i >= 12)
                getCards = this.cb.getCard(u.getIndex(),0,1);
            else
                getCards = this.cb.getCard(u.getIndex(),0,4);
            // this.cs.push.apply(this.cs , getCards)
            u.addCards(getCards);
        }
    }

    getCard(): void
    {
        let u = this.us[this.i];
        let getCards = this.cb.getCard(u.getIndex(),0,1);
        // this.cs.push.apply(this.cs , getCards)
        u.addCards(getCards);
        u.readRemove(this);
    }

    dropCard(i:number): void
    {
        let cu = this.us[this.i];
        let dc = cu.removeCardByIndex(i);
        this.askDrop(dc , cu.getIndex() + 1);
    }

    askDrop(c:Card , i: number): void
    {
        let cu = this.us[i];
    }
}
export{Table}