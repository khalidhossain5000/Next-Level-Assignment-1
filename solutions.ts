function filterEvenNumbers  (numbers:number[]):number[]{
    const evenNumbers=numbers.filter((number)=>number%2===0)
    return evenNumbers
}



function reverseString (input:string):string{
    return input.split("").reverse().join("")
}


type InputType=string | number

function checkType (input:InputType):string{
    if(typeof input==='string'){
        return "String"
    }
    else{
        return "Number"
    }
}

function getProperty <T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
