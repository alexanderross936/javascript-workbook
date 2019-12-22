// Provided first array of people who could be potential players.
const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  // Here we prepare arrays for the players and teams.
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  // Here we make classes for the players and teams.
  class player {
    constructor(person, canthrow){
        this.person = person,
        this.canthrow = canthrow
    }
  }
  class blueTeammate {
    constructor(player){
        this.color = 'blue';
        this.player = player;
    
  }
}
class redTeammate {
    constructor(player){
        this.color = 'red';
        this.player = player;
    
  }
}
// This function will display the people provided as potential players.
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML = ''
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  // Here we enable players to be made from the provided list of people
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    let index = arrOfPeople.findIndex((person)=> id === person.id)
    listOfPlayers.push(new player(arrOfPeople[index], true))
    arrOfPeople.splice(index, 1)
    listPlayers()
    listPeopleChoices()
  }

// Here we create a listPlayers() function which will be inserted into the makePlayer() function.
// This appends everything to a <li> tag then appends all of them to the listElement.
  const listPlayers = () => {
    let listElement = document.getElementById('players')
    listElement.innerHTML = ''
    console.log(listElement)
    listOfPlayers.map( player => {
        const li = document.createElement("li")
        console.log(listOfPlayers)
        const buttonRed = document.createElement("button")
        buttonRed.innerHTML = "Red Team"
        const buttonBlue = document.createElement("button")
        buttonBlue.innerHTML = "blue Team"
        li.appendChild(document.createTextNode(player.person.name + " - " + player.person.skillSet))
        li.appendChild(buttonRed)
        buttonBlue.addEventListener('click', function() {addBlue(player.person.id)} )
        buttonRed.addEventListener('click', function() {addRed(player.person.id)} )
        li.appendChild(buttonBlue)
        listElement.append(li)
        console.log(listElement)
    })
  }

// Here we create the function to add to the blue team.
const addBlue = (id) =>{
    console.log(`li ${id} was clicked!`)
    console.log(blueTeam,'ads;lfkj')
    let index = listOfPlayers.findIndex((player)=> id === player.person.id)
    console.log(listOfPlayers[index],'a;sldkfj;lehwhevlnkjlshrihgl')
    blueTeam.push(new blueTeammate(listOfPlayers[index].person))
    listOfPlayers.splice(index, 1)
    console.log('blue', blueTeam)
    let listElement = document.getElementById('blue')
    listElement.innerHTML = ''
    console.log(listElement)
    listPlayers()
    blueTeam.map( player => {
        const li = document.createElement("li")
        console.log(player, 'aheslid')
        li.appendChild(document.createTextNode(player.player.name + " - " + player.player.skillSet))
        listElement.append(li)
        console.log(listElement)
    
})
}

// And here we create the function to add to the red team.
const addRed = (id) =>{
    console.log(`li ${id} was clicked!`)
    console.log(redTeam,'ads;lfkj')
    let index = listOfPlayers.findIndex((player)=> id === player.person.id)
    console.log(listOfPlayers[index],'a;sldkfj;lehwhevlnkjlshrihgl')
    redTeam.push(new redTeammate(listOfPlayers[index].person))
    // console.log(index)
    // blueTeam.push(listOfPlayers[index])
    listOfPlayers.splice(index, 1)
    console.log('red', redTeam)
    let listElement = document.getElementById('red')
    listElement.innerHTML = ''
    console.log(listElement)
    listPlayers()
    redTeam.map( player => {
        const li = document.createElement("li")
        console.log(player, 'aheslid')
        li.appendChild(document.createTextNode(player.player.name + " - " + player.player.skillSet))
        listElement.append(li)
        console.log(listElement)
        
    })
    }

// Tests
const assert = require('assert')
it('Can add people to players', () => {
    makePlayer("Alex")
    assert.equal(listOfPlayers[0], "Alex")
    makePlayer("Tom")
    assert.equal(listOfPlayers[1], "Tom")
})
it('Can make a teammate', () => {
    addBlue("Alex")
    assert.equal(blueTeam[0], "Alex")
})