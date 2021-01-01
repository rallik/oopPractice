////////////////////////////////// NO Constuctor //////////////////////////////////

// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };


// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));


///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////// WITH Constuctor /////////////////////////////////

// //Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
//     console.log('Book initialized') 
// }

// const book3 = new Book('Book Three', 'Bob the Builder', '1999');
// console.log(book3);
// console.log(book3.getSummary())
// const book4 = new Book('Book Four', 'Margaret Thatcher', '1988');
// console.log(book4);
// console.log(book4.getSummary());

///////////////////////// WITH Constuctor & Prototype ////////////////////////////

// //Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.revised = false;
//     console.log('Book initialized')
// }

// // getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// // getAge
// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} old`;
// }

// // revise/change year
// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// }



// const book5 = new Book('Book Five', 'Harry Potter', '2005');
// console.log(book5);
// console.log(book5.getSummary())
// const book6 = new Book('Book Six', 'Joan of Arc', '2021');
// console.log(book6);
// console.log(book6.getSummary());

// console.log(book6.getAge());
// book6.revise('200');
// console.log(book6);
// console.log(book6.getAge());


///////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////// Inheritence ///////////////////////////////////

//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;
    console.log('Book initialized')
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
