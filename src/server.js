const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const PORT = 3000 // server port is 3000

const conn = mysql.createConnection({
    host: "localhost",
    // host: "replacewtencentserver",
    user: "root",
    // user: ThespAdmin,
    password: "Millisx(600)@10",
    database: "pointssheet"
}) 

conn.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + conn.threadId);
});
// implement hashing
const server = express()

// used because of the context as proxy at port 3000
server.use(cors())

// parsing and generating json
server.use(express.json())

//* ALL SERVER REQUESTS SET BELOW HERE
server.post("/api/authenticate", (req, res) => {
    const userData = req.body

    let ret
    let status = ""
    console.log(JSON.stringify(userData))

    conn.query("SELECT * FROM all_users WHERE email = (?)", userData.email, function (err, result) {
        // looked horrible when everything was split with brackets
        // sacrilege?
        console.log(result)
        if (err)             console.log(err)
        else if (result) {
            if (result[0].password == userData.password)  res.json({message: "success", permissions: result[0].membertype}) // send to end with membertype
            else                                          res.json({message: "fail"})
            console.log(status)
        } 
        else                  res.json({message: "fail"})
    })
})

server.get("/api/getUsersTable", (req, res) => {
    const request = req.body
    console.log("real")

    conn.query("Select * FROM all_users", (err, result) => {
        if (err)            console.log(err) // server error
        else if (result)    res.json({res: result, message: "success"}) // yay success condition
        else                res.json({message: "non-server Error"}) // client error
    })
})

// successful file compilation
server.listen(PORT, function(){
    console.log("listening on" + PORT)
})

