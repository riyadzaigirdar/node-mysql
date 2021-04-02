require("dotenv").config();
const express = require("express");
const sql = require("./db");
const logger = require("./logger")

app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger)

// app.get("/task", (req,res)=>{
//     sql.query("Select * from tasks", function (err, result) {
//         if(err) res.status(500).json({msg:"something went wrong, try again later"});
//         res.status(200).send(result);
//     });
// })

app.use("/task", require("./routes/"));

PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Application running on ${PORT}`))

