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

// // Magazine Constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }

// // Use mag constructor
// Magazine.prototype.constructor = Magazine;

// //Inherit prototype
// Magazine.prototype = Object.create(Book.prototype)

// //Instantiate mag obj
// const mag1 = new Magazine('Mag 1', 'Anna Wintour', '2015', 'May');
// console.log(mag1.getSummary());
// console.log(mag1);


///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// Object Create //////////////////////////////////

// //Object of protos

// const bookProtos = {
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} old`;
//     }
// };

// const book7 = Object.create(bookProtos);
// book7.title = 'Book Seven';
// book7.author = 'Mr Clean';
// book7.year = '2002';

// console.log(book7);

// const book8 = Object.create(bookProtos, {
//     title: { value: 'Book Eight'},
//     author: { value: 'Mrs Butterworth'},
//     year: { value: '2011'}
// });

// console.log(book8);

///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// ES6 Classes ///////////////////////////////////

// class Book{
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} old`;
//     }

//     revise(newYear) {
//         this.year = newYear;
//         this.revised = true;
//     }
//     //need to call class, not just object
//     static topBookStore() {
//         return `Barnes & Noble`;
//     }
// }

// const book9 = new Book('Book Nine', 'Master Chief', '2007');
// book9.revise('2008')
// console.log(book9);
// console.log(Book.topBookStore());


///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// Sub Classes ///////////////////////////////////


class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//mag subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag2 = new Magazine('Mag 2', 'Jimmy Chin', '2018', 'June');
console.log(mag2);
console.log(mag2.getSummary());