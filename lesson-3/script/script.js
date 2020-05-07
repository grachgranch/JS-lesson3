// Array #1
let fruits = [
    { name: 'pinaple', count: 3 },
    { name: 'pomegranate', count: 7 },
    { name: 'orange', count: 12 },
    { name: 'plum', count: 40 },
    { name: 'cherry', count: 50 }
];

let fruitList = fruits.map(item => item.name);
console.log(fruitList);

let fruitQuantity = fruits.map(item => item.count);
console.log(fruitQuantity);


//Array #2
let ReadingClub = [
    { name: 'Anton', books: ['120 days of Sodom', 'Holy Bible',] },
    { name: 'Maya', books: ['Ulysses', '100 year of Solitude',] },
    { name: 'Sasha', books: ['Witch hummer', 'Metamorphosis',] },
    { name: 'Alina', books: ['The hunchback of Notre Dame', 'life is a dream',] },
    { name: 'Dima', books: ['Totem and taboo', 'Nausea'] }
];
let bookList = ReadingClub.reduce((acc, book) => {
    if (book.books) {
        acc.push(book.books)
    };
    return acc;
}, []);

console.log(bookList);
