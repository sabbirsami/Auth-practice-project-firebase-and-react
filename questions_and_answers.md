<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

-   A: `{}`
-   B: `ReferenceError: greetign is not defined`
-   C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A,

<i>We know that in javascript there are 3 types of variables var let and const and we can reassigned var and let because of first line it is let variable thats why when we assign its value it don't show any kind of error </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
    return a + b;
}

sum(1, "2");
```

-   A: `NaN`
-   B: `TypeError`
-   C: `"12"`
-   D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C,

<i>This sum function take only 2 parameters and do sum but in sum function we provide 1 number and a string. When we try to sum number and string it just added with number as it is sum of 2 string link 5 + "Hi" = 5Hi </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

-   A: `['🍕', '🍫', '🥑', '🍔']`
-   B: `['🍝', '🍫', '🥑', '🍔']`
-   C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A,

<i>the answer is A. when we reassign favoriteFood value it change info object value but it don't change food array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
    return `Hi there, ${name}`;
}

console.log(sayHi());
```

-   A: `Hi there,`
-   B: `Hi there, undefined`
-   C: `Hi there, null`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B,

<i>When we take something as a parameter and try to use it but don't provide anything in function it show undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
    if (num) count += 1;
});

console.log(count);
```

-   A: 1
-   B: 2
-   C: 3
-   D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C,

<i>0 is falsy so the if condition not work and when other number comes the condition become true and then it added 1 to count value</i>

</p>
</details>
