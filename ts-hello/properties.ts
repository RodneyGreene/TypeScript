class Point {
    constructor(public _x?: number, private _y?: number) {
    }
    
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(another: Point) {
        // ..
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(value) {
        if (value < 0)
            throw new Error('Vlaue cannot be less than zero.');
        
        this._x = value;
    }

    set y(value) {
        if (value < 0)
            throw new Error('Vlaue cannot be less than zero.');
        
        this._x = value;
    }
}

let point = new Point();
let x = point.x;
point.x
point.draw();