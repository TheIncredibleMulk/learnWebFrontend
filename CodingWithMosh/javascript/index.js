let person = {
    name: 'Andrew',
    age: 30
};

person.name = 'Mosh'; 

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';
person.selection = 'Jimmy';

console.log(person.name);