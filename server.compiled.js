"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mysql = require('mysql'); //const cors = require('cors')
//app.use(cors());


var PORT = process.env.HTTP_PORT || 3003;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'dang',
  database: 'ROIFormResponses'
});
app.get("/", function (req, res) {
  console.log("Responding to root route");
  res.send("Go to /allclients to view the table, go to /addclient to add stuff, go to /newclientid to see the highest id + 1");
});
app.get("/allclients", function (req, res) {
  var queryString = "SELECT * FROM onscreenclients";
  connection.query(queryString, function (err, rows, fields) {
    if (err) {
      return res.send(err);
    } else {
      res.json(rows);
    }
  });
});
app.get("/client", function (req, res) {
  var client_id = req.query.client_id;
  var queryString = "SELECT * FROM onscreenclients WHERE client_id = ".concat(client_id);
  connection.query(queryString, function (err, rows, fields) {
    if (err) {
      return res.send(err);
    } else {
      res.json(rows);
    }
  });
});
app.get("/newclientid", function (req, res) {
  var queryString = 'SELECT client_id from OnScreenClients ORDER BY client_id DESC LIMIT 1';
  connection.query(queryString, function (err, rows, fields) {
    if (err) {
      return res.send(err);
    } else {
      if (rows.length != 0) {
        data: rows[0].client_id + 1;

        return res.send("".concat(rows[0].client_id + 1));
      }

      data: 0;

      return res.send("".concat(0));
    }
  });
});
app.get("/addclient", function (req, res) {
  var _req$query = req.query,
      client_id = _req$query.client_id,
      client_name = _req$query.client_name,
      client_company = _req$query.client_company,
      client_title = _req$query.client_title,
      client_email = _req$query.client_email,
      q1 = _req$query.q1,
      q2 = _req$query.q2,
      q3 = _req$query.q3,
      q4_1 = _req$query.q4_1,
      q4_2 = _req$query.q4_2,
      q4_3 = _req$query.q4_3,
      q4_4 = _req$query.q4_4,
      q4_5 = _req$query.q4_5,
      q4_6 = _req$query.q4_6,
      q4_7 = _req$query.q4_7,
      q5 = _req$query.q5,
      q6_1 = _req$query.q6_1,
      q6_2 = _req$query.q6_2,
      q7_1 = _req$query.q7_1,
      q7_2 = _req$query.q7_2,
      q7_3 = _req$query.q7_3,
      q7_4 = _req$query.q7_4,
      q7_5 = _req$query.q7_5,
      q8 = _req$query.q8,
      q9 = _req$query.q9,
      q10_1 = _req$query.q10_1,
      q10_2 = _req$query.q10_2,
      q10_3 = _req$query.q10_3;
  var insertQuery = "INSERT INTO OnScreenClients (client_id, client_name, client_company, client_title, client_email, q1, q2, q3, q4_1, q4_2, q4_3, q4_4, q4_5, q4_6, q4_7, q5, q6_1, q6_2, q7_1, q7_2, q7_3, q7_4, q7_5, q8, q9, q10_1, q10_2, q10_3) VALUES(".concat(client_id, ", '").concat(client_name, "', '").concat(client_company, "', '").concat(client_title, "', '").concat(client_email, "', ").concat(q1, ", ").concat(q2, ", ").concat(q3, ", ").concat(q4_1, ", ").concat(q4_2, ", ").concat(q4_3, ", ").concat(q4_4, ", ").concat(q4_5, ", ").concat(q4_6, ", ").concat(q4_7, ", ").concat(q5, ", ").concat(q6_1, ", ").concat(q6_2, ", ").concat(q7_1, ", ").concat(q7_2, ", ").concat(q7_3, ", ").concat(q7_4, ", ").concat(q7_5, ", ").concat(q8, ", ").concat(q9, ", ").concat(q10_1, ", ").concat(q10_2, ", ").concat(q10_3, ")");
  connection.query(insertQuery, function (data, err, results) {
    if (err) {
      return res.send(err);
    } else {
      data: "Success";

      return res.send("Successfully added client");
    }
  });
});
app.get("/modifyentireclient", function (req, res) {
  var _req$query2 = req.query,
      client_id = _req$query2.client_id,
      client_name = _req$query2.client_name,
      client_company = _req$query2.client_company,
      client_title = _req$query2.client_title,
      client_email = _req$query2.client_email,
      q1 = _req$query2.q1,
      q2 = _req$query2.q2,
      q3 = _req$query2.q3,
      q4_1 = _req$query2.q4_1,
      q4_2 = _req$query2.q4_2,
      q4_3 = _req$query2.q4_3,
      q4_4 = _req$query2.q4_4,
      q4_5 = _req$query2.q4_5,
      q4_6 = _req$query2.q4_6,
      q4_7 = _req$query2.q4_7,
      q5 = _req$query2.q5,
      q6_1 = _req$query2.q6_1,
      q6_2 = _req$query2.q6_2,
      q7_1 = _req$query2.q7_1,
      q7_2 = _req$query2.q7_2,
      q7_3 = _req$query2.q7_3,
      q7_4 = _req$query2.q7_4,
      q7_5 = _req$query2.q7_5,
      q8 = _req$query2.q8,
      q9 = _req$query2.q9,
      q10_1 = _req$query2.q10_1,
      q10_2 = _req$query2.q10_2,
      q10_3 = _req$query2.q10_3;
  var modifyQuery = "UPDATE OnScreenClients SET client_name = '".concat(client_name, "', client_company = '").concat(client_company, "', client_title = '").concat(client_title, "', client_email = '").concat(client_email, "', q1 = ").concat(q1, ", q2 = ").concat(q2, ", q3 = ").concat(q3, ", q4_1 = ").concat(q4_1, ", q4_2 = ").concat(q4_2, ", q4_3 = ").concat(q4_3, ", q4_4 = ").concat(q4_4, ", q4_5 = ").concat(q4_5, ", q4_6 = ").concat(q4_6, ", q4_7 = ").concat(q4_7, ", q5 = ").concat(q5, ", q6_1 = ").concat(q6_1, ", q6_2 = ").concat(q6_2, ", q7_1 = ").concat(q7_1, ", q7_2 = ").concat(q7_2, ", q7_3 = ").concat(q7_3, ", q7_4 = ").concat(q7_4, ", q7_5 = ").concat(q7_5, ", q8 = ").concat(q8, ", q9 = ").concat(q9, ", q10_1 = ").concat(q10_1, ", q10_2 = ").concat(q10_2, ", q10_3 = ").concat(q10_3, " WHERE client_id = ").concat(client_id);
  connection.query(modifyQuery, function (data, err, results) {
    if (err) {
      return res.send(err);
    } else {
      data: "Success";

      return res.send("Successfully modified client");
    }
  });
});
app.get("/modifyclient", function (req, res) {
  var _req$query3 = req.query,
      client_id = _req$query3.client_id,
      field = _req$query3.field,
      new_value = _req$query3.new_value;
  var modifyQuery = field in ["client_name", "client_company", "client_title", "client_email"] ? "UPDATE OnScreenClients SET ".concat(field, " = '").concat(new_value, "' WHERE client_id = ").concat(client_id) : "UPDATE OnScreenClients SET ".concat(field, " = ").concat(new_value, " WHERE client_id = ").concat(client_id); // add quotes if the field is a string

  connection.query(modifyQuery, function (data, err, results) {
    if (err) {
      return res.send(err);
    } else {
      data: "Success";

      return res.send("Successfully modified client");
    }
  });
});
app.get("/deleteclient", function (req, res) {
  var client_id = req.query.client_id;
  var queryString = "DELETE FROM onscreenclients WHERE client_id = ".concat(client_id);
  connection.query(queryString, function (err, rows, fields) {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Successfully deleted client with ID ".concat(client_id));
    }
  });
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
