"use strict";
console.log("hi");
class Shape1 {
    constructor() { }
    draw() {
        console.log("drawing a shape...");
    }
}
class Triangle extends Shape1 {
    constructor() {
        super();
    }
    draw() {
        console.log("drawing a Triangle...");
    }
}
class Circle extends Shape1 {
    constructor() {
        super();
    }
    draw() {
        console.log("drawing a Circle...");
    }
}
class Square1 extends Shape1 {
    constructor() {
        super();
    }
    draw() {
        console.log("drawing a Square...");
    }
}
function renderShapes(array) {
    array.forEach((element) => {
        element.draw();
    });
}
