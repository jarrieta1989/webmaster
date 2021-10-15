let express = require("express");
let bodyParser = require("body-parser");
const { request, response } = require("express");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let cors = require("cors");
app.use(cors());

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webmaster",
});

app.listen(3001, () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado a la Base de Datos");
  });
});

app.get("/", (request, response) => {
  response.send("Hola Mundo");
});

app.get("/api/producto", (request, response) => {
  let query = `SELECT * from  productos`;
  connection.query(query, function (err, rows, fields) {
    if (err) {
      response.send("Error");
    }

    response.send(rows);
  });
});

app.post("/api/producto", (request, response) => {
  let query = `INSERT into productos(descripcion,valorUnitario,estado)VALUE(?,?,?)`;

  let values = [
    request.body["descripcion"],
    request.body["valorUnitario"],
    request.body["estado"],
  ];
  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Error");
    }

    response.json("Agregado correctamente");
  });
});

app.put("/api/producto", (request, response) => {
  let query = `Update productos set descripcion=?,valorUnitario=?,estado=? where id=?`;

  let values = [
    request.body["descripcion"],
    request.body["valorUnitario"],
    request.body["estado"],
    request.body["id"],
  ];
  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Error");
    }

    response.json("Actualizado correctamente");
  });
});

app.delete("/api/producto/:id", (request, response) => {
  let query = `DELETE from productos where id=?`;

  let values = [parseInt(request.params.id)];
  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Error");
    }

    response.json("Eliminado correctamente");
  });
});

//Usuario
app.get("/api/roles", (request, response) => {
  let query = `SELECT * from  roles`;
  connection.query(query, function (err, rows, fields) {
    if (err) {
      response.send("Error");
    }

    response.send(rows);
  });
});

app.put("/api/rolesActualizar", (request, response) => {
  let query = `UPDATE roles SET ,rol=?,estado=? where usuario=?`;
  const rol = request.body.rol;
  const estado = request.body.estado;
  const usuario = request.body.usuario;

  let values = [rol, estado, usuario];
  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      response.send("Error");
    }

    response.json("Actualizado correctamente");
  });
});
