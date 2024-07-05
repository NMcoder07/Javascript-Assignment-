
let library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
 ];
 
 
 function displayReadingStatus(books) {
    books.forEach(book => {
        console.log(`Book: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus ? 'Already read' : 'Not read yet'}`);
    });
 }
 

 displayReadingStatus(library);
 