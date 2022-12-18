export class Coin {
    id;
    symbol;
    coinName;
    imageUrl;
    constructor(id, symbol, coinName, imageUrl) {
        this.id = id;
        this.coinName = coinName;
        this.symbol = symbol;
        this.imageUrl = imageUrl;
    }
}
export class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static ParsePoint(point) {
        return new Point(point.start, point.close);
    }
}
