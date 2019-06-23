const bookTitles = [
    'Book Title 1',
    'Book Title 2',
    'Book Title 3',
];
const compose = (...fns) => x =>
    fns.reduceRight((accumulator, fn) => fn(accumulator), x);


const trace = msg => x => (console.log(msg, x), x);

const lowercase = x => x.toLowerCase();

const map = fn => array => array.map(fn);

const join = joiner => value => value.join(joiner);
const split = splitter => value => value.split(splitter);

const transformToUrl = compose(
    map(
        compose(
            join('-'),
            split(' '),
            lowercase,
        )
    )
);

console.log(transformToUrl(bookTitles));
