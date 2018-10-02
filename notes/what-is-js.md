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

