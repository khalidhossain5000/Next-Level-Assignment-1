function filterEvenNumbers  (numbers:number[]):number[]{
    const evenNumbers=numbers.filter((number)=>number%2===0)
    return evenNumbers
}



function reverseString (input:string):string{
    return input.split("").reverse().join("")
}

console.log(reverseString("hello"))