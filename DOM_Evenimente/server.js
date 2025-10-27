let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((cors()));
app.use("/api", router);

const array = [
    {id: 1, name: "Ionut", age: 25},
    {id: 2, name: "Alex", age: 35},
    {id: 3, name: "Eva", age: 22},
    {id: 4, name: "Denisa", age: 33},
    {id: 5, name: "Matei", age: 32},
];

router.route("/getList").get((req, res) => {
    res.json(array);
});

router.route("/getList").post((req, res) => {
    let el = req.body;
    array.push(el);
    res.json(array);
});

router.route("/getById/:id").get((req, res) => {
    const id = parseInt(req.params.id);
    const item = array.find((x) => x.id === id);

    if(item) res.json(item);
    else res.status(404).json({message: "Resursa nu afost gasita!"});
});

let port = 8000;
app.listen(port);

console.log(`API is running on port ${port}...`);