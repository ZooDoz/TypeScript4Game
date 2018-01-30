class Card
{
    //打出者位置
    p: number;
    //牌面
    v: number;
    //牌的位置
    i: number;

    constructor(v:number)
    {
        this.v  = v;
    }

    create4Index(p:number)
    {
        this.p = p;
    }

    create4User(i:number)
    {
        this.i = i;
    }
}
export{Card}