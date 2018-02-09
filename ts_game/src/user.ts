
import {Card} from './card';
import * as readline from 'readline'
import {Table} from './table'


class User
{
    //牌组
    cards: Array<Card>;
    index: number;

    constructor(index: number)
    {
        this.index = index;
        this.cards = [];
    }

    addCards(cs: Array<Card>): void
    {
        this.cards.push.apply(this.cards , cs);
    }

    addCard(c: Card): void
    {
        this.cards.push(c);
    }

    removeCard(c: Card):void
    {
        let i = this.cards.indexOf(c);
        if (i >= 0)
            this.cards.slice(i, i+1);
    }

    removeCardByIndex(i: number): Card
    {
        return this.cards.slice(i, i+1)[0];
    }

    getIndex(): number
    {
        return this.index;
    }

    show(): void
    {
        console.log(this.cards);
    }
    /**
     * 尝试打出一张牌到table
     * @param t 
     */
    readRemove(t:Table): void
    {
        let ci = "";
        for(let i = 0 ; i < this.cards.length ; i++)
        {
            let c = this.cards[i];
            if(c.sv > 0)
                ci += c.sv+c.ss+" ";
            else
                 ci += c.ss+" ";
        }
        ci = this.index + "\n" + "remove card ?\n" + ci + "\n";

        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        rl.question(ci , function(answer)
        {
            rl.close();
            t.dropCard(parseInt(answer));
        });
    }
    
    /**
     * 判断是否吃牌
     * @param c 
     * @param t 
     */
    readAskDrop(c: Card , t:Table): void
    {
        let ci = "";
        if (c.sv > 0)
            ci += c.sv + c.ss + " ";
        else
            ci += c.ss + " ";
        ci = this.index + " " + "got card ?\n" + ci + "\n";
        let index = this.index;
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        rl.question(ci , function(answer)
        {
            rl.close();
            if(answer == '0')
            {
                console.log("pass");
                t.askDrop(c , index + 1);
            }
            else
                t.eatDrop(c , index);
        });
    }

    /**
     * 吃掉牌,并打出一张牌
     * @param c 
     */
    eat(c:Card , t:Table)
    {
        //TODO 判断是否赢了
        this.readRemove(t);
    }
    
}

export{User}