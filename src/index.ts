const message : string = "Hello Eslint";
console.log(message);


//* task 1 
const greet = (firstName: string) => {
    console.log( `Hello ${firstName}`);
};

greet("Student");

//* task 2
const double = (n: number) => {
 console.log(`The double of ${n} is ${ n * 2}`);
};
double(5);

//* task 3
const isEven = (num: number) => {
    return num % 2 === 0;
};

console.log(`Is 20 even? ${isEven(20)}`); 
console.log(`Is 7 even? ${isEven(7)}`);

isEven(5);

//* task 4

const square = (x: number) => {
    console.log(`The square of ${x * x}`)  ;
};
square(5);


//* task 5

const getAge= (year: number) => {
    console.log(`This person was born in ${year}, so in 2026 their age is ${2026 - year}.`);
};

getAge(1994);

//* task 6

const prices = [10, 20, 30];
let total = 0;
prices.forEach((price) => {
    total += price;
});

console.log(`The total price is ${total}.`);


//* task 7

const user = { name: "John" };

const sayHi = () => {
    console.log(`Hi ${user.name}!`);
};

sayHi();


//* task 8

const colors = ["red", "blue"];

colors.forEach((color) => {
    console.log(`Color: ${color}`);
});

//* task 9

const items = [1, 2, 3];

const doubled = items.map((item) => {
    return item * 2;
});

console.log(`The double is ${doubled}.`);

//* task 10 

type User = {
    name: string;
    isAdmin: boolean;
}

const checkAuth = (( user: User ): boolean => {
    return user.isAdmin;
});

const maria : User = {name: "Maria", isAdmin: true};
console.log(checkAuth(maria));


//* task 11

import { promises as fs } from "fs";

const readFile = async (path: string): Promise<void> => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log(`File content:\n${data}`);
    } catch (error) {
        console.error(`Error reading file at ${path}:`, error);
    }
};

readFile("example.txt");


//* task 12


const getData = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error fetching data from ${url}: ${error}`);
    }
};

getData("https://jsonplaceholder.typicode.com/todos/1");


