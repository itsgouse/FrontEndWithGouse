
## JavaScript Fundamentals: Core Concepts & Data Structures 

### 1. Comments

Comments are non-executable lines of code used by developers to explain code, add notes, or temporarily disable parts of the code. They are ignored by the JavaScript engine.

* **Single-line:** `// This is a single-line comment`
* **Multi-line:**
    ```javascript
    /*
    This is a
    multi-line comment.
    */
    ```
**Usage:** Improve code readability and aid debugging.

---

### 2. Variables: `var`, `let`, `const`

Variables are named containers for storing data. JavaScript provides three keywords for declaration, each with distinct scoping and reassignment rules.

* **`var`**: Function-scoped (or global). Hoisted and initialized with `undefined`. Can be re-assigned and re-declared. (Less common in modern JS).
* **`let`**: Block-scoped (`{}`). Hoisted but not initialized (Temporal Dead Zone). Can be re-assigned, but not re-declared in the same scope. (Preferred for mutable variables).
* **`const`**: Block-scoped. Hoisted but not initialized. Cannot be re-assigned or re-declared. Must be initialized at declaration. (Preferred for constant references).

**Diagram: Variable Scoping**

```
Global Scope
  |
  +-- Function Scope (var)
  |      |
  |      +-- Block Scope (let, const)
  |      |   (e.g., inside if/else, for loops)
  |      +-- Block Scope (let, const)
  |
  +-- Block Scope (let, const)
```

---

### 3. Data Types: Overview

JavaScript has several built-in data types. They are broadly categorized as primitive and non-primitive (objects).

* **Primitive Types:**
    * **String:** Textual data (e.g., `"hello"`).
    * **Number:** Both integers and floating-point numbers (e.g., `10`, `3.14`).
    * **Boolean:** Logical values (`true` or `false`).
    * **`undefined`:** Variable declared but no value assigned.
    * **`null`:** Intentional absence of any object value.
    * **Symbol (ES6):** Unique, immutable values, often used as object property keys.
    * **BigInt (ES2020):** For very large integer numbers beyond `Number.MAX_SAFE_INTEGER`.
* **Non-Primitive (Object Type):**
    * **Object:** Collections of key-value pairs.
    * **Array:** Ordered collections of values (a type of object).
    * **Function:** Callable objects.
    * **Set (ES6):** Collections of unique values.
    * **Map (ES6):** Collections of key-value pairs where keys can be any data type.

---

### 4. Operators

Operators perform actions on values (operands).

* **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**` (exponentiation), `++`, `--`.
* **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
    * `let x = 10;`
    * `x += 5;` (same as `x = x + 5;`)
* **Comparison:** `==` (loose equality), `===` (strict equality), `!=`, `!==`, `>`, `<`, `>=`, `<=`.
    * **Key:** Always prefer `===` to avoid unexpected type coercion.
* **Logical:** `&&` (AND), `||` (OR), `!` (NOT).
* **Ternary (Conditional):** `condition ? valueIfTrue : valueIfFalse;` (Shorthand for `if-else`).
* **Nullish Coalescing (`??`) (ES2020):** Returns right-hand side if left is `null` or `undefined`. `value ?? defaultValue`
* **Optional Chaining (`?.`) (ES2020):** Safely accesses properties of potentially `null` or `undefined` objects. `obj.prop?.subProp`

**Diagram: Operator Precedence (Simplified BODMAS/PEMDAS)**

```
Highest Precedence
  V
Parentheses ()
Exponents **
Multiplication *, Division /, Modulo %
Addition +, Subtraction -
Comparison ==, ===, !=, !==, >, <, >=, <=
Logical AND &&
Logical OR ||
Assignment = (Lowest)
  V
Lowest Precedence
```

---

### 5. Type Coercion (`==` vs `===`, Truthy/Falsy)

JavaScript automatically converts values from one type to another (implicit coercion) in certain contexts, especially with `==`.

* **Implicit Coercion:**
    * `5 + "5"` results in `"55"` (Number to String).
    * `"10" - 5` results in `5` (String to Number).
    * `true + 1` results in `2` (Boolean `true` to Number `1`).
* **Truthy/Falsy Values:** In boolean contexts (like `if` statements or `&&`, `||`), values are evaluated as `true` or `false`.
    * **Falsy:** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
    * **Truthy:** All other values (e.g., `1`, `"hello"`, `[]`, `{}`).

**Key Takeaway:** Use `===` (strict equality) to avoid automatic type conversions and potential bugs.

---

### 6. Control Flow

Determines the order in which statements are executed.

* **Conditional Statements (`if`/`else if`/`else`):** Execute code blocks based on conditions.
    ```javascript
    if (condition1) { /* code */ }
    else if (condition2) { /* code */ }
    else { /* code */ }
    ```
* **Switch Statement:** For multiple branches based on a single expression's value.
    ```javascript
    switch (expression) {
        case value1: /* code */ break;
        default: /* code */
    }
    ```

**Diagram: Switch Statement Flow**

```
Start
  |
  V
(Evaluate Expression)
  |
  V
Match Case 1? --No--> Match Case 2? --No--> ... --No--> Default Block
  |                           |                           |
  Yes                         Yes                         V
  V                           V                         End
Case 1 Block                Case 2 Block
  |                           |
  V                           V
Break                       Break
  |                           |
  V                           V
End                         End
```

---

### 7. Iterations (Loops)

Repeats a block of code.

* **`for` loop:** For a known number of iterations.
    ```javascript
    for (init; condition; update) { /* code */ }
    ```
* **`while` loop:** Repeats as long as a condition is true (checked before each iteration).
    ```javascript
    while (condition) { /* code */ }
    ```
* **`do...while` loop:** Executes at least once, then repeats as long as condition is true (checked after each iteration).
    ```javascript
    do { /* code */ } while (condition);
    ```
* **`for...of` (ES6):** Iterates over iterable objects (Arrays, Strings, Maps, Sets).
    ```javascript
    for (const item of iterable) { /* code */ }
    ```
* **`for...in`:** Iterates over enumerable property *keys* of an object. (Use with caution for arrays).
    ```javascript
    for (const key in object) { /* code */ }
    ```

---

### 8. Functions

Reusable blocks of code that perform a specific task. They can take inputs (parameters) and return an output.

* **Declaration:** `function funcName(params) { /* code */ }`
* **Expression:** `const funcName = function(params) { /* code */ };`
* **Arrow Functions (ES6):** `const funcName = (params) => { /* code */ };` (Concise, no `this` binding).

**Diagram: Function Structure**

```
Function Definition
  |
  +-- (Parameters)
  |
  +-- Code Block (Logic)
  |
  +-- Return Value (Optional Output)
```

---

### 9. `this` Keyword

The `this` keyword refers to the context in which a function is executed. Its value changes based on *how* the function is called.

* **Global Context:** `window` (browsers) / `global` (Node.js).
* **Object Method:** The object itself.
* **Simple Function:** Global object (non-strict mode) or `undefined` (strict mode).
* **Arrow Functions:** Inherits `this` from its *lexical (surrounding) scope*. (Does not have its own `this`).
* **Event Handlers:** The element that triggered the event.

**Key Takeaway:** `this` is tricky; arrow functions offer more predictable behavior, especially in callbacks.

---

### 10. `null` vs `undefined` vs `NaN`

Special primitive values representing the absence or invalidity of data.

* **`undefined`**:
    * A variable has been declared but not assigned a value.
    * A function doesn't explicitly return anything.
    * A non-existent object property or array element.
* **`null`**:
    * An intentional assignment to indicate the *absence* of any object value. It means "nothing" or "empty" specifically assigned.
* **`NaN` (Not-a-Number)**:
    * A numeric value representing an undefined or unrepresentable numerical result (e.g., `0/0`, `Math.sqrt(-1)`).
    * `NaN === NaN` is `false`. Use `Number.isNaN()` to check.

**Table: `null` vs `undefined`**

| Feature           | `undefined`                         | `null`                            |
| :---------------- | :---------------------------------- | :-------------------------------- |
| **Meaning** | Uninitialized / Absent              | Explicitly assigned "no value"    |
| **`typeof`** | `"undefined"`                       | `"object"` (historical quirk)     |
| **`==` (loose)** | `true` when compared to `null`      | `true` when compared to `undefined` |
| **`===` (strict)**| `false` when compared to `null`     | `false` when compared to `undefined`|

---

### 11. Data Types: String

Strings are immutable sequences of characters.

**Example:** `let greeting = "Hello";`

**String Methods Table:**

| Method         | Input                                | Output                       | Usage                                                 |
| :------------- | :----------------------------------- | :--------------------------- | :---------------------------------------------------- |
| `length`       | (Property)                           | Number                       | `greeting.length` -> 5                                |
| `charAt(index)`| Number                               | Character                    | `greeting.charAt(0)` -> "H"                           |
| `concat(str2)` | String                               | New String                   | `s1.concat(s2)`                                       |
| `indexOf(sub)` | String                               | Number (index or -1)         | `greeting.indexOf("lo")` -> 3                         |
| `includes(sub)`| String                               | Boolean                      | `greeting.includes("ell")` -> true                    |
| `slice(s, e)`  | Number (start, end opt.)             | New String                   | `greeting.slice(0, 3)` -> "Hel"                       |
| `toUpperCase()`| (No input)                           | New String                   | `greeting.toUpperCase()` -> "HELLO"                   |
| `toLowerCase()`| (No input)                           | New String                   | `greeting.toLowerCase()` -> "hello"                   |
| `trim()`       | (No input)                           | New String                   | `"  hi  ".trim()` -> "hi"                             |
| `split(sep)`   | String (separator opt.)              | Array of Strings             | `"a,b,c".split(',')` -> `["a", "b", "c"]`             |
| `replace(old,new)`| String (old, new)                 | New String                   | `greeting.replace("e", "a")` -> "Hallo" (first only) |

---

### 12. Data Types: Number

All numbers in JS are 64-bit floating-point.

**Example:** `let PI = 3.14;` `let count = 100;`

**Number Methods (Built-in Math object & Number prototype):**

| Method/Property | Input                                  | Output                               | Usage                                                 |
| :-------------- | :------------------------------------- | :----------------------------------- | :---------------------------------------------------- |
| `Math.abs(x)`   | Number                                 | Number                               | `Math.abs(-7)` -> 7                                   |
| `Math.round(x)` | Number                                 | Number (nearest integer)             | `Math.round(4.7)` -> 5                                |
| `Math.floor(x)` | Number                                 | Number (rounds down)                 | `Math.floor(4.7)` -> 4                                |
| `Math.ceil(x)`  | Number                                 | Number (rounds up)                   | `Math.ceil(4.3)` -> 5                                 |
| `Math.min(...x)`| Numbers                                | Number (smallest)                    | `Math.min(10, 5, 20)` -> 5                            |
| `Math.max(...x)`| Numbers                                | Number (largest)                     | `Math.max(10, 5, 20)` -> 20                           |
| `Math.random()` | (No input)                             | Number (float, [0, 1) )              | `Math.random()` -> 0.xxxx                             |
| `Math.pow(base, exp)`| Numbers                           | Number (base^exponent)               | `Math.pow(2, 4)` -> 16                                |
| `Number.parseInt(str)`| String (radix opt.)               | Number (integer)                     | `Number.parseInt("12.9")` -> 12                       |
| `Number.parseFloat(str)`| String                           | Number (float)                       | `Number.parseFloat("12.9")` -> 12.9                   |
| `toFixed(digits)`| Number (digits after decimal)          | String (formatted)                   | `3.14159.toFixed(2)` -> "3.14"                        |

---

### 13. Data Types: Array

Arrays are ordered, zero-indexed collections that can hold mixed data types.

**Example:** `let colors = ["red", "green", "blue"];`

**Array Methods Table:**

| Method         | Input                        | Output                   | Usage                                                 |
| :------------- | :--------------------------- | :----------------------- | :---------------------------------------------------- |
| `length`       | (Property)                   | Number                   | `colors.length` -> 3                                  |
| `push(elem)`   | Any                          | Number (new length)      | Adds to end. `colors.push("yellow")`                  |
| `pop()`        | (No input)                   | Any (removed element)    | Removes from end. `colors.pop()`                      |
| `shift()`      | (No input)                   | Any (removed element)    | Removes from beginning. `colors.shift()`              |
| `unshift(elem)`| Any                          | Number (new length)      | Adds to beginning. `colors.unshift("purple")`         |
| `concat(arr2)` | Array                        | New Array                | Joins arrays. `arr1.concat(arr2)`                     |
| `join(sep)`    | String (separator opt.)      | String                   | `colors.join('-')` -> "red-green-blue"                |
| `slice(s, e)`  | Number (start, end opt.)     | New Array                | Non-modifying copy. `colors.slice(1, 3)` -> ["green", "blue"] |
| `splice(idx, del, ...add)`| Numbers, Any        | Array (removed elements) | Modifies original. `colors.splice(1,1,"orange")`      |
| `indexOf(elem)`| Any                          | Number (index or -1)     | `colors.indexOf("green")` -> 1                        |
| `includes(elem)`| Any                         | Boolean                  | `colors.includes("red")` -> true                      |
| `forEach(cb)`  | Function (callback)          | Undefined                | Iterates, no return. `arr.forEach(item => {})`        |
| `map(cb)`      | Function (callback)          | New Array                | Transforms elements. `arr.map(item => item.toUpperCase())` |
| `filter(cb)`   | Function (callback)          | New Array                | Selects elements based on condition. `arr.filter(num => num > 10)` |
| `reduce(cb, init)`| Function, Any (initial)    | Single Value             | Accumulates values. `arr.reduce((acc, curr) => acc + curr, 0)` |

---

### 14. Data Types: Object

Objects are unordered collections of key-value pairs. Keys are strings (or Symbols).

**Example:** `let book = { title: "JS Basics", author: "Dev", pages: 200 };`

**Object Methods Table (Built-in Object methods):**

| Method         | Input                        | Output                   | Usage                                                 |
| :------------- | :--------------------------- | :----------------------- | :---------------------------------------------------- |
| `Object.keys(obj)`| Object                     | Array of Strings         | Returns property names. `Object.keys(book)`           |
| `Object.values(obj)`| Object                   | Array of Any             | Returns property values. `Object.values(book)`        |
| `Object.entries(obj)`| Object                  | Array of Arrays          | Returns `[key, value]` pairs. `Object.entries(book)`  |
| `hasOwnProperty(prop)`| String (prop name)    | Boolean                  | Checks if object has direct property. `book.hasOwnProperty('title')` |
| `Object.assign(target, ...sources)`| Objects | Target Object (modified) | Copies properties. `Object.assign({}, book)`          |

---

### 15. Data Types: Set (ES6)

A `Set` is a collection of unique values.

**Example:** `let uniqueItems = new Set([1, 2, 3, 2, 1]); // uniqueItems will be {1, 2, 3}`

**Set Methods Table:**

| Method         | Input                        | Output                   | Usage                                                 |
| :------------- | :--------------------------- | :----------------------- | :---------------------------------------------------- |
| `new Set(iterable)`| Iterable (optional)        | New Set                  | Creates a new Set.                                    |
| `size`         | (Property)                   | Number                   | Number of unique elements. `uniqueItems.size` -> 3    |
| `add(value)`   | Any                          | Set (this Set)           | Adds a new unique element. `uniqueItems.add(4)`       |
| `delete(value)`| Any                          | Boolean                  | Removes an element. `uniqueItems.delete(2)`           |
| `has(value)`   | Any                          | Boolean                  | Checks if an element exists. `uniqueItems.has(1)`     |
| `clear()`      | (No input)                   | Undefined                | Removes all elements. `uniqueItems.clear()`           |
| `forEach(cb)`  | Function (callback)          | Undefined                | Iterates over elements. `set.forEach(item => {})`     |

---