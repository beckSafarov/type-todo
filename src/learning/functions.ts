const myNumber = 1


const calculateTax = (income:number, taxYear:number):number => {
  if(taxYear < 2022){
    return income *1.2
  }
  return income*1.3
}

calculateTax(1e4, 2022)
// type FooType = { amount: number }
// const foo: FooType = (data:object) => {
//   return { amount: data.amount * 10 }
// }
type StringArray = Array<string>
type PersonObject = {id: number, name: string}
type PersonArray = Array<PersonObject>
const myArray:StringArray = ['John Doe']
const array2: number[] = []
const persons:PersonArray = [{id: 1, name: "Begzod"}]
myArray.push('1')
array2.push(1)
persons.push({id: 2, name: "John Doe"})
console.log({myArray, array2, persons})
export default myNumber