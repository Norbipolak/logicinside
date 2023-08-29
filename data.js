const favoriteBooks = [
    {
        title: "Harry Potter",
        author: "J.K.Rowling",
        year: 1997,
        isNewerThan2000: false,
        age: 26,
        characters: ["Hermione", "Ron", "Harry", "Hagrid"]
},
    {
        title: "Lord of the Rings", 
        author: "J.R.R.Tolkien",
        year: 1954,
        isNewerThan2000: false,
        age: 69,
        characters: ["Sam", "Legolas", "Gandalf", "Aragorn"]
 
}
]

console.log(favoriteBooks)

for (title of favoriteBooks){
    console.log(title)
}