const favoriteBooks = [
    {
        title: "Harry Potter",
        author: "J.K.Rowling",
        year: 1997,
        isNewerThan2000: false,
        age: 26,
        characters: ["Hermione", "Ron", "Harry", "Hagrid"],
},
    {
        title: "Lord of the Rings", 
        author: "J.R.R.Tolkien",
        year: 1954,
        isNewerThan2000: false,
        age: 69,
        characters: ["Sam", "Legolas", "Gandalf", "Aragorn"],
    }
]
    // using for loop 

    for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(favoriteBooks[i].title);
}
    // using for .. of loop

    for (const book of favoriteBooks) {
    console.log(book.title);
}
    // 

    let sumOfAge = 0 
    for (const book of favoriteBooks) {
        sumOfAge = sumOfAge + book.age
}

    const averageAge = sumOfAge / favoriteBooks.length
    console.log(sumOfAge)

    // check the age of books using if 

    for (const book of favoriteBooks) {
        if (book.isNewerThan2000 === true) {
          console.log(favoriteBooks[0].title);
        }
}

    // check the age of books using if/else 

    for (const book of favoriteBooks) {
        if (book.isNewerThan2000 === true) {
          console.log('this book is newer than 2000');
        
    } else {
        console.log('this book is older than 2000')
    }
}

    // check the age of books switched 

    for (const book of favoriteBooks) {
        if (book.isNewerThan2000 !== true) {
          console.log('This book is older than 2000: ' + favoriteBooks[0].title);
        
    } else {
        console.log('this book is newer than 2000' + favoriteBooks[0].title)
    }
}

    for (const book of favoriteBooks) {
        if (book.isNewerThan2000 !== true) {
          console.log('This book is older than 2000: ' + favoriteBooks[1].title);
        
    } else {
        console.log('This book is newer than 2000: ' + favoriteBooks[1].title)
    }
}

    // compare publishing years
 
    for (const book of favoriteBooks) {
        if (book.year > 2000) {
          console.log('This book is newer than 2000: ' + favoriteBooks[0].title);
        
    } else {
        console.log('This book is older than 2000: ' + favoriteBooks[0].title)

    }
}

    for (const book of favoriteBooks) {
        if (book.year > 2000) {
      console.log('This book is newer than 2000: ' + favoriteBooks[1].title);
    
    } else {
    console.log('This book is older than 2000: ' + favoriteBooks[1].title)
    }
}

    //combine the results using loops and conditionals 

    for (const book of favoriteBooks) {
        if (book.year > 2000) {
      console.log('This book is newer than 2000: ' + favoriteBooks[0].title + " and " + favoriteBooks[1].title);
    
    } else {
    console.log('This book is older than 2000: ' + favoriteBooks[0].title + " and " + favoriteBooks[1].title)
    }
}
