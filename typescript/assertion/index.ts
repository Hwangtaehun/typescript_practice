var myName = '세호' as string;

interface Person {
    name: string;
    age: number;
}

// var joo = {};
// joo.name = '형주';
// joo.age = 31;

var joo1 = {
    name: '형주',
    age: 31
};

var joo2: Person = {
    name: '형주',
    age: 31
};

var joo3 = {} as Person;
joo3.name = '형주';
joo3.age = 31;

console.log("joo1: " + joo1.name + ", " +joo1.age);
console.log("joo2: " + joo2.name + ", " +joo2.age);
console.log("joo3: " + joo3.name + ", " +joo3.age);