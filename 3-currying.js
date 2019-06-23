const add = (x) => y => x + y


const addThree = add(3);

console.log(`3: ${addThree(3)}`);
console.log(`5: ${addThree(5)}`);
console.log(`6: ${addThree(6)}`);
