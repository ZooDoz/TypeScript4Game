class Card
{
    //打出者位置
    p: number;
    //牌面
    v: number;
    //牌的位置
    i: number;

    sv: number;
    si: number;
    ss: string;

    constructor(v:number)
    {
        this.v  = v;
        if(v <= 107)
        {
            let rv = v % 36;
            let rs = Math.floor(v / 36);
            switch(rs)
            {
                case 0:
                {
                    this.si = rs;
                    this.ss = "万";
                    this.sv = rv % 4;
                    break;
                }
                case 1:
                {
                    this.si = rs;
                    this.ss = "条";
                    this.sv = rv % 4;
                    break;
                }
                case 2:
                {
                    this.si = rs;
                    this.ss = "筒";
                    this.sv = rv % 4;
                    break;
                }
                default:
                {
                    console.log(this.v + " " + rv +" "+ rs);
                }
            }
        }
        else
        {
            v = v - 108;
            let rv = Math.floor(v / 4);
            let rs = rv;
            switch(rs)
            {
                case 0:
                {
                    this.si = rs;
                    this.ss = "白";
                    this.sv = rv;
                    break;
                }
                case 1:
                {
                    this.si = rs;
                    this.ss = "东";
                    this.sv = rv;
                    break;
                }
                case 2:
                {
                    this.si = rs;
                    this.ss = "南";
                    this.sv = rv;
                    break;
                }
                case 3:
                {
                    this.si = rs;
                    this.ss = "西";
                    this.sv = rv;
                    break;
                }
                case 4:
                {
                    this.si = rs;
                    this.ss = "北";
                    this.sv = rv;
                    break;
                }
                case 5:
                {
                    this.si = rs;
                    this.ss = "红";
                    this.sv = rv;
                    break;
                }
                case 6:
                {
                    this.si = rs;
                    this.ss = "发";
                    this.sv = rv;
                    break;
                }
                default:
                {
                    console.log(this.v + " " + rv +" "+ rs);
                }
            }
        }
        // console.log(this);
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