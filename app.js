require("dotenv").config();
const express = require("express");
const sql = require("./db");
const logger = require("./logger")

app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger)


app.use("/task", require("./routes/"));

PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Application running on ${PORT}`))


