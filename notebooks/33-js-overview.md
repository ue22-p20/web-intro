---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
    formats: md
    notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
    text_representation:
      extension: .md
      format_name: markdown
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  nbhosting:
    title: 30,000 ft overview
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<!-- #region slideshow={"slide_type": "slide"} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

# 30,000 ft overview

```javascript
// not needed in this notebook
// tools = require('../js/toolsv2')
// tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## preamble
<!-- #endregion -->

<!-- #region cell_style="center" -->
* from now on, we will very briefly cover  
  **some** features of the language
* for a more thorough study,  
  refer to [this excellent tutorial on javascript.info](https://javascript.info/)
* we will point at a selection of fragments as we go
* students interested should probably read it through
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} cell_style="split" -->
there's also a ton of books, among which I would recommend this one

as the name suggests, it's all about *getting rid of the old crap* that lingers in so many books

<!-- #endregion -->

<!-- #region cell_style="split" -->
![](../media/modern-js-for-the-impatient.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## various runtimes
<!-- #endregion -->

<!-- #region -->
* FYI, JavaScript is not restricted to being used in a browser
* among others, the [`node.js` runtime](https://nodejs.org/en/about/)
  * e.g. to power a backend web server
  * or simply from a regular terminal


```bash
$ node
Welcome to Node.js v12.5.0.
Type ".help" for more information.
> console.log("hello world")
hello world
> process.exit()
```
<!-- #endregion -->

<div class="rise-footnote">

again, within the `node` runtime, there indeed is a `console` global, but the `window` or `document` variables are not available, of course..

</div>    

<!-- #region slideshow={"slide_type": "slide"} -->
## syntax
<!-- #endregion -->

* looks a lot like Java (hence the name), and C/C++
* like Java and C++, and unlike Python, indentation does not matter
* a `;` **may be used** at the end of each statement  
  although it is often **not required**

```javascript tags=["raises-exception"] cell_style="split"
/*let*/ a = 10
```

```javascript slideshow={"slide_type": ""} cell_style="split"
// if in doubt, just add a semicolon
// at the end of each statement

/*let*/ b = 20;

```

<span class="rise-footnote"> 
    
**NOTE** as we have seen already, real code should **always** declare variables with `let` or `const`, so this would read `let a = 10;` - we avoid variable declaration **in the notebook** so we can re-evaluate the same cell 

</span>

<!-- #region slideshow={"slide_type": "slide"} -->
### comments
* 2 styles of comments - like in C++
<!-- #endregion -->

```javascript
// this is a comment, no need to close
// but must be repeated on each line

console.log("2 kinds of comments")

/* this is another one
   everything including newlines 
   is ignored until matching 
*/
```

<!-- #region slideshow={"slide_type": "slide"} -->
### tests and loops
<!-- #endregion -->

* `if` and `while` statements are straightforward
* `for` are a little more awkward - more on iterations as we go

```javascript cell_style="split"
// conditional if 
if (a == 10) {
    console.log("YES 10");
} else if (a == 12) {
    // 
} else {
    //
}
```

```javascript cell_style="split"
while (a >= 5) {
    console.log(a);
    a -= 3;
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
###   switch
<!-- #endregion -->

<!-- #region cell_style="split" -->
the switch statement in JavaScript
is similar to the ones in C++ and Java
it will branch your control flow into a
location that depends on the subject's value

**do not forget** the `break` statements !
<!-- #endregion -->

```javascript cell_style="split"
switch (a) {
    case 0:
        console.log("ZERO");
        break;
    case 10:
        console.log("TEN");
        break;
    case 20:
        console.log("TWENTY");
        break;
    default:
        console.log("NONE");        
}
```

<div class="rise-footnote">

if the `switch` statement is new to you, please refer to this [full article on `javascript.info`](https://javascript.info/switch)
    
</div>

<!-- #region slideshow={"slide_type": "slide"} -->
### C-style `for` loop
<!-- #endregion -->

* C- or Java-like iteration loops are supported
* although seldom needed 
* more on that about container types (arrays, …)


```javascript
for (let i=0; i<3; i++) {
    console.log(i);
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
## `console.log`
<!-- #endregion -->

* a function to show output
* very similar to Python's `print()` function
  * from a browser it ends up in the devel tools area
  * note that under `node`, it will just print
* accepts any number of arguments

```javascript
console.log(1, "two", [3, "four"])
```

<!-- #region slideshow={"slide_type": "slide"} -->
## exceptions
<!-- #endregion -->

* JavaScript supports exceptions, just like Python
* same bubbling mechanism
  * that scans the call stack 
  * until a catch statement is found

```javascript
try {
    // referring to an unknown variable
    unknown;
} catch (err) {
    console.log(`OOPS name=${err.name}, message=${err.message}`);
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
## variables ([link in tuto](https://javascript.info/variables))
<!-- #endregion -->

* as usual, variables are **names** that refer to **data in memory**
* highly recommended to **declare** your variables  
  using `let` or `const`
* like in Python, any such data is **typed** (although variables themselves are not)
* core language has some **basic types**

```javascript cell_style="split"
/*let*/ n = 10;
typeof(n)
```

```javascript cell_style="split"
/*const*/ s = "hello world";
typeof(s)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### *unpacking*-style assignment
<!-- #endregion -->

```javascript
// there is a form of parallel assignment 
// similar to Python's unpacking

/*let*/ [py, thon] = [10, 20];

py + thon
```

<!-- #region slideshow={"slide_type": "slide"} -->
## variable scope 
<!-- #endregion -->

* like in all other languages
  * need to limit the scope of a variable
  * so that variable `x` in 2 distinct functions do not clash
* use **lexical nested scope**
  * a variable is visible only within its code block `{}`
* a very common strategy, like in C++, Java, Python…

<!-- #region slideshow={"slide_type": "slide"} -->
### scope illustrated
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} tags=["raises-exception"]
// this is a global variable
/*let*/ a = "global";

function foo() {
    // this local declaration 
    // hides the global variable
    let a = "local";
    console.log("in foo():", a);
}

console.log("in global context:", a);
foo()
```

<!-- #region slideshow={"slide_type": "slide"} -->
### declaring variables with `let`
<!-- #endregion -->

* you should **always** declare your variables with **`let`** or **`const`**
  * even though (a lot of) legacy code uses `var` (*don't*) 
  * or, even worse, does not declare at all,  
    and thus relies on the global scope

* for new code, just **always** use `let` or `const`

<!-- #region slideshow={"slide_type": "slide"} -->
### blocks are delimited by `{}`
<!-- #endregion -->

* the elementary unit for scope is the **block**
* which is materialized by `{}`

```javascript tags=["raises-exception"]
/*let*/ y = "outermost";
{ 
    let y = "intermediate";
    { 
        let y = "innermost";
        console.log("level 2", y);
    }
    console.log("level 1", y);
}
console.log("level 0", y);
```

<!-- #region slideshow={"slide_type": "slide"} -->
## globals
<!-- #endregion -->

* context (browser components mostly) is exposed to programer
* through a set of **global variables**, e.g.
  * `document` to access the DOM
  * `window`, remember `setTimeout()`
  * `console` like in `console.log()`
  * `this` - a tricky one
* may depend on the runtime  


<p class="rise-footnote"> surprising as it may be, the notebook's JavaScript engine is an instance of <code>node</code>, and so is <b>not browser-related</b> <br> so we could not inspect the <code>document</code> or <code>window</code> variables in this context; of course you can do so from the browser's console though</p>

<!-- #region slideshow={"slide_type": "slide"} -->
## functions
<!-- #endregion -->

* like in other languages
* we have seen examples already

```javascript
function foo(x, y) {
    console.log(x, '+', y, '=', x+y);
}

foo(10, 20)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### duck typing
<!-- #endregion -->

* like in Python, 
* **objects** are typed
* but **variables** are not typed 

```javascript
// like in Python, function arguments
// are not statically typed
function foo(x, y) {
    console.log('x is a ', typeof(x));
    console.log(x, '+', y, '=', x+y);
}

// so what happens depend on the actual types
foo('abc', 'def')
```

<!-- #region slideshow={"slide_type": "slide"} -->
### scoping
<!-- #endregion -->

just an opportunity to say it again :  

* 99% of the time, a function definition comes with a `{}`
* so a function acts as **a lexical scope**
* and this is used and abused to avoid namespace leaks 
* i.e. to keep variable names to taint the global namespace

<!-- #region slideshow={"slide_type": "slide"} -->
#### scoping example
<!-- #endregion -->

```javascript cell_style="split" tags=[]
(function () {
  let status = 10
  function increment() {
    status += 1
    console.log("incremented", status)
  }
  increment()
  // run it several times
  for (let i=1; i<10; i++) 
    setTimeout(increment, i*1000)
})()
```

```javascript cell_style="split"
try {
    status
} catch (err) {
    console.log(`OOPS name=${err.name}, message=${err.message}`);
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
### alternative forms (1) - anonymous
<!-- #endregion -->

because of the pervasive role of functions in JS, there are **many ways** to define them

```javascript cell_style="split"
// create an anonymous function

(function(x) {
    console.log("I am anonymous", x)
})(100)
```

```javascript cell_style="split"
// same but through a variable

/*let*/ f = function(x) {
    console.log("assigned anonymous", x)
}

f(1000)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### alternative forms (2) - arrow functions
<!-- #endregion -->

```javascript cell_style="split"
// arrow function

(x) => console.log("arrow function", x)
```

```javascript cell_style="split"
((x) => console.log("arrow function", x))(100)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### loose binding
<!-- #endregion -->

* JavaScript is **very permissive**
* for example, number of args is not checked

```javascript
function fuzzy(x, y, z) {
    console.log("x = ", x, " y = ", y, " z = ", z);
}
// missing arg is undefined
fuzzy(10, 20)
fuzzy("abc", "def", "ghi")
// extra arguments gets lisently discarded !!
fuzzy("way", "too", "many", "arguments")
```

<!-- #region slideshow={"slide_type": "slide"} -->
### `this`
<!-- #endregion -->

* a very specific feature of JavaScript
* is that the implicit variable **`this`** is always defined
* useful and relevant **only** for
  * methods (more on this later)
  * some callbacks

```javascript
// this is always defined, even in cases
// where it makes no obvious sense

function show_this() {
    console.log(typeof(this));
}

show_this()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## classes
<!-- #endregion -->

as of ES6, the language has a proper `class` statement

```javascript cell_style="split"
class Vector {
  // just like Python's __init__
  // but NO NEED to pass 'self' in JavaScript
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // same for a regular method 
  display() {
    console.log(
      `[Vector x=${this.x} y=${this.y}]`)
  }
}
```

```javascript cell_style="split"
/*let*/ vector = new Vector(10, 20)
vector.display()
```

<p class="rise-footnote"> here again, running the first cell twice will cause an error; this is because, like with <code>let</code>, 
    <br>
    the language won't let you define the same <code>Vector</code> variable 
    twice in the same scope</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### notes on classes
<!-- #endregion -->

**NOTICE** the following from that first class example :

* `constructor` is very much alike `__init__` in Python
* the **implicit** `this` variable refers to the current object 
* it is very much alike the traditional `self` argument in Python
* except that it is **not mentioned** as a method parameter
* objects get created with `new Vector()` - Java and C++ style
  * not just plain Python-style `Vector()` 


<div class="rise-footnote"> 

also notice the string-formatting syntax 
<code>&#96;${expr}&#96;</code>
similar to Python's f-strings,  
except for the additional `$` (remember with f-strings it was just <code>&#96;{expr}&#96;</code>

</div>

<!-- #region slideshow={"slide_type": "slide"} -->
### old-school classes
<!-- #endregion -->

* ES6 is relatively recent
* you may come across older-school code that uses other techniques
* typically involving a `prototype` thingy
* here again, for new code you should stick  
  to using the new idiom (i.e. write `class`es)

<!-- #region slideshow={"slide_type": "slide"} -->
### `console.log` and objects
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
**TIP** about debugging JS objects :
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} cell_style="split"
// it may be tempting to write
console.log(`vector = ${vector}`)
```

```javascript slideshow={"slide_type": ""} cell_style="split"
// but it is better like this
console.log("vector = ", vector)
```

<p class="rise-footnote">
    Try it out within the browser's console :
    <br> try to run <code>log.console(document)</code> or any other JS object, 
    and see that you can navigate the inner structure of the object, 
    rather a flat representation that traditional languages have used us to.
</p>

<!-- #region slideshow={"slide_type": "slide"} tags=["level_intermediate"] -->
### properties
<!-- #endregion -->

<!-- #region tags=["level_intermediate"] -->
* modern JavaScript has a native notion of (Python-)properties
* i.e. expose an apparently mundane access  
  to an instance attribute
* through **getter** and **setter** functions
* that intercept read/write attempts  
  on the attribute
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} tags=["level_intermediate"] -->
### property example
<!-- #endregion -->

```javascript cell_style="split" tags=["level_intermediate"]
class Temperature {
  constructor(kelvin) {
    this.kelvin = kelvin;
  }
    
  get kelvin() {
    return this._kelvin;
  }

  set kelvin(kelvin) {
    if (kelvin < 0) {
      console.log("negative !!!");
      return
    }
    this._kelvin = kelvin;
  }
}
```

```javascript cell_style="split" tags=["level_intermediate"]
/*let*/ temp = new Temperature(10)
```

```javascript cell_style="split" tags=["level_intermediate"]
temp.kelvin = -10
```

```javascript cell_style="split" tags=["level_intermediate"]
temp
```
