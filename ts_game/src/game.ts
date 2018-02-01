import {Table} from './table';
import { User } from './user';

let tb = new Table();
let u1 = new User(1);
let u2 = new User(2);
let u3 = new User(3);
let u4 = new User(4);
tb.join(u1);
tb.join(u2);
tb.join(u3);
tb.join(u4);

tb.initCard();

u1.show();

