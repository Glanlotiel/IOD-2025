/* In modern JavaScript, we can use classes as a template for creating objects and encapsulating data and functions. These are
built on prototypes but with extra syntax and features which are useful for object-oriented programming. */

// a class is like a template or blueprint
class ExampleClass {
  // each instance of the class will have any properties
  prop1 = "value1";
  prop2 = "value2";
  constructor() {
    // constructor function creates a new instance of this class
  }
  method1() {
    // methods are functions of the class
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Object Oriented vs. Functional
Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, each representing an
instance of a class with its own data and behavior. Objects can interact with each other through defined interfaces.

Functional Programming (FP) is a programming paradigm that organizes code into functions. It emphasizes immutability,
avoiding side effects, and the use of functions as first-class citizens.

In simple terms, OOP is centered around objects with specific roles and behaviors, while FP focuses on functions and their
interactions with data.

Historically FP was the main way of programming. Around the 90s OOP became popular with languages such as C++ and Java.
Today FP has gained favor again and both are used. */

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Classes can inherit from a parent class (prototype) via the extends keyword. */

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
class Rabbit extends Animal {
  hide() {
    // custom function, also inherits from Animal
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.hide(); // bunny hides!

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Methods and properties can be inherited from a parent and then overridden in child classes. The super keyword refers to the
parent class. */

class Rabbit extends Animal {
  stop() {
    // overrides stop method in parent class
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
  hide() {
    // custom function, also inherits this.name from Animal
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.stop(); // bunny stands still. bunny hides!

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Constructors can also inherit from a parent, with extra child-specific class code. The super keyword in a child constructor calls
the parent class constructor. */

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // call the constructor function of the parent, inherited Animal class
    this.earLength = earLength; // adds custom properties only for instances of Rabbit
  }
  stop() {
    // function overridden from parent class
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
  hide() {
    // custom child class function
    console.log(`${this.name} hides!`);
  }
}
let bunny = new Rabbit("bunny", 8); // bunny contains properties and methods from Animal and Rabbit
console.log(bunny.earLength); // 8

// --------------------------------------------------------------------------------------------------------------------------------------//
/* Child classes also inherit, and can override, class properties, such as type below: */

class Animal {
  type = "animal";
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  describe() {
    console.log(`${this.name} is a ${this.type}`);
  }
  //... previous Animal methods go here
}
class Rabbit extends Animal {
  type = "rabbit";
  //... previous Rabbit methods go here
}
new Rabbit("bunny").describe(); // bunny is a rabbit
new Animal("fuzzy wuzzy").describe(); // fuzzy wuzzy is a animal

// --------------------------------------------------------------------------------------------------------------------------------------//
/* We can assign methods and properties to the class itself, using the static keyword. These static methods/properties
belong to the class, and are inherited by any child classes, but don’t belong to any particular instance. */

class Person {
  static latin = "persona"; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
  }
}
let jonas = new Person("Jonas");
console.log(jonas.getName()); // Jonas - name and getName() belong to an instance of Person
console.log(jonas.latin); // undefined - latin property doesn't belong to jonas
console.log(Person.latin); // persona - latin property belongs to Person class
let anon = Person.createAnonymous(); // use static (factory) method to create generic Person instance

// --------------------------------------------------------------------------------------------------------------------------------------//

/* So far our classes have only used public properties & methods, so all instances can use these as needed. However, an
important principle of object-oriented programming involves delimiting the internal interface from the external one. We can
do this in a few ways: one is to signify properties or methods as protected by using an underscore (convention only, not
enforced by JS): */

class Laptop {
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand); // public property, accessed externally from any instance
console.log(macbook._hardDiskType); // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()); // recommended way to access protected property

// --------------------------------------------------------------------------------------------------------------------------------------//
/* Private properties & methods are enforced by JS, and cannot be accessed outside of the class itself. This lets us maintain
certain data as internal only. */

class Laptop {
  _hardDiskType = "HDD"; // protected property, SHOULD only be used by inheriting classes
  #numCPUFans1 = 1; // private property, CAN only be used internally by class methods
  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return false;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans1++; // can access private properties internally
  }
}
const macbook1 = new Laptop("Macbook Pro");
console.log(macbook.#numCPUFans); // error: private property is not accessible

// --------------------------------------------------------------------------------------------------------------------------------------//
/* Classes that inherit protected properties and methods can access and modify them, but private properties and
methods cannot even be accessed by children. */

class GamingLaptop extends Laptop {
  constructor(brand) {
    super(brand); // public property, externally available to instances
    this._hardDiskType = "SSD"; // protected props should be accessed by children, not instances
    this.#numCPUFans = 2; // error: private property is not accessible
    this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
  }
  isGaming() {
    return true;
  } // public method
}
const alienware = new GamingLaptop("Alienware");
//console.log(alienware.#numCPUFans) // error: private property is not accessible
console.log(alienware._hardDiskType); // no error: but protected property SHOULD NOT be accessed
console.log(alienware.getHDiskType()); // better: public method for accessing protected property
