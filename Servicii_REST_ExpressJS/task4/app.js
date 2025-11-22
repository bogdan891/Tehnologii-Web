const express = require("express");
const Book = require("./Book");
const app = express();
const port = 3000;

const bookrouter = express.Router();
const statusRouter = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", bookrouter);
app.use("/status", statusRouter);

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(
    2,
    "Harry Potter and the Order of Phoenix",
    "fanstasy",
    "JK Rowling"
  ),
  new Book(3, "Narnia", "fantasy", "CS Lewis"),
];

bookrouter
  .route("/book")
  .get((req, res) => {
    let filteredBooks = [];
    if (req.query.genre) {
      filteredBooks = books.filter((x) => x.genre === req.query.genre);
    } else {
      filteredBooks = books;
    }
    res.json(filteredBooks);
  })

  .post((req, res) => {
    let newBook = new Book(
      req.body.id,
      req.body.name,
      req.body.genre,
      req.body.author
    );

    books.push(newBook);
    console.log(books);
    return res.json(newBook);
  })

  .delete((req, res) => {
    books = [];
    return res.json({ message: "All books are deleted" });
  });

bookRouter.route("/books/:bookId").put((req, res) => {
  const id = Number(req.params.bookId);
  let bookModif = bookRouter.find((e) => e.id === id);
  if (!bookModif) return res.status(404).json({ message: "Book not found" });

  if (req.body.name !== undefined) bookModif.name = req.body.name;
  if (req.body.genre !== undefined) bookModif.genre = req.body.genre;
  if (req.body.author !== undefined) bookModif.author = req.body.author;

  return res.json(bookModif);
});

statusRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running properly",
    status: "ok",
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log("Running on the port " + port);
});
