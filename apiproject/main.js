const ul = document.getElementById('display');


function addData(){

    var param1 = document.getElementById("input1").value;
    var param2 = document.getElementById("input2").value;

var url = "https://pokeapi.co/api/v2/evolution-chain/" + param1;
var url2 = "https://pokeapi.co/api/v2/evolution-chain/" + param2;
// document.getElementById('par1').innerHTML = url;
// document.getElementById('par2').innerHTML = url2;
fetch(url)
.then((resp) => resp.json())
.then(function(data){
var users = data.chain.species.name;
let person2first = JSON.stringify(users);
document.getElementById("display").innerHTML = person2first;
console.log(person2first);
// let listElement = document.getElementById('Users')
// listElement.innerHTML = ''
// userData.map( person => {
//     let person2first = JSON.stringify(person.name.first);
//     let person2last = JSON.stringify(person.name.last); 
//     const li = document.createElement("li")
//     const button = document.createElement("button");
//     button.innerHTML = "More Info"
//     button.addEventListener('click', function() {
//         let stre = JSON.stringify(person);
//         document.getElementById('Users').innerHTML = stre;
//     } )
//     li.appendChild(document.createTextNode('First Name: ' + person2first + ' Last Name: ' + person2last))
//     li.appendChild(button)
//     listElement.append(li)
//    // console.log(listElement)
// })
})
.catch(function (error){
 console.log('error!');
})
fetch(url2)
.then((resp) => resp.json())
.then(function(data){
var users = data.chain.species.name;
let person2second = JSON.stringify(users);
document.getElementById("display2").innerHTML = person2second;
console.log(person2second);
})
.catch(function (error){
 console.log('error!');
})

}
//var id1 = document.getElementById('input1').value;
let id2 = document.getElementById('input2').value;
//let str_id1 = JSON.stringify(id1);
//let str_id2 = JSON.stringify(id2);
console.log(id2);
//const url = 'https://pokeapi.co/api/v2/evolution-chain/201/';
//const url2 = 'https://pokeapi.co/api/v2/evolution-chain/202/';
const userData = [];
function printWinner(){
    var param1 = document.getElementById("input1").value;
    var param2 = document.getElementById("input2").value;

var url = "https://pokeapi.co/api/v2/evolution-chain/" + param1;
var url2 = "https://pokeapi.co/api/v2/evolution-chain/" + param2;
    fetch(url2)
    .then((resp) => resp.json())
    .then(function(data){
    var users = data.chain.species.name;
    let person2second = JSON.stringify(users);
    document.getElementById("winner").innerHTML = person2second;
    console.log(person2second);
    })
    .catch(function (error){
     console.log('error!');
    })
}
// function game(){

// }