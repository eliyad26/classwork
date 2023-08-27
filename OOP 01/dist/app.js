"use strict";
console.log("works");
class Shape {
    phrase;
    constructor() {
        this.phrase = "";
    }
    info() {
        this.phrase = "This is a Shape";
        return this.phrase;
    }
}
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
    info() {
        this.phrase = "This is a Recktangle";
        return this.phrase;
    }
    scale(num) {
        this.height = this.height * num;
        this.width = this.width * num;
        return this;
    }
    static(reck1, reck2) {
        const area = reck1.area() + reck2.area();
        let reck3 = new Rectangle(1, area);
        return reck3;
    }
}
class ColoredRectangle extends Rectangle {
    color;
    constructor(color, height, width) {
        super(height, width);
        this.color = color;
    }
    info() {
        return `this a ColoredRectangle in color: ${this.color}`;
    }
}
class Square extends Rectangle {
    constructor(height) {
        super(height, height);
    }
    area() {
        return this.height * this.height;
    }
}
const s = new Rectangle(3, 4);
const ww = new Rectangle(3, 4);
const t = s.static(s, ww);
console.log(t);
