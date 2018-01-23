"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var CardBox = /** @class */ (function () {
    function CardBox(size) {
        this.cards = [size];
        for (var i = 0; i < size; i++)
            this.cards[i] = i;
        _.shuffle(this.cards);
    }
    CardBox.prototype.show = function () {
        for (var i in this.cards)
            console.log(i);
    };
    return CardBox;
}());
exports.CardBox = CardBox;
var cb = new CardBox(54);
cb.show();
