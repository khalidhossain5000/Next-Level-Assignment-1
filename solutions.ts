function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

type StringOrNumber  = string | number;

function checkType(input: StringOrNumber ): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(bookDetails: Book) :Book & {isRead:boolean} {
  return {
    ...bookDetails,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

function getIntersection(numbers1: number[], numbers2: number[]) {
  const commonNumbers = numbers1.filter((number) => numbers2.includes(number));
  return commonNumbers;
}
