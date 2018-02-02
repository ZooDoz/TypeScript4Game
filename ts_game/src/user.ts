
import {Card} from './card';
import * as readline from 'readline'
import {Table} from './table'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
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

    readRemove(t:Table): void
    {
        let ci = "";
        for(let i = 0 ; i < this.cards.length ; i++)
        {
            let c = this.cards[i];
            if(c.sv)
                ci += c.sv+c.ss+" ";
            else
                 ci += c.ss+" ";
        }
        ci = ci + "\n" + "remove card ?\n";
        rl.question(ci , function(answer)
        {
            rl.close();
            t.dropCard(parseInt(answer));
        });
    }

    readAskDrop(c: Card , t:Table): void
    {
        let ci = "";
        if (c.sv)
            ci += c.sv + c.ss + " ";
        else
            ci += c.ss + " ";
        ci = ci + "\n" + "remove card ?\n";
        rl.question(ci , function(answer)
        {
            rl.close();
            t.dropCard(parseInt(answer));
        });
    }
    
}

export{User}