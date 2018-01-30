import {CardBox} from './cardBox';
import {Card} from './card';
import {User} from './user';

class table
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

    join(u: User)
    {
        this.us.concat(u);
    }

    leave(u: User)
    {
        let i = this.us.indexOf(u);
        if (i > 0)
            this.us.splice(i, 1);
    }


}