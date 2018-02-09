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
    /**
     * 初始化牌桌
     */
    initCard(): void
    {
        //下发初始的12张牌
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
    /**
     * 抓牌
     */
    getCard(): void
    {
        //抓取一张牌
        let u = this.us[this.i];
        let getCards = this.cb.getCard(u.getIndex(),0,1);
        // this.cs.push.apply(this.cs , getCards)
        u.addCards(getCards);
        //等待出牌
        u.readRemove(this);
    }
    /**
     * 打出一张牌到牌桌
     * @param i 
     */
    dropCard(i:number): void
    {
        let cu = this.us[this.i];
        let dc = cu.removeCardByIndex(i);
        //询问其余玩家的牌
        this.askDrop(dc , cu.getIndex() + 1);
    }
    /**
     * 询问下家
     * @param c 
     * @param i 
     */
    askDrop(c:Card , i: number): void
    {
        i = i % this.us.length;
        // console.log(i + '  ' + this.i);
        if(i == this.i)
        {
            this.i++;
            this.getCard();
        }
        else
        {
            let cu = this.us[i];
            cu.readAskDrop(c,this);
        }
    }
    /**
     * 吃掉当前牌
     * @param c 
     * @param i 
     */
    eatDrop(c:Card , i: number)
    {
        this.i = i;
        let cu = this.us[this.i];
        cu.eat(c , this);
    }
}
export{Table}