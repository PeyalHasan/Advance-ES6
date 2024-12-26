
// What is class?
// class is a blueprint for creating objects with pre-defined properties and methods that can be used to create objects with the same properties and methods as the class definition itself. Can you say it in Bengali?
// ক্লাস হল একটি ব্লুপ্রিন্ট যা পূর্বে নির্ধারিত গুণগুলি এবং পদ্ধতিগুলি সহ অবজেক্ট তৈরির জন্য ব্যবহৃত হতে পারে এবং এই ক্লাস ডিফিনিশন নিজেই একই গুণগুলি এবং পদ্ধতিগুলি সহ অবজেক্ট তৈরির জন্য ব্যবহৃত হতে পারে।
// What is the difference between class and object?
// class is a blueprint for creating objects with pre-defined properties and methods that can be used to create objects with the same properties and methods as the class definition itself. object is an instance of a class that has its own properties and methods.

const products = [
    { name: 'laptop', price: 1000 },
    { name: 'desktop', price: 1500 },
    { name: 'phone', price: 500 },
    { name: 'tablet', price: 300 },
    { name: 'watch', price: 200 },
    { name: 'headphone', price: 100 },
    { name: 'keyboard', price: 50 },
    { name: 'mouse', price: 30 },
    { name: 'charger', price: 20 },
    { name: 'case', price: 10 },
]
//example

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}
const lenovo = new Product('Le le lenovo');
console.log(lenovo);
lenovo.speak('oba kita kou');

class Teacher{

    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }

    lecture(){
        console.log('Sir is teaching Math');
    }
}
const sirSolaiman = new Teacher('Solaiman Sir', 'Math');
const sirBinimoy = new Teacher('Binimoy Sir', 'Physics');
console.log(sirSolaiman, sirBinimoy);

// Extends are also called inheritance and it is inherited from the parent class to the child class


class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }   
    move(){
        console.log('Vehicle is moving');
    }
}
class Bus extends Vehicle{
    constructor(name, price, color, seat){
        super(name, price);
        this.color = color;
        this.seat = seat;
    }

}
class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}