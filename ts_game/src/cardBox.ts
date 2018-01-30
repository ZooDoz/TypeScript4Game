import * as _ from 'lodash'
//引入card
import {Card} from './card';
class CardBox
{
    cards:Array<Card>;
    constructor(size: number) 
    {
        //初始化牌面
        let cs = [size];
        for(let i = 0 ; i < size ; i ++)
            cs[i]=i;
        cs = _.shuffle(cs);
        this.cards = [];
        for (let i = 0; i < size; i++)
        {
            let cd = new Card(cs[i]);
            cd.create4Index(i);
            this.cards[i]=cd;
        }
    }

    show(): void
    {
        console.log(this.cards);
    }

    getCard(p:number,size: number): Array<Card>
    {
        if(this.cards.length < size)
            return [];
        let ret = this.cards.splice(0,size);
        ret.forEach(function (c: Card) {
            c.create4User(p);
        });
        return ret;
    }
}

export{CardBox}