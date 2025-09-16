// Exercise 1
const greeter = (myArray, counter) => {
    const greetText = "Hello";
    for (const item of myArray) {
        console.log(`${greetText} ${item}`);
    }
};
console.log("\n--- Exercise 1 ---");
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

// Exercise 2
const capitalize = (str = "") => {
    const [first = "", ...rest] = str;
    return first.toUpperCase() + rest.join("");
};
console.log("\n--- Exercise 2 ---");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3
const colors = ["red", "green", "blue"];
const capitalizeColors = (colors = []) => colors.map(capitalize);
console.log("\n--- Exercise 3 ---");
console.log(capitalizeColors(colors));

// Exercise 4
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = (arr = []) => arr.filter(n => n < 20);
console.log("\n--- Exercise 4 ---");
console.log(filterLessThan20(values));

// Exercise 5
const numbers = [1, 2, 3, 4];
const sumAndProduct = (nums = []) =>
    nums.reduce(
        ({ sum, product }, n) => ({ sum: sum + n, product: product * n }),
        { sum: 0, product: 1 }
    );
const result = sumAndProduct(numbers);
console.log("\n--- Exercise 5 ---");
console.log(result.sum);
console.log(result.product);

// Exercise 6git init
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

console.log("\n--- Exercise 6 ---");
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
