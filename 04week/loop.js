// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
var i = 0;
do {
    i = i + 1;
    console.log();
} while (i < 5);
// 2. 
person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: 1925,
    gender: "female"
}

for(const property in person){
    if(birthDate % 2 === 0)(
        console.log(birthDate)
    )
}

arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: 1925,
        gender: "female"
    },
    {
        firstName: "Jimmy",
        lastName: "Doe",
        birthDate: 1925,
        gender: "female"
    },
    {
        firstName: "Jerry",
        lastName: "Doe",
        birthDate: 1925,
        gender: "female"
    }
]

mapPersons = arrayOfPersons.map(x => 
    console.log(x)
    )
filterPersons = arrayOfPersons.filter(
    person => person.gender === 'Male'
)
filterPersons2 = arrayOfPersons.filter(
    person => person.birthDate < 1990
)