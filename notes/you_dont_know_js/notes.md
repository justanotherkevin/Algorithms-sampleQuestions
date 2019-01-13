# Book 2 Chapter 2: 

## Lexical Scope
There are two predominant models for how scope works  
Lexical Scope, 
Dynamic Scope. 

wiki => lexical analysis, lexing or tokenization is the process of converting a sequence of characters into a sequence of tokens

the first traditional phase of a standard language compiler is called lexing (aka, tokenizing). If you recall, the lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.
```
function foo(a) {

	var b = a * 2;

	function bar(c) {
		console.log( a, b, c );
	}

	bar(b * 3);
}

foo( 2 ); // 2 4 12
```

## Cheating Lexical

 two such mechanisms. Both of them are equally frowned-upon in the wider community as bad practices to use in your code. But the typical arguments against them are often missing the most important point: __cheating lexical scope leads to poorer performance.__

1. eval(..)  
 eval(..) allows you to modify the lexical scope environment by cheating and pretending that author-time (aka, lexical) code was there all along.
 ```
 function foo(str, a) {
	eval( str ); // cheating!
	console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 ); // 1 3
```
when used in a __strict-mode__ program operates in its own lexical scope, which means declarations made inside of the eval() do not actually modify the enclosing scope.  
```
function foo(str) {
   "use strict";
   eval( str );
   console.log( a ); // ReferenceError: a is not defined
}

foo( "var a = 2" );
```
 if the Engine finds an eval(..) or with in the code, it essentially has to assume that all its awareness of identifier location may be invalid, because it cannot know at lexing time exactly what code you may pass to eval(..) to modify the lexical scope, or the contents of the object you may pass to with to create a new lexical scope to be consulted.

___ 

## Review (TL;DR)
Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.

Two mechanisms in JavaScript can "cheat" lexical scope: eval(..) and with. The former can modify existing lexical scope (at runtime) by evaluating a string of "code" which has one or more declarations in it. The latter essentially creates a whole new lexical scope (again, at runtime) by treating an object reference as a "scope" and that object's properties as scoped identifiers.

The downside to these mechanisms is that it defeats the Engine's ability to perform compile-time optimizations regarding scope look-up, because the Engine has to assume pessimistically that such optimizations will be invalid. Code will run slower as a result of using either feature. Don't use them.