// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = "book",
  DVD = "dvd",
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book;
  title: string;
  author: string;
}

interface DVD {
  type: ItemType.DVD;
  title: string;
  duration: number;
}

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(
  items: (Book | DVD)[],
  filterFn: (arg: (Book | DVD)[]) => (Book | DVD)[]
): (Book | DVD)[] {
  return filterFn(items);
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items: (Book | DVD)[]): void {
  items.forEach((element) => {
    console.log(element);
  });
}

// Test data
const libraryItems: (Book | DVD)[] = [
  {
    type: ItemType.Book,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { type: ItemType.DVD, title: "Inception", duration: 148 },
  { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { type: ItemType.DVD, title: "Avatar", duration: 162 },
  { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];

// Step 5:  הדפיסו את כל המידע הנתון
function printData(items: (Book | DVD)[]): void {
  items.forEach((element) => {
    console.log(element);
  });
}
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
function filterFn(items: (Book | DVD)[]): (Book | DVD)[] {
  let filtered: (Book | DVD)[] = [];
  items.forEach((element) => {
    if (element.type === ItemType.DVD && element.duration > 120) {
      filtered.push(element);
    }
  });
  return filtered;
}

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
function filterHL(items: (Book | DVD)[]): (Book | DVD)[] {
  let filtered: (Book | DVD)[] = [];
  items.forEach((element) => {
    if (element.type === ItemType.Book && element.author === "Harper Lee") {
      filtered.push(element);
    }
  });
  return filtered;
}
