const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000


const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)


let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    //Step 1 - GET request
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        }
        else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })

    //Step 2 - POST request
    .post((req, res) => {
        const {id, name, genre, author} = req.body
        const errors = [];

        if(!id) errors.push("id is required");
        if(!name) errors.push("name is required");
        if(!genre) errors.push("genre is required");
        if(!author) errors.push("author is required");

        if(id && !isNaN(Numer(id) && books.some(b => b.id === Number(id)))) {
            errors.push("A book with this id already exists")
        }

        if(errors.length > 0) {
            return res.status(400).json({message: "Validation failed", errors: errors});
        }

        let newBook = new Book(req.body.id, req.body.name, req.body.genre, req.body.author);

        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    })

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})