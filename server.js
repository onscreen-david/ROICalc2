import path from 'path';
import express from 'express';
const mysql = require('mysql');
//const cors = require('cors')

//app.use(cors());

const PORT = process.env.HTTP_PORT || 3003;
const app = express()
app.use(express.static(path.join(__dirname, 'client', 'build')));

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'dang',
    database: 'ROIFormResponses'
});

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Go to /allclients to view the table, go to /addclient to add stuff, go to /newclientid to see the highest id + 1")
})

app.get("/allclients", (req, res) => {  
    const queryString = "SELECT * FROM onscreenclients"

    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            return res.send(err)
        }
        else {
            res.json(rows);
        }

    });
});

app.get("/client", (req, res) => {  
    const { client_id } = req.query;
    const queryString = `SELECT * FROM onscreenclients WHERE client_id = ${client_id}`

    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            return res.send(err)
        }
        else {
            res.json(rows);
        }
    });
});

app.get("/newclientid", (req, res) => {
    const queryString = 'SELECT client_id from OnScreenClients ORDER BY client_id DESC LIMIT 1'
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            return res.send(err)
        }
        else {
            if (rows.length != 0) {
                data: rows[0].client_id + 1
                return res.send(`${rows[0].client_id + 1}`)
            }
            data: 0
            return res.send(`${0}`)
        }

    });
})

app.get("/addclient", (req, res) => {
    const { client_id, client_name, client_company, client_title, client_email, q1, q2, q3, q4_1, q4_2, q4_3, q4_4, q4_5, q4_6, q4_7, q5, q6_1, q6_2, q7_1, q7_2, q7_3, q7_4, q7_5, q8, q9, q10_1, q10_2, q10_3} = req.query;
    const insertQuery = `INSERT INTO OnScreenClients (client_id, client_name, client_company, client_title, client_email, q1, q2, q3, q4_1, q4_2, q4_3, q4_4, q4_5, q4_6, q4_7, q5, q6_1, q6_2, q7_1, q7_2, q7_3, q7_4, q7_5, q8, q9, q10_1, q10_2, q10_3) VALUES(${client_id}, '${client_name}', '${client_company}', '${client_title}', '${client_email}', ${q1}, ${q2}, ${q3}, ${q4_1}, ${q4_2}, ${q4_3}, ${q4_4}, ${q4_5}, ${q4_6}, ${q4_7}, ${q5}, ${q6_1}, ${q6_2}, ${q7_1}, ${q7_2}, ${q7_3}, ${q7_4}, ${q7_5}, ${q8}, ${q9}, ${q10_1}, ${q10_2}, ${q10_3})`

    connection.query(insertQuery, (data, err, results) => {
        if (err) {
            return res.send(err)
        } else {
            data: "Success";
            return res.send("Successfully added client");
        }
    });
});


app.get("/modifyentireclient", (req, res) => {
    const { client_id, client_name, client_company, client_title, client_email, q1, q2, q3, q4_1, q4_2, q4_3, q4_4, q4_5, q4_6, q4_7, q5, q6_1, q6_2, q7_1, q7_2, q7_3, q7_4, q7_5, q8, q9, q10_1, q10_2, q10_3} = req.query;

    const modifyQuery = `UPDATE OnScreenClients SET client_name = '${client_name}', client_company = '${client_company}', client_title = '${client_title}', client_email = '${client_email}', q1 = ${q1}, q2 = ${q2}, q3 = ${q3}, q4_1 = ${q4_1}, q4_2 = ${q4_2}, q4_3 = ${q4_3}, q4_4 = ${q4_4}, q4_5 = ${q4_5}, q4_6 = ${q4_6}, q4_7 = ${q4_7}, q5 = ${q5}, q6_1 = ${q6_1}, q6_2 = ${q6_2}, q7_1 = ${q7_1}, q7_2 = ${q7_2}, q7_3 = ${q7_3}, q7_4 = ${q7_4}, q7_5 = ${q7_5}, q8 = ${q8}, q9 = ${q9}, q10_1 = ${q10_1}, q10_2 = ${q10_2}, q10_3 = ${q10_3} WHERE client_id = ${client_id}`

    connection.query(modifyQuery, (data, err, results) => {
        if (err) {
            return res.send(err)
        } else {
            data: "Success";
            return res.send("Successfully modified client");
        }
    });
});

app.get("/modifyclient", (req, res) => {
    const { client_id, field, new_value} = req.query;

    const modifyQuery = (field in ["client_name", "client_company", "client_title", "client_email"] ? `UPDATE OnScreenClients SET ${field} = '${new_value}' WHERE client_id = ${client_id}` : `UPDATE OnScreenClients SET ${field} = ${new_value} WHERE client_id = ${client_id}`) // add quotes if the field is a string
    
    connection.query(modifyQuery, (data, err, results) => {
        if (err) {
            return res.send(err)
        } else {
            data: "Success";
            return res.send("Successfully modified client");
        }
    });
});


app.get("/deleteclient", (req, res) => {  
    const { client_id } = req.query;
    const queryString = `DELETE FROM onscreenclients WHERE client_id = ${client_id}`

    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(`Successfully deleted client with ID ${client_id}`)
        }
    });
});


app.get('/flower', (req, res) => {
    res.json({
        name: 'Dandelion',
        colour: 'Blue-ish'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});