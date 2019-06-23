const toUpperCase = x => x.toUpperCase();
const repeatTwice = x => `${x} ${x}`;
const exclaim = x => `${x}!`;


const compose = (...fns) => x =>
    fns.reduceRight((accumulator, fn) => fn(accumulator), x);

const pipe = (...fns) => x =>
    fns.reduce((accumulator, fn) => fn(accumulator), x);


const withExuberanceCompose = compose(exclaim, repeatTwice, toUpperCase);
const withExuberancePipe = pipe(toUpperCase, repeatTwice, exclaim);


console.log(withExuberanceCompose('egg-head'));
console.log(withExuberancePipe('egg-head'));
