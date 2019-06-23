const push = value => array => {
    const clone = [...array];
    clone.push(value);
    return clone;
};


const a = [1, 2, 3]
const b = push(4)(a);

console.log(a === b);
console.log(`a = ${a}`);
console.log(`b = ${b}`);

class ImmutableGlass {
    constructor(content, amount) {
        this.content = content;
        this.amount = amount;
    }

    takeDrink(value) {
        return new ImmutableGlass(this.content, Math.max(this.amount - value, 0))
    }
}


const glass1 = new ImmutableGlass('water', 100);
const glass2 = glass1.takeDrink(20);
console.log(`glass1: ${glass1.amount}`);
console.log(`glass2: ${glass2.amount}`);
console.log(`glass1==glass2: ${glass1 === glass2}`);
