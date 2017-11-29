// var adding = function() {
//
//     console.log(2 + 2)
// }
//
// adding()

// var ohSoTired = ['thankyou', 'ruth']
//
var stillSoTired = function(red) {
    red.forEach(function(item) {
        console.log(item)
    })
}
//
// stillSoTired(ohSoTired)

// var idChoice = function() {
//     var selectId = document.getElementById('You')
//     console.log(selectId)
// }
//
// idChoice()

// var classOne = function() {
//     var selectClass = document.getElementsByClassName('First')
//     console.log(selectClass)
// }
//
// classOne()

// var tagChoice = function() {
//     var tagSelector = document.getElementsByTagName('li')
//     console.log(tagSelector)
// }
//
// tagChoice()

// var nameThis = function() {
//     var derpName = document.getElementsByName('heyheyhey')
//     console.log(derpName)
// }
//
// nameThis()

// var uhOhQuery = function() {
//     var queriesAreStoopid = document.querySelector('.First')
//     console.log(queriesAreStoopid)
// }
//
// uhOhQuery()

// var allUhOhQuery = function() {
//     var queriesAreStillStoopid = document.querySelectorAll('.Second')
//     console.log(queriesAreStillStoopid)
// }
//
// allUhOhQuery()

// function editing() {
//     var changeList = document.getElementsByTagName('li')[0].textContent = 'Bumble bees';
//     console.log(changeList)
// }
//
// editing()

// function manipHTML() {
//     var changeH1 = document.getElementById('You').innerHTML = '<h1>Herro</h1>';
//     console.log(changeH1)
// }
//
// manipHTML()


// console.log(document.getElementsByClassName('Person1')[0].dataset.name)
// // document.getElementsByClassName('Person1')[0].dataset.age
// // document.getElementsByClassName('Person1')[0].dataset.height

function person() {
    var listName = document.getElementById('name').textContent = 'Name: ' + document.getElementsByClassName('Person1').dataset.name;
    var listAge = document.getElementById('age').textContent = 'Age: ' + document.getElementsByClassName('Person1').dataset.age;
    var listHeight = document.getElementById('height').textContent = 'Height: ' + document.getElementsByClassName('Person1').dataset.height;
    console.log(listName, listAge, listHeight)
    // console.log(listAge)
    // console.log(listHeight)
}

person()

// function age() {
//     var listAge = document.getElementsByTagName('span')[0].textContent = 'Age: 32';
//     console.log(listAge)
// }
//
// age()
//
// function height() {
//     var listHeight = document.getElementsByTagName('span')[0].textContent = 'Height: 5ft7';
//     console.log(listHeight)
// }
//
// height()


// var element = document.getElementById('You shall not pass')
// var elements = document.getElementsByClassName('First class')
// var elements = document.getElementsByTagName('You shall not pass')
// var elements = document.getElementsByName('heyheyhey')
// var element = document.querySelector('You shall not pass')
// var elements = document.querySelectorAll('You shall not pass')

// function myFunction() {
//     var x = document.getElementsByTagName("BUTTON")[0].textContent;
//     document.getElementById("demo").innerHTML = x;
// }