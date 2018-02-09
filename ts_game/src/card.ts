class Card
{
    //打出者位置
    p: number;
    //牌面
    v: number;
    //牌的位置
    i: number;

    //类型
    si: number;
    //牌显示值
    sv: number;
    //牌显示字符
    ss: string;

    constructor(v:number)
    {
        this.p = -1;
        this.i = -1;
        this.si = -1;
        this.sv = -1;
        this.ss = '';
        
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
                    this.sv = rv % 4 + 1;
                    break;
                }
                case 1:
                {
                    this.si = rs;
                    this.ss = "条";
                    this.sv = rv % 4 + 1;
                    break;
                }
                case 2:
                {
                    this.si = rs;
                    this.ss = "筒";
                    this.sv = rv % 4 + 1;
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
                    break;
                }
                case 1:
                {
                    this.si = rs;
                    this.ss = "东";
                    break;
                }
                case 2:
                {
                    this.si = rs;
                    this.ss = "南";
                    break;
                }
                case 3:
                {
                    this.si = rs;
                    this.ss = "西";
                    break;
                }
                case 4:
                {
                    this.si = rs;
                    this.ss = "北";
                    break;
                }
                case 5:
                {
                    this.si = rs;
                    this.ss = "红";
                    break;
                }
                case 6:
                {
                    this.si = rs;
                    this.ss = "发";
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