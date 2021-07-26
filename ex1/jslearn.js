//VARIABLES
const x = 1;
let y =5
//console.log(x,y);

const t=[1,3,5,"default"]
//console.log(t.length)
//console.log(t[3])

t.forEach(value =>{
    //console.log(value);
})

const m1 = t.map(value =>value*2)
//console.log(m1) 

const m2 = t.map(value => '<li>' + value + '</li>')
//console.log(m2)

//const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

//console.log(first, second)  // 1, 2 is printed
//console.log(rest)          // [3, 4 ,5] is printed

//CLASSES

const object1 = {
    name: "Moses",
    surname: "Zenbilci",
    age: "21",
    education: "Bachelors"
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

  console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName]) 

//You can also add properties to an object on the fly by either using  brackets:

object1['secret number'] = 12341
console.log(object1['secret number'])

//FUNCTIONS
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }
  
  const result = sum(1, 5)
  console.log(result)

  //If parameter is single we can exlude the parantheses
  const square = p => {
    console.log(p)
    return p * p
  }

 // There are two ways by which the function can be referenced; one is giving a name in a function declaration.

function product(a, b) {
  return a * b
}

const resultr = product(2, 6)
// result is now 12
//The other way to define the function is using a function expression. In this case there is no need to give the function a name and the definition may reside among the rest of the code:

const average = function(a, b) {
  return (a + b) / 2
}

const resulta = average(2, 5)
// result is now 3.5

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()