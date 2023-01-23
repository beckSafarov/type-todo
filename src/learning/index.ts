const sampleString: String = 'My Body My Body'

interface Person {
  name: string;
  id: number;
}

const Begzod:Person = {
  name: 'Begzod',
  id: 10, 
}

const getUser = ():Person => {
  return {name: 'person', id: 101}
}

const checkUser = (user:Person) => {
  console.log(typeof user);
  if(user.name === 'Begzod'){
    return 'you are hired!'
  }else{
    return 'you are fired!'
  }
}

const arr = []
let something = 'Something'

const doSomething = (param:string) => {
  return param
}

let myStringArray = ['1']
myStringArray.push('5')

enum Options {
  Option1 = 1, 
  Option2, 
  Option3
}

enum WindowSizes {
  Xsm= '320px',
  Sm = '460px',
  Md = '768px',
  MdLg = '1068px',
  Desktop = '1440px',
  Lg = '1900px',
  Xlg = '2200px',
}

function foo(income:number){
  return 0
}

type Quantity = 50 | 100
let myNumber: Quantity = 50
myNumber = 50

export default sampleString