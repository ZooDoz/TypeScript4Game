import {CardBox} from './cardBox';
import {Card} from './card';
import {User} from './user';

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
        for(let i = 0 ; i < 12 ; i++)
        {
            let u = this.us[ i % this.us.length];
            let getCards = this.cb.getCard(u.getPosition(),0,4);
            this.cs.push.apply(this.cs , getCards)
            u.addCards(getCards);
        }
        let u = this.us[0];
        let card1 = this.cb.getCard(u.getPosition(),0,1);
        let card2 = this.cb.getCard(u.getPosition(),1,1);
        u.addCards(card1);
        u.addCards(card2);
    }
}
export{Table}