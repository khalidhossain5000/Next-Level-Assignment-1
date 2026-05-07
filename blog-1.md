# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Introduction
Typescript এর মূল সুবিধা হলো এটি আমাদের code এ data type safety প্রদান করে এবং ভুল type use করলে কোড run করার আগেই আমাদের error দেয় অর্থাৎ compile time এই এটি error ধরে ফেলে ,যার কারণে
runtime এ error অনেক কমে যায় ও কোড আরও reliable হয় , যা বড় প্রজেক্ট এ অনেক 
সুবিধা প্রদান করে। any হলো typescript এর একটি type যা এই পুরো type safety system কে bypass করে দেয়
এজন্যই any কে অনেক  **type safety hole** বলা হয়ে থাকে।
অন্যদিকে unknown একই ধরনের flexible behavior দিলেও অনেক বেশি secure এবং safe approach প্রদান করে।
### Why any is labeled as type safety hole?
যখন কোনো varibale ,value, function parameter, array বা অন্য যেকোনো data 
এর type any দেয়া হয় তখন Typescript সেই data এর উপর type checking বন্ধ করে দেয়।
তখন এটি normal Javascript এর কোডের মত behave করে, Typescript এর মূল
feature তখন use হয় না। যেমন:
```typescript
let data:any="Any Data Type In Typescript"
data.toUpperCase()
data.reverse()
```
এখানে data varibale এ any type use করা হয়েছে এবং এর উপর string method ও
reverse array method use করা হলেও typescript কোনো error দিবে না কারন any
type use করলে Typescript type checking বন্ধ করে দেয় এবং ধরে নেয় Developer
যা করছে সেটই সঠিক, কিন্তু এই code run করলে run time এহ reverse array method
এর কারণে error দিবে , যেটা বড় project এ সমস্যা করতে পারে , তাই typescript 
is labeled as **"type safety hole"**.

### why is unknown the safer choice for handling unpredictable data
unknown ও any এর মত same data ধরণ করতে পারে কিন্তু এক্ষেত্রে Typescript
আমাদের কে type safety প্রদান করে। যেমন:
```typescript
let value:unknown="Hello Typescript unknown Type"
value.toUpperCase()
```
**এখানে TypeScript error দিবে।** কারণ unknown ক্ষেত্রে typescript জানে
না যে data type টা আসলে কি তাই typescript developer ke আগে data type verify করতে
বাধ্য করে , আর এই behavior ই unknown কে safe করে তোলে।


### Understanding Type Narrowing
Type narrowing হলো এমন একটি process যেখানে TypeScript check করে variable এর actual type কী, তারপর সেই অনুযায়ী access করতে দেয়।
এখানে conditon এর মাধ্যমে data type check করা হয় যার কারনে varibale এর actual
type identify করা হয় ,আর এভাবে type গুলা ছোট হয়ে আসে , যেটাকে type narrowing
বলা হয়। যেমন:
```typescript
let value: unknown = "Hello TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
এখানে প্রথমে value এর type ছিল unknown। কিন্তু typeof value === "string" check করার পরে TypeScript বুঝে গেছে যে if block এর ভিতরে value একটি string
তাই এখন safely toUpperCase() method ব্যবহার করা যাচ্ছে।
এই process কেই বলা হয় type narrowing।

### Conclusion
any TypeScript এর type safety completely bypass করে দেয় type safety check
এর ভেতর একটি hole করে যার কারণে typescript type check করতে পারে না ,
এজন্য একে “type safety hole” বলা হয়।অন্যদিকে unknown developer 
কে আগে type verify করতে বাধ্য করে, তাই unknown হলো safer choice or handling 
unpredictable data।আর Type narrowing হলো এমন একটি technique যেখানে TypeScript condition check এর মাধ্যমে variable এর actual type identify করে। যেমন typeof, Array.isArray() বা অন্য condition ব্যবহার করে TypeScript বুঝে ফেলে data টি string, array বা অন্য কোনো specific type কিনা। এরপর সেই নির্দিষ্ট type অনুযায়ী safely method বা property ব্যবহার করতে দেয়।

