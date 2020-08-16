class Person {
    constructor(name ,age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

module.exports = Person;

let Wilson = new Person('Wilson', 24 );
let Brian = new Person('Brian', 24)

console.log(Wilson.getName());

let array = [];

array.push(Wilson);
array.push(Brian)

array.pop();

console.log(array);