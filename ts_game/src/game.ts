import {CardBox} from './cardBox';
import {Card} from './card';
import {User} from './user';

let cb = new CardBox(54);
let get = cb.getCard(4);
console.log(get);