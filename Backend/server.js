const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dinesh@123",
    database: "prevmedsol"
})


// add Doctor sql
app.post('/register', (req, res) => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!"); 
        const sql = "INSERT INTO registeredusers (`firstname`,`middlename`,`lastname`,`email`,`password`,`cpassword`,`phone`,`fax`,`gender`,`dob`,`bloodgroup`,`country`,`state`,`city`,`street1`,`street2`,`zipcode` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.middlename,
            req.body.lastname,
            req.body.email,
            req.body.password,
            req.body.cpassword,
            req.body.phone,
            req.body.fax,
            req.body.gender,
            req.body.dob,
            req.body.bloodgroup,
            req.body.country,
            req.body.state,
            req.body.city,
            req.body.street1,
            req.body.street2,
            req.body.zipcode,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
    })
})



// add Doctor sql
app.post('/adddoctor', (req, res) => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!"); 
        const sql = "INSERT INTO doctors (`firstname`,`lastname`,`gender`,`phone`,`email`,`password`,`hospital`,`specialization`,`address`,`country`,`state`,`city` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.gender,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.hospital,
            req.body.specialization,
            req.body.address,
            req.body.country,
            req.body.state,
            req.body.city,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
    })
})


// add patient sql
app.post('/addpatient', (req, res) => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!"); 
        const sql = "INSERT INTO patients (`firstname`,`lastname`,`gender`,`bloodgroup`,`dob`,`phone`,`email`,`password`,`address`,`state`,`city`,`status` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.gender,
            req.body.bloodgroup,
            req.body.dob,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.address,
            req.body.state,
            req.body.city,
            req.body.status,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
    })
})


// add lab agent sql
app.post('/addlabagent', (req, res) => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!"); 
        const sql = "INSERT INTO labagents (`firstname`,`lastname`,`gender`,`phone`,`email`,`password`,`labname`,`address`,`state`,`city` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.gender,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.labname,
            req.body.address,
            req.body.state,
            req.body.city,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
    })
})


// add center sql
app.post('/addcenter', (req, res) => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!"); 
        const sql = "INSERT INTO centers (`centername`,`phone`,`email`,`password`,`fromtiming`,`totiming`,`address`,`state`,`city` ) VALUES (?)";
        const values = [
            req.body.centername,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.fromtiming,
            req.body.totiming,
            req.body.address,
            req.body.state,
            req.body.city,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
    })
})


// add lab sql
app.post('/addlab', (req, res) => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!"); 
        const sql = "INSERT INTO labs (`labname`,`address`,`state`,`city`,`fromtiming`,`totiming` ) VALUES (?)";
        const values = [
            req.body.labname,
            req.body.address,
            req.body.state,
            req.body.city,
            req.body.fromtiming,
            req.body.totiming,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
    })
})


// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM videos WHERE `email` = ? AND `password` = ?";
//     db.query(sql, [req.body.email, req.body.password], (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         if (data.length > 0) {
//             return res.json("Success");
//         } else {
//             return res.json("Fail");
//         }
//     })
// })

app.listen(8080, () => {
    console.log("listening");
})