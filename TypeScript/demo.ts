console.log("hello world")


let myNumber:number = 10;
console.log(typeof(myNumber))
console.log(myNumber)


let myString:string = "abc"
console.log(typeof(myString))
console.log(myString)


let myAny:any = "universal"
console.log(typeof(myAny))
console.log(myAny)

const myArr:any[] = []
myArr.push(1)
myArr.push(2)
myArr.push(3)


console.log(myArr)


let addValue = (num1:number,num2:number):number => {
    return num1+num2
}
