# What is the drawback of having private methods in a JavaScript object?

## answer:

One of the drawback of creating a private method in JavaScript is that they are very **memory inefficient** because a _new copy of the method would be created for each instance._

```
var Employee = function (name, company, salary) {
  this.name = name || "";
  this.company = company || "";
  this.salary = salary || 5000;

  // We can create a private method like this
  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };
};
```

---

# What is “closure” in javascript? Can you provide an example?

## answer

A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

- Variable declared in his own scope
- Variable declared in parent function scope
- Variable declared in the global namespace

---

# Write a mul function which will work properly when invoked with following syntax.

```
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
```

`mul` function returns anonymous function, then at the lowest anonymous function will have access to all variables / params above.

```
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}
```

# How to empty an array in JavaScript?

For instance:

```
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
```

1.  ```
    arrayList = [];
    ```
2.  ```
    arrayList.length = 0;
    ```
3.  ```
    arrayList.splice(0, arrayList.length);
    ```
4.  ```
    while(arrayList.length) {
      arrayList.pop();
    }
    ```

---

# What will be the output of the following code?

```
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
```

The code above will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variables.

---

# What will be the output of the following code?

```
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
```

The code above will output 1 as output. delete operator is used to delete a property from an object.

---

# What is the difference between declaring a function in the formats listed below?

```
var foo = function() {
  // Some code
};
```

```
function bar () {
  // Some code
};
```

The main difference is function foo is defined at **_run-time_** and is called function expression, whereas function bar is defined at **_parse time_** and is called function statement.

```
// Run-Time function declaration
  foo(); // Call foo function here, It will give an error
  var foo = function() {
    console.log("Hi I am inside Foo");
  };
```

```
// Parse-Time function declaration
bar(); // Call bar function here, It will not give an Error
function bar() {
  console.log("Hi I am inside Foo");
};
```

---

# what is function hoisting in JavaScript?

In JavaScript var-declared variables and functions are hoisted. Let's take function hoisting first. Basically, the JavaScript interpreter looks ahead to find all the variable declaration and hoists them to the top of the function where it's declared.

```
foo(); // Here foo is still undefined
var foo = function foo() {
  return 12;
};
```

The code above behind the scene look something like below code:

```
var foo = undefined;
foo(); // Here foo is undefined
foo = function foo() {
  // Some code stuff
}
```

hoisting move the declaring variables to the top.

---

# What’s the difference between typeof and instanceof?

`typeof` is an operator that returns a string with the type of whatever you pass.

The `typeof` operator checks if a value belongs to one of the seven basic types: number, string, boolean, object, function, undefined or Symbol. `typeof(null)` will return object.

`instanceof` is more intelligent: it works on the level of prototypes. In particular, it tests to see if the right operand appears anywhere in the prototype chain of the left. `instanceof` doesn’t work with primitive types. It `instanceof` **operator checks the current object and returns true if the object is of the specified type**, for example:

```
var dog = new Animal();
dog instanceof Animal; // Output : true
```
```
var name = new String("xyz");
name instanceof String; // Output : true
```
---

# Difference between Function, Method and Constructor calls in JavaScript. 


If your are familiar with Object-oriented programming, More likely familiar to thinking of functions, methods, and class constructors as three separate things. But In JavaScript, these are just **three different usage patterns of one single construct.**

1. functions : The simplest usages of function call:
    ```
    function helloWorld(name) {
      return "hello world, " + name;
    }

    helloWorld("JS Geeks"); // "hello world JS Geeks"
    ```
2. Methods in JavaScript are nothing more than object properties that are functions.  

    Notice how helloWorld refer to this properties of obj. Here it's clear or you might have already understood that this gets bound to obj. But the interesting point that we can copy a reference to the same function helloWorld in another object and get a difference answer.
    ```
    var obj = {
      helloWorld : function() {
        return "hello world, " + this.name;
      },
      name: 'John Carter'
    }
    obj.helloWorld(); // // "hello world John Carter"
    ```
    ```
    var obj2 = {
      helloWorld : obj.helloWorld,
      name: 'John Doe'
    }
    obj2.helloWorld(); // "hello world John Doe"
    ```
3. The primary role of the constructor function is to initialize the object.
    Unlike function calls and method calls, a **constructor call** new Employee('John Doe', 28) creates a brand new object and passes it as the value of this, and implicitly returns the new object as its result.

    ```
    function Employee(name, age) {
      this.name = name;
      this.age = age;
    }

    var emp1 = new Employee('John Doe', 28);
    emp1.name; // "John Doe"
    emp1.age; // 28
    ```

---
# Event delegation 

```
<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul>
```
```
// Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
	}
});
```
bubble up, givign the action to the enclosing parent and within the function of the parent to find the `event.target`

---

# What are Service Workers and when can you use them?


It’s a technology that allows your web application to use cached resources first, and provide default experience offline, before getting more data from the network later. This principle is commonly known as Offline First.

Service Workers actively use promises. A Service Worker has to be installed,activated and then it can react on fetch, push and sync events.

As of 2017, Service Workers are not supported in IE and Safari.

---

# What is the difference between a method and a function in javascript?


In JS, that difference is quite subtle. A function is a piece of code that is called by name and function itself not associated with any object and not defined inside any object. It can be passed data to operate on (i.e. parameter) and can optionally return data (the return value).

```
// Function statement
function myFunc() {
  // Do some stuff;
}

// Calling the function
myFunc();
```
immediately invoked function expression (IIFE):
```
// Anonymous Self-invoking Function
(function() {
  // Do some stuff;
})();
```
binding with `this`
```
var obj1 = {
  attribute: "xyz",
  myMethod: function () {  // Method
    console.log(this.attribute);
  }
};

// Call the method
obj1.myMethod();
```
In ES6 we have `classes`
```
class MyAwesomeClass {
  myMethod() {
    console.log("hi there");
  }
}

const obj1 = new MyAwesomeClass();
obj1.myMethod();
```
Understand: the method is not some kind of special type of a function, and it's not about how you declare a function. It's the way we call a function. Look at that:
```
var obj1 = {
  prop1: "buddy"
}; 
var myFunc = function () {
  console.log("Hi there", this);
};
// let's call myFunc as a function: 
myFunc(); // will output "Hi there undefined" or "Hi there Window"
 
obj1.myMethod = myFunc;
//now we're calling myFunc as a method of obj1, so this will point to obj1
obj1.myMethod(); // will print "Hi there" following with obj1. 
```
---

# What is IIFE (Immediately Invoked Function Expression) and how it can be useful?

IIFE a function that runs as soon as it's defined. Usually it's anonymous (doesn't have a function name), but it also can be named.

```
(function() {
  console.log("Hi, I'm IIFE!");
})();
// outputs "Hi, I'm IIFE!"
```

The function inside IIFE doesn't have to be anonymous. This one will work perfectly fine and will help to detect your function in a stacktrace during `debugging`:
```
(function myIIFEFunc() {
  console.log("Hi, I'm IIFE!");
})();
// outputs "Hi, I'm IIFE
```

it can return values
```
var result = (function myIIFEFunc(param1) {
  console.log("Hi, I'm IIFE, " + param1);
  return 1;
})("Yuri");
// outputs "Hi, I'm IIFE, Yuri!"
// result variable will contain 1
```
You don't have to surround the function declaration into parens,
- ~function(){console.log("hi I'm IIFE")}()
- !function(){console.log("hi I'm IIFE")}()
- +function(){console.log("hi I'm IIFE")}()
- -function(){console.log("hi I'm IIFE")}()
- (function(){console.log("hi I'm IIFE")}());
- var i = function(){console.log("hi I'm IIFE")}();
- true && function(){ console.log("hi I'm IIFE") }();
- 0, function(){ console.log("hi I'm IIFE") }();
- new function(){ console.log("hi I'm IIFE") }
- new function(){ console.log("hi I'm IIFE") }()

## Applications and usefulness
Variables and functions that you declare inside an IIFE are **not visible** to the outside world, so you can:

- Use the IIFE for isolating parts of the code to hide details of implementation.
- Specify the input interface of your code by passing commonly used global objects (window, document, jQuery, etc.) IIFE’s parameters, and then reference these global objects within the IIFE via a local scope.
- Use it in closures, when you use closures in loops.
- IIFE is the basis of in the module pattern in ES5 code, it helps to prevent polluting the global scope and provide the module interface to the outside.

---

# Describe Singleton Pattern In JavaScript 

It provides a way to wrap the code into a logical unit that can be accessed through a single variable. The Singleton design pattern is used when only one instance of an object is needed throughout the lifetime of an application. In JavaScript, Singleton pattern have many uses, they can be used for NameSpacing, which reduce the number of global variables in your page (prevent from polluting global space), organizing the code in a consistent manner, which increase the readability and maintainability of your pages.

- There should be only one instance allowed for a class and
- We should allow global point of access to that single instance

## JavaScript: A Singleton as a Namespace 
To prevent this: 
```
function findUserName(id) {

}

/* Later in the page another programmer
added code */
var findUserName = $('#user_list');

/* You are trying to call :( */
console.log(findUserName())
```

One of the best ways to prevent accidentally overwriting variable is to namespace your code within a singleton object.
```
/*  Using Namespace */

var MyNameSpace = {
  findUserName : function(id) {},
  // Other methods and attribute go here as well
}

/* Later in the page another programmer
added code */
var findUserName = $('#user_list');

/* You are trying to call and you make this time workable */
console.log(MyNameSpace.findUserName());
```
## Singleton Design Pattern Implementation
```
/* Lazy Instantiation skeleton for a singleton pattern */

var MyNameSpace = {};
MyNameSpace.Singleton = (function() {

  // Private attribute that holds the single instance
  var singletonInstance;  

  // All of the normal code goes here
  function constructor() {
    // Private members
    var privateVar1 = "Nishant";
    var privateVar2 = [1,2,3,4,5];

    function privateMethod1() {
      // code stuff
    }

    function privateMethod1() {
      // code stuff
    }

    return {
      attribute1 : "Nishant",
      publicMethod: function() {
        alert("Nishant");// some code logic
      }
    }
  }

  return {
    // public method (Global access point to Singleton object)
    getInstance: function() {
      //instance already exist then return  
      if(!singletonInstance) {
        singletonInstance = constructor();
      }
      return singletonInstance;           
    }           
  }

})();   

// getting access of publicMethod
console.log(MyNamespace.Singleton.getInstance().publicMethod());
```
