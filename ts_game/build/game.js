"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardBox = /** @class */ (function () {
    function CardBox(size) {
        this.cards = [size];
        for (var i = 0; i < size; i++)
            this.cards[i] = i;
    }
    return CardBox;
}());
exports.CardBox = CardBox;
