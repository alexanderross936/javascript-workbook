const ul = document.getElementById('Users');
const url = 'https://randomuser.me/api/?results=100';
console.log(url);
const userData = [];
fetch(url)
.then((resp) => resp.json())
.then(function(data){
users = data.results;
for(i=0; i < 100; i++){
    userData.push(data.results[i]);
}
console.log(userData.name)
let listElement = document.getElementById('Users')
listElement.innerHTML = ''
userData.map( person => {
    let person2first = JSON.stringify(person.name.first);
    let person2last = JSON.stringify(person.name.last); 
    const li = document.createElement("li")
    const button = document.createElement("button");
    button.innerHTML = "More Info"
    button.addEventListener('click', function() {
        let stre = JSON.stringify(person);
        document.getElementById('Users').innerHTML = stre;
    } )
    li.appendChild(document.createTextNode('First Name: ' + person2first + ' Last Name: ' + person2last))
    li.appendChild(button)
    listElement.append(li)
   // console.log(listElement)
})
})
.catch(function (error){
 console.log('error!');
})