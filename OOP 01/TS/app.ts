console.log("works");
class Shape {
  phrase: string;
  constructor() {
    this.phrase = "";
  }
  info(): string {
    this.phrase = "This is a Shape";
    return this.phrase;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  area(): number {
    return this.height * this.width;
  }
  info(): string {
    this.phrase = "This is a Recktangle";
    return this.phrase;
  }
  scale(num: number): this {
    this.height = this.height * num;
    this.width = this.width * num;
    return this;
  }
  static(reck1: Rectangle, reck2: Rectangle): Rectangle {
    const area: number = reck1.area() + reck2.area();
    let reck3 = new Rectangle(1, area);
    return reck3;
  }
}
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(color: string, height: number, width: number) {
    super(height, width);
    this.color = color;
  }
  info(): string {
    return `this a ColoredRectangle in color: ${this.color}`;
  }
}
class Square extends Rectangle {
  constructor(height: number) {
    super(height, height);
  }
  area(): number {
    return this.height * this.height;
  }
}

const s = new Rectangle(3, 4);
const ww = new Rectangle(3, 4);
const t = s.static(s, ww);
console.log(t);
