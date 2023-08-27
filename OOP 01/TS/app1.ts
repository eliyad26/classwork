console.log("hi");
class Shape1 {
  constructor() {}
  draw(): void {
    console.log("drawing a shape...");
  }
}
class Triangle extends Shape1 {
  constructor() {
    super();
  }
  draw(): void {
    console.log("drawing a Triangle...");
  }
}
class Circle extends Shape1 {
  constructor() {
    super();
  }
  draw(): void {
    console.log("drawing a Circle...");
  }
}
class Square1 extends Shape1 {
  constructor() {
    super();
  }
  draw(): void {
    console.log("drawing a Square...");
  }
}
function renderShapes(array: Shape1[]): void {
  array.forEach((element) => {
    element.draw();
  });
}
