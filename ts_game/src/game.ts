import {Table} from './table';
import { User } from './user';

let tb = new Table();
let u1 = new User(0);
let u2 = new User(1);
let u3 = new User(2);
let u4 = new User(3);
tb.join(u1);
tb.join(u2);
tb.join(u3);
tb.join(u4);

tb.initCard();
tb.getCard();

