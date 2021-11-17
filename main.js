/*
function Person( firstName, lastName, age ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printInfo = function(){
        console.log( this.firstName, this.lastName, this.age );
    }
}

let alex = new Person( "Alex", "Miller", 25 );

console.log( alex );

alex.printInfo();
alex.lastName = "Gomez";
alex.printInfo();

alex.__proto__.height = 182;

console.log( alex.height );

let maria = new Person( "Maria", "Miller", 25 );
console.log( maria.height );
*/

class Person{
    constructor( firstName, lastName, age ){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    printInfo(){
        console.log( this._firstName, this._lastName, this._age );
    }
}

let alex = new Person( "Alex", "Miller", 25 );
console.log( alex );
alex.printInfo();

class Student extends Person{
    constructor( firstName, lastName, age, id, instructor ){
        super( firstName ,lastName, age );
        this._id = id;
        this._instructor = instructor;
        this._department = "Computer Science";
    }

    get firstName(){
        return this._firstName;
    }

    set firstName( fN ){
        this._firstName = fN;
    }

    printAllInfo(){
        super.printInfo();
        console.log( this.id, this.instructor );
    }

    /*
    static sayHello(){
        console.log( "Hello" );
    } */ 

    static sayHello( name = "" ){
        console.log( "Hello " + name );
    }
}

let maria = new Student( "Maria", "Gomez", 29, 12345, "Adam" );
console.log( maria );
maria.firstName = "Martha";
maria.firstName

Student.sayHello();
Student.sayHello( "Ricardo" );
