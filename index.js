const express = require("express")
const app = express()

app.use(express.static("./public"))

let model = [];
let X = "X";
let O = "O";
let BLANK = "&nbsp;";
let BOARD_FULL = "BOARD FULL";


for (let i = 0; i < 9; i++) {
    model[i] = BLANK;
}

app.get("/getModel", (req, res) => {
    console.log("Someone got the model")
    res.send(model);
})

app.get("/setModel/:model", (req,res)=>{
    console.log(model);
    model = req.params.model;
    res.send("ok");

})

app.listen(5555, function (err) {
    if (err) return console.error(err);
    console.log("We are listening on http://localhost:5555");
})