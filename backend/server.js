const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"gtking",
    database:"gt"
})

app.get('/' , (re,res) => {
    res.json("it's working")
})

app.get("/user", (re,res) => {
    var sql = "select * from gt"
    db.query(sql,(err,data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data);
    })
})

app.listen(8080,() => {
    
})