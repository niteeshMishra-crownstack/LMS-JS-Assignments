console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.forms) //will get all the form
console.log(document.forms[0]) //will get all the form


//get elements by  ID 
var headerTitle = document.getElementById('header-title')
var mainHeaderTitle = document.getElementById('main-header')
console.log(headerTitle)

headerTitle.textContent = "Hello"
headerTitle.innerText = "GoodBye"
    // .textContent & .innerText works almost same only difference that .iinerText pays attention to style

headerTitle.innerHTML = "<h3> Hello </h3>";

mainHeaderTitle.style.borderBottom = "solid 3px orange"

//getElementBy ClassName

var items = document.getElementsByClassName('list-group-item')
items[1].textContent = "Hello"
items[1].style.fontWeight = "bold"
items[1].style.backgroundColor = "yellow";


//querySelector
var header = document.querySelector('#main-header')
header.style.borderBottom = "solid 4px gray"

var input = document.querySelector('input')
input.value = "Hello"

var submit = document.querySelector('input[type="submit]')
    //submit.value = "send"

var item = document.querySelector('.list-group-item')
item.style.color = "red"

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "blue"


//querySelectorAll

var titles = document.querySelectorAll('.title')
titles[0].textContent = "Hello"

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "gray"
    even[i].style.backgroundColor = "yellow"
}