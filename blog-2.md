## 4.How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## Introduction

বড় TypeScript প্রজেক্টে কোড যত বাড়ে, ততই logic ছড়িয়ে যায়,duplicate code তৈরি হয়, আর নতুন feature add করা কঠিন হয়ে পড়ে।এই সমস্যা কমাতে Object-Oriented Programming (OOP)-এর চারটি মূলpillar খুব গুরুত্বপূর্ণ: Inheritance, Polymorphism, Abstraction, এবংEncapsulation। এগুলো একসাথে কাজ করে কোডকে আরও reusable, maintainable, organized, এবং scalable করে তোলে। তাই large-scale TypeScript project-এ logic manageকরা এবং complexity কমানোর জন্য OOP খুব কার্যকর।

### Inheritance :

Inheritance হলো এমন একটি mechanism যেখানে একটি class অন্য class-এর properties এবং methods reuse করতে পারে। অর্থাৎ একটি parent class থেকে একাধিক child class তৈরি করা যায় এবং child class গুলো parent class-এর properties ও methods ব্যবহার করতে পারে।
বড় project-এ অনেক সময় একই ধরনের logic (যেমন user handling, logging, authentication) বারবার লিখতে হয়। Inheritance সেই duplication কমাতে সাহায্য করে, ফলে code আরও reusable এবং maintainable হয়।
Inheritance-এর ক্ষেত্রে super() একটি গুরুত্বপূর্ণ concept। super() হলো parent class-এর constructor বা methods access করার মাধ্যম। যখন child class parent class থেকে কিছু inherit করে, তখন parent class-এর constructor চালানোর জন্য super() ব্যবহার করা হয়, যাতে parent class-এর initial setup properly execute হয়। Inheritance Example:
```typescript
class User {
  constructor(name: string, email: string) {}

  getProfile(): string {
    return `${this.name} - ${this.email}`;
  }
}

class Admin extends User {
  banUser(userId: number): string {
    return `User ${userId} has been banned`;
  }
}

class Customer extends User {
  placeOrder(productId: number): string {
    return `Order placed for product ${productId}`;
  }
}
```
এখানে User class-এ common logic রাখা হয়েছে। Admin এবং Customer সেই
logic reuse করছে।Inheritance বড় project-এ complexity কমায় কারণ - একই logic বারবার
লিখতে হয় না,fast update করা যায় ,class structure পরিষ্কার থাকে ,
নতুন child class add করা সহজ হয় ইত্যাদি ।

### Polymorphism

পলিমরফিজম মানে হল "একাধিক রূপ"।একই বেস ক্লাসের মাধ্যমে বিভিন্ন ক্লাস
আলাদা আচরণ প্রদর্শন করতে পারে বা একই ইন্টারফেস বা মেথড ব্যবহার করে
ভিন্ন ভিন্ন কাজ করা যেমন :

```typescript
class Shape {
  getArea(): number {
    return 0;
  }
}

class CircleArea extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    const circleAreaRule = Math.PI * this.radius * this.radius;
    return circleAreaRule;
  }
}

class RectangleArea extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.widht * this.width;
  }
}

function logArea(param: Shape) {
  return param.getArea();
}
```
এই উদাহরণে logArea function যেকোনো Shape টাইপ গ্রহণ করতে পারে। এটি জানে না object টি circle নাকি rectangle, কিন্তু তারপরও getArea() কল করে সঠিক ফলাফল পেয়ে যায়।
এখানে একই function দিয়ে বিভিন্ন ধরনের object handle করা যায়। নতুন shape যোগ করলেও পুরনো code পরিবর্তন করতে হয় না, শুধু নতুন class যোগ করলেই system কাজ করে। ফলে if-else বা switch কম লাগে, code আরও clean ও readable হয়। এভাবেই polymorphism logic manage করে এবং বড় TypeScript project-এ complexity কমায়।

### Abstraction

Abstraction মানে দরকারি বিষয়গুলো দেখানো, আর unnecessary implementation details লুকিয়ে রাখা। এতে developer-রা কী করতে হবে সেটা জানে, কিন্তু কীভাবে ভিতরে কাজ হচ্ছে সেটা সবসময় জানতে হয় না অর্থাৎ
অপ্রয়োজনীয় ডিটেইলস লুকিয়ে শুধুমাত্র প্রয়োজনীয় ফিচারগুলো ব্যবহারকারীর সামনে তুলে ধরা। যেমন:

```typescript
abstract class VideoPlayer {
  abstract play(): string;
  abstract pause(): string;
  abstract stop(): string;
}

class MyVideoPlayer extends VideoPlayer {
  play(): string {
    return "video is playing";
  }

  pause(): string {
    return "video is paused";
  }

  stop(): string {
    return "video is stopped";
  }
}
```
এখানে VideoPlayer শুধু কী কী action থাকতে হবে তা define করেছে, আর MyVideoPlayer সেই action-এর বাস্তব কাজ করেছে। বড় TypeScript project-এ abstraction implementation details লুকিয়ে রাখে এবং শুধুমাত্র প্রয়োজনীয় interface expose করে, ফলে code আরও clean, structured এবং easy to maintain হয়।

### Encapsulation
Encapsulation মানে data এবং সেই data-এর উপর কাজ করার method একসাথে রাখা, আর direct access সীমিত করা। এতে object-এর ভিতরের state অযথা বদলে গিয়ে bug তৈরি করার সুযোগ কমে।

```typescript
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

এখানে balance বাইরে থেকে সরাসরি change করা যায় না, শুধু method দিয়ে access করা যায়—এটাই encapsulation, যা বড় system-এ data safety এবং logic control নিশ্চিত করে।

Encapsulation বড় TypeScript প্রোজেক্টে complexity কমায় কারণ এটি data এবং সেই data-র উপর কাজ করার method একসাথে গুছিয়ে রাখে, আর বাইরে থেকে direct access সীমিত করে। এতে object-এর ভিতরের state ভুলভাবে পরিবর্তন হওয়ার ঝুঁকি কমে, unexpected bug কমে, এবং code আরও controlled থাকে। নির্দিষ্ট method ব্যবহার করে data update করা হয় বলে logic পরিষ্কার থাকে এবং debugging, maintenance, ও future change করা সহজ হয়।

### Conclusion

OOP-এর চারটি pillar—Inheritance, Polymorphism, Abstraction, এবং Encapsulation—TypeScript-এর বড় প্রোজেক্টে কোডকে আরও সংগঠিত, reusable এবং maintainable করে তোলে। এগুলো duplicate code কমায়, complex logic সহজভাবে manage করতে সাহায্য করে, এবং system-কে modular করে তোলে। ফলে বড়-scale application-এ development দ্রুত হয়, bug কমে, এবং ভবিষ্যতে feature যোগ বা পরিবর্তন করা অনেক সহজ হয়ে যায়।
