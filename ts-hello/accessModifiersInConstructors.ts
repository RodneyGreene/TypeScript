class Point {
    //No need to set properties, just set the access to the parameters.
    //TypeScript will auto-create the properties.
    constructor(public x?: number, private y?: number) {
    }
    
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ..
    }
}

let point = new Point();
point.draw();