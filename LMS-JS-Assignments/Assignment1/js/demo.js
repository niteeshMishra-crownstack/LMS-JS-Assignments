alert("hello world")
console.error("this is a error")
console.warn("this is a warning")

//let & const

let age = 30; //we can re -assign
age = 50;

console.log(age)

const person = "Monu"
    //person = "hari" //ended with one error
console.log(person)


//Data type 
//String , Numbers , Boolean , Null , undefined

const candidate = "rio"
const digit = 20;
const score = 20.90
const isCool = true
const value = null;
const result = undefined
    //const x; //ended with an error
let z; // we can declare first and assign value later

console.log(typeof candidate) //string
console.log(typeof digit) //number
console.log(typeof score) //number
console.log(typeof isCool) //boolean
console.log(typeof value) //object
console.log(typeof result) //undefined

//concatination
console.log("I am " + candidate + " and I am " + digit)
    //Template string

console.log(`My name is ${candidate} and i am ${digit}`)

//String property and methods

const s = "hello world"
console.log(s.length)
console.log(s.slice(3, 5))
console.log(s.toLocaleUpperCase())
console.log(s.repeat(2))

//arrays that hold multiple value

const fruits = ['oranges', 'mango', 'grapes', 'papaya']
console.log(fruits)

console.log(fruits)

fruits.push('strawbaries')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift('banana')
console.log(fruits)

console.log(fruits.indexOf('mango'))

//object literals

const personValues = {
    firstName: "john",
    lastNmae: "doe",
    age: 40,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '80 feet road',
        colony: 'nehru nagar',
        landmark: 'near dominoz pizza',
        city: 'rewa'

    }



}
console.log(personValues)
console.log(personValues.firstName, personValues.lastNmae)
console.log(personValues.address.city)

//destructuring





person.emails = "john20@gmail.com"
console.log(person)

const todos = [{
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meet',
        isCompleted: true
    },
    {
        id: 3,
        text: 'take out trash',
        isCompleted: true
    }
]

console.log(todos)
console.log(todos[1].text)

//json

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//for loop 

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//while loop 
let i = 0;
while (i < 10) {
    console.log('while loop executed' + i + "time")

    i++
}

//for each loop

for (let todo of todos) {
    console.log(todo.text)
}
for (let todo of todos) {
    console.log(todo.id)
}
for (let todo of todos) {
    console.log(todo)
}

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted = true
})
console.log(todoCompleted)

const x = 10;
const y = 20;

if (x > 20) {
    console.log('you are in if block')
} else if (y < 30) {
    console.log('you are in if else block')
} else {
    console.log('you are in else block')
}

if (x > 12 || y > 10) {
    console.log('you are in if block')
}


//ternary operator

const v = 30;

const color = x > 10 ? 'red' : 'blue';
console.log(color)

//switch

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is neither red or blue')
}


//function 

function addNums(num1, num2) {
    console.log(num1 + num2)
}
addNums(5, 5)

function addNums(num1 = 2, num2 = 4) {
    console.log(num1 + num2) //6
}
addNums()

function addNums(num1 = 2, num2 = 4) {
    console.log(num1 + num2) //10
}
addNums(5, 5) //this will override the default value

//function expression

function student(firstName, lastNmae, dob) {
    this.firstName = firstName;
    this.lastNmae = lastNmae;
    this.dob = dob;
}
//instantiate the object
const student1 = new student('rio', 'hio', '4-4-2000')
const student2 = new student('oui', 'peo', '4-4-2000')

console.log(student1.firstName)

class Student {
    constructor(firstName, lastNmae, dob) {
        this.firstName = firstName;
        this.lastNmae = lastNmae;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastNmae}`
    }
}

const student3 = new Student("Niteesh", "mishra", "04-03-1994")


//DOm
//single element selector
// let form = document.getElementById("my-form")
let form = document.querySelector("my-form")
console.log(form)

//multiple element selector

console.log(document.querySelectorAll('.items'))

const ul = document.querySelector('.items')
    // ul.remove()
    // ul.lastElementChild.remove()
    // ul.firstElementChild.textContent = "hello"
    // ul.children[1].innerText = 'brad';
    // ul.lastElementChild.innerHTML = "<h1>Hello</h1>"

// let btn = document.querySelector('.btn')
// btn.style.background = "light-gray"

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('click')
//     console.log(e.target)

//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')



// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields"
        setTimeout(() => msg.remove(), 3000)

    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
        userList.appendChild(li)
    }
}

//JSON.stringify & JSON.parse()

var customer = {
    name: 'brad',
    age: 30,
    address: {
        street: '5 main st',
        city: 'boston'
    },
    children: ['barina', 'rehana']
}

//converting a js object to JSON 
customer = JSON.stringify(customer)
console.log(customer)

console.log(customer.name) //undefined

//converting JSON to js object
customer = JSON.parse(customer)
console.log(customer.name)
console.log(customer.address.city)
console.log(customer.children[1])

//iterating through javascript array of objects

var people = [{
        peoplename: 'hari',
        age: 30
    },
    {
        peoplename: 'om',
        age: 40
    },
    {
        peoplename: 'krishna',
        age: 50
    }
]
var output = '';
for (var p = 0; p < people.length; p++) {
    // console.log(people[i].name)
    output += '<li>' + people[p].peoplename + '</li>'
    console.log(output)
}
//document.querySelector('.people').innerText = output