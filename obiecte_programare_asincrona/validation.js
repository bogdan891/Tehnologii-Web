const increaseSalary = (salaries, percentage) => {
    if(!Array.isArray(salaries)) throw new Error("Invalid input!");
    if(typeof percentage !== "number") throw new Error("Invalid input");

    return salaries.map((salary) => salary * (1 + percentage / 100));
}

console.log(increaseSalary([2100, 4000], 10));
console.log(increaseSalary([2100, 4000], "10"));