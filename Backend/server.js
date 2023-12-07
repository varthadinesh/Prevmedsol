const express = require("express");
const mysql = require('mysql');
const db = require('./db');
const {
  createDatabaseQuery,
  useDatabaseQuery,
  createDoctorsTableQuery,
  createPatientsTableQuery,
  createLabagentsTableQuery,
  createCentersTableQuery,
  createLabsTableQuery,
  createAppointmentsTableQuery,
  createPackagesTableQuery,
  createMailboxTableQuery
} = require('./queries');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors('*'));
app.use(express.json());
var nodemailer = require("nodemailer");

let savedOTPS = {};

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  service: "Gmail",
  auth: {
    type: "OAuth2",
      user: process.env.REACT_APP_USER, // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      clientId: process.env.REACT_APP_CLIENTID,
      clientSecret: process.env.REACT_APP_CLIENTSECRET,
      refreshToken: process.env.REACT_APP_REFRESH_TOKEN
  }
});

app.post('/sendotp', (req, res) => {
    let email = req.body.email;
    let digits = '0123456789';
    let limit = 4;
    let otp = ''
    for (i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];

    }

    var mailOptions = {
        from: process.env.REACT_APP_FROMMAIL,
        to: `${email}`,
        subject: "Verification mail to register for Prevmedsol",
        generateTextFromHTML: true,
        html: `<b>Hello user, Please use this otp ${otp} for verification</b>`
      };

    smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
                // response.send("couldn't send")
            }
            else {
                savedOTPS[email] = otp;
                setTimeout(
                    () => {
                        delete savedOTPS.email
                    }, 60000
                )
                console.log(response);
                return res.json(response)
            }
            smtpTransport.close();
        }
    )
})

app.post('/verify', (req, res) => {
    let otprecived = req.body.otp;
    let email = req.body.email;
    if (savedOTPS[email] == otprecived) {
        res.send("Verfied");
    }
    else {
        res.status(500).send("Invalid OTP")
    }
})

// Create database and tables
db.query(createDatabaseQuery, (err) => {
  if (err) throw err;

  db.query(useDatabaseQuery, (err) => {
    if (err) throw err;

    db.query(createDoctorsTableQuery, (err) => {
      if (err) throw err;

      db.query(createPatientsTableQuery, (err) => {
        if (err) throw err;
  
        db.query(createLabagentsTableQuery, (err) => {
            if (err) throw err;
      
            db.query(createCentersTableQuery, (err) => {
                if (err) throw err;
          
                db.query(createLabsTableQuery, (err) => {
                    if (err) throw err;
              
                    db.query(createAppointmentsTableQuery, (err) => {
                        if (err) throw err;
                  
                        db.query(createPackagesTableQuery, (err) => {
                            if (err) throw err;
                      
                            db.query(createMailboxTableQuery, (err) => {
                                if (err) throw err;
                          
                                console.log('Database and tables created successfully');
                            });
                        });
                    });
                });
            });
        });
      });
    });
  });
});
// const db = mysql.createConnection({
//     host: process.env.REACT_APP_DB_HOST,
//     user: process.env.REACT_APP_DB_USER,
//     password: process.env.REACT_APP_DB_PASSWORD,
//     database: process.env.REACT_APP_DB_DATABASE
// })

// Queries related to doctor starts
//doctor login check
app.post('/doctor', (req, res) => {
    const sql = "SELECT * FROM doctors WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// add Doctor sql
app.post('/adddoctor', (req, res) => {
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
            return res.json("Error");
        }
        console.log("data added successfully");
        return res.json(data);
    })
})

// retrieving doctors 
app.get('/doctors', (req, res) => {
    const sql = "SELECT * FROM doctors";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

app.post('/doctors', (req, res) => {
    const email = req.body.email;
    const newData = req.body;
    const sql = 'UPDATE doctors SET ? WHERE email = ?';

    // console.log(email);

    db.query(sql, [newData, email], (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err);
        }
        console.log("Data updated successfully");
        return res.json(data);
    })
});

app.delete('/doctors', (req, res) => {
    const email = req.body.email;
    const sql = 'DELETE FROM doctors WHERE email = ?';

    db.query(sql, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("Data deleted successfully");
        return res.json(data);
    });
});

// Queries related to doctor ends

// Queries related to patient starts
//patient login check
app.post('/patient', (req, res) => {
    const sql = "SELECT * FROM patients WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");

        }
    })
})

// add user(register) sql
app.post('/register', (req, res) => {

    const sql = "INSERT INTO patients (`firstname`,`middlename`,`lastname`,`email`,`password`,`phone`,`gender`,`dob`,`bloodgroup`,`country`,`state`,`city`,`street1`,`street2`,`zipcode` ) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.middlename,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.phone,
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
            return res.json("Error");
        }
        console.log("data added successfully");
        return res.json(data);
    })
})

// add patient sql
app.post('/addpatient', (req, res) => {

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
            return res.json("Error");
        }
        console.log("data added successfully");
        return res.json(data);
    })
})

// retrieving patients in add appointment
app.get('/addappointment', (req, res) => {
    const sql1 = "SELECT  firstname, lastname from patients";
    const sql2 = "select centername from centers";

    const result = {data1:[],data2:[]};

    db.query(sql1, (err, dbdata) => {
        if (err) {
            return res.json("Error");
        }
        else{
            result.data1 = dbdata
        }
        
        db.query(sql2, (err, dbdata1)=>{
            if(err){
                return res.json("Error");
            }
            else{
                result.data2 = dbdata1
            }
            return res.json(result);

        })
    })
})

// retrieving patients 
app.get('/patients', (req, res) => {
    const sql = "SELECT * FROM patients";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

app.post('/patients', (req, res) => {
    const email = req.body.email;
    if(req.body.frompage === "forgotpassword"){
    const sql = 'UPDATE patients SET password = ? WHERE email = ?';
        var password = req.body.password
        db.query(sql, [password, email], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("Data updated successfully");
            return res.json(data);
        })
    }
    else{
    const sql = 'UPDATE patients SET ? WHERE email = ?';
        var newData = req.body;
        db.query(sql, [newData, email], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("Data updated successfully");
            return res.json(data);
        })
    }

    // console.log(email);
});

app.delete('/patients', (req, res) => {
    const email = req.body.email;
    const sql = 'DELETE FROM patients WHERE email = ?';

    db.query(sql, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("Data deleted successfully");
        return res.json(data);
    });
});

// Queries related to patient ends

// Queries related to lab agent starts
//lab agent login check
app.post('/lab', (req, res) => {
    const sql = "SELECT * FROM labagents WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// add lab agent sql
app.post('/addlabagent', (req, res) => {
  
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
            return res.json("Error");
        }
        console.log("data added successfully");
        return res.json(data);
    })
})

// retrieving labagents 
app.get('/labagents', (req, res) => {
    const sql = "SELECT * FROM labagents";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

app.post('/labagents', (req, res) => {
    const email = req.body.email;
    const newData = req.body;
    const sql = 'UPDATE labagents SET ? WHERE email = ?';

    // console.log(email);

    db.query(sql, [newData, email], (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err);
        }
        console.log("Data updated successfully");
        return res.json(data);
    })
});

app.delete('/labagents', (req, res) => {
    const email = req.body.email;
    const sql = 'DELETE FROM labagents WHERE email = ?';

    db.query(sql, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("Data deleted successfully");
        return res.json(data);
    });
});

// Queries related to lab agent ends

//frontoffice login check
// app.post('/doctor', (req, res) => {
//     const sql = "SELECT * FROM doctors WHERE `email` = ? AND `password` = ?";
//     db.query(sql, [req.body.username, req.body.password], (err, data) => {
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

// add package sql
app.post('/addpackage', (req, res) => {
 
    const sql = "INSERT INTO packages (`packagename`,`packagedescription`,`amount`,`imageurl`,`service1`,`service2`,`service3`,`service4`,`service5`,`service6`,`service7`,`service8`,`service9`,`service10` ) VALUES (?)";
    const values = [
        req.body.packagename,
        req.body.description,
        req.body.amount,
        req.body.imageurl,
        req.body.service1,
        req.body.service2,
        req.body.service3,
        req.body.service4,
        req.body.service5,
        req.body.service6,
        req.body.service7,
        req.body.service8,
        req.body.service9,
        req.body.service10,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error");
        }
        console.log("data added successfully");
        return res.json(data);
    })
})

// add center sql
app.post('/addcenter', (req, res) => {
 
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
                return res.json("Error");
            }
            console.log("data added successfully");
            return res.json(data);
        })
})

// add lab sql
app.post('/addlab', (req, res) => {
 
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
                return res.json("Error");
            }
            console.log("data added successfully");
            return res.json(data);
        })
})

// add appointment sql
app.post('/addappointment', (req, res) => {

        const sql = "INSERT INTO appointments (`patient`,`appointment`,`center`,`date`,`time` ) VALUES (?)";
        const values = [
            req.body.patient,
            req.body.appointment,
            req.body.center,
            req.body.date,
            req.body.timing,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json("Error");
            }
            console.log("data added successfully");
            return res.json(data);
        })
})

// retrieving data for dashboard
app.get('/dashboardPage', (req,res)=>{
    const result = [];

    const sql = "select count(*) as rowcount  from ";

    db.query((sql+"doctors"), (err,dbdata1) => {
        if (err) {
            return res.json("Error");
        }
        else{
            result.push(dbdata1)
        }

        db.query(sql+"patients", (err, dbdata2)=>{
            if(err){
                return res.json("Error");
            }
            else{
                result.push(dbdata2);
            }

            db.query(sql+"labs", (err, dbdata3)=>{
                if(err){
                    return res.json("Error");
                }
                else{
                    result.push(dbdata3);
                }

                db.query(sql+"appointments", (err, dbdata4)=>{
                    if(err){
                        return res.json("Error");
                    }
                    else{
                        result.push(dbdata4)
                    }
                    return res.json(result);
                })
            })
        })
    })
})

// retrieving packages
app.get('/packages', (req, res) => {
    const sql = "SELECT * FROM packages";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

app.post('/managepackages', (req, res) => {
    const packagename = req.body.packagename;
    const newData = req.body;
    const sql = 'UPDATE packages SET ? WHERE packagename = ?';

    // console.log(newData);

    db.query(sql, [newData, packagename], (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err);
        }
        console.log("Data updated successfully");
        return res.json(data);
    })
});

app.delete('/managepackages', (req, res) => {
    const packagename = req.body.packagename;
    const sql = 'DELETE FROM packages WHERE packagename = ?';

    db.query(sql, [packagename], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("Data deleted successfully");
        return res.json(data);
    });
});

// retrieving centers
app.get('/managecenters', (req, res) => {
    const sql = "SELECT * FROM centers";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

app.post('/managecenters', (req, res) => {
    const email = req.body.email;
    const newData = req.body;
    const sql = 'UPDATE centers SET ? WHERE email = ?';

    // console.log(email);

    db.query(sql, [newData, email], (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err);
        }
        console.log("Data updated successfully");
        return res.json(data);
    })
});

app.delete('/managecenters', (req, res) => {
    const email = req.body.email;
    const sql = 'DELETE FROM centers WHERE email = ?';

    db.query(sql, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log("Data deleted successfully");
        return res.json(data);
    });
});
  
// send email related sql
app.post('/patientsentdata', (req, res) => {
 
    const sql = "INSERT INTO sentmailbox (`fromemail`,`toemail`,`subject`,`message`,`date`,`time`,`status`) VALUES (?)";
    const values = [
        req.body.fromemail,
        req.body.toemail,
        req.body.subject,
        req.body.message,
        req.body.date,
        req.body.time,
        req.body.status
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error");
        }
        console.log("patientsent data added successfully");
        return res.json(data);
    })
})

// retrieving patientsenddata
app.get('/patientsentdata', (req, res) => {
    const sql = "SELECT * FROM sentmailbox";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// Update patientsenddata
app.post('/inbox', (req, res) => {
    const toemail = req.body.toemail;
    const status = req.body.status;
    const sql = 'UPDATE sentmailbox SET status = ? WHERE toemail = ?';

    // console.log(email);

    db.query(sql, [status, toemail], (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err);
        }
        console.log("Data updated successfully");
        return res.json(data);
    })
});

// retrieving labs
app.get('/managelabs', (req, res) => {
    const sql = "SELECT * FROM labs";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// retrieving patient appointments
app.get('/patientappointment', (req, res) => {
    const sql1 = "SELECT * from patients";
    const sql2 = "SELECT * FROM appointments";

    const result = {data1:[],data2:[]};

    db.query(sql1, (err, dbdata) => {
        if (err) {
            return res.json("Error");
        }
        else{
            result.data1 = dbdata
        }
        
        db.query(sql2, (err, dbdata1)=>{
            if(err){
                return res.json("Error");
            }
            else{
                result.data2 = dbdata1
            }
            return res.json(result);

        })
    })
})

app.listen(8080, () => {
    console.log("listening");
})
