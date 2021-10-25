let express = require("express");
let bodyParser = require("body-parser");
const { request, response } = require("express");
let jwt = require('express-jwt');
let jwks = require('jwks-rsa');
const port = 3001;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let cors = require('cors')
app.use(cors());
app.set('port',process.env.PORT || port);



/*
let jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-41cd6vt5.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'api-autenticacion',
    issuer: 'https://dev-41cd6vt5.us.auth0.com/',
    algorithms: ['RS256']
});


app.use(jwtCheck);
*/

let mysql = require("mysql");

let connection = mysql.createConnection({
host:'sql10.freesqldatabase.com',
user:'sql10445637',
password:'Wgy3TU48Gw',
database:'sql10445637'

});







app.listen(app.get('port'),()=>{
  connection.connect(function(err){
if(err) throw err;
console.log('Conectado a la Base de Datos');

  })

});

app.get('/',(request,response)=>{

  response.send('Hola Mundo');

});



app.get('/api/producto',(request,response)=>{

let query =`SELECT * from  productos`;
connection.query(query,function(err,rows,fields){
 if(err){

    response.send('Error');
 }

  response.send(rows);

});

});


app.post('/api/producto',(request,response)=>{

    let query =`INSERT into productos(descripcion,valorUnitario,estado)VALUE(?,?,?)`;

    let values = [
           request.body['descripcion'],
           request.body['valorUnitario'],
           request.body['estado']


    ];
    connection.query(query,values,function(err,rows,fields){
     if(err){
    
        response.send('Error');
     }
    
      response.json('Agregado correctamente');
    
    });
    
    });



    app.put('/api/producto',(request,response)=>{

        let query =`Update productos set descripcion=?,valorUnitario=?,estado=? where id=?`;
    
        let values = [
               request.body['descripcion'],
               request.body['valorUnitario'],
               request.body['estado'],
               request.body['id']
    
    
        ];
        connection.query(query,values,function(err,rows,fields){
         if(err){
        
            response.send('Error');
         }
        
          response.json('Actualizado correctamente');
        
        });
        
        });


        app.delete('/api/producto/:id',(request,response)=>{

            let query =`DELETE from productos where id=?`;
        
            let values = [
                   
                   parseInt(request.params.id)
        
        
            ];
            connection.query(query,values,function(err,rows,fields){
             if(err){
            
                response.send('Error');
             }
            
              response.json('Eliminado correctamente');
            
            });
            
            });
			
			
			
			
	//usuarios		
			
app.get('/api/usuario',(request,response)=>{

let query =`SELECT * from  usuarios`;
connection.query(query,function(err,rows,fields){
 if(err){

    response.send('Error');
 }

  response.send(rows);

});

});

app.get('/api/usuarios',(request,response)=>{
	const email=request.query.email;
	const query=(`SELECT * from usuarios where email='${email}'`);


connection.query(query,function(err,rows,fields){
 if(err){

    response.send('Error');
 }

  response.send(rows);

});

});




app.post('/api/usuario',(request,response)=>{

    let query =`INSERT into usuarios(nombre,apellido,rol,estado)VALUE(?,?,?,?)`;

    let values = [
           request.body['nombre'],
           request.body['apellido'],
           request.body['rol'],
		   request.body['estado']


    ];
    connection.query(query,values,function(err,rows,fields){
     if(err){
    
        response.send('Error');
     }
    
      response.json('Agregado correctamente');
    
    });
    
    });



    app.put('/api/usuario',(request,response)=>{

        let query =`Update usuarios set nombre=?,apellido=?,rol=?,estado=? where id=?`;
    
        let values = [
           request.body['nombre'],
           request.body['apellido'],
           request.body['rol'],
		   request.body['estado'],
           request.body['id']
    
    
        ];
        connection.query(query,values,function(err,rows,fields){
         if(err){
        
            response.send('Error');
         }
        
          response.json('Actualizado correctamente');
        
        });
        
        });


        app.delete('/api/usuario/:id',(request,response)=>{

            let query =`DELETE from usuarios where id=?`;
        
            let values = [
                   
                   parseInt(request.params.id)
        
        
            ];
            connection.query(query,values,function(err,rows,fields){
             if(err){
            
                response.send('Error');
             }
            
              response.json('Eliminado correctamente');
            
            });
            
            });
			
			
			
			
			
			
//Ventas

app.get('/api/venta',(request,response)=>{

let query =`SELECT * from  ventas`;
connection.query(query,function(err,rows,fields){
 if(err){

    response.send('Error');
 }

  response.send(rows);

});

});






app.post('/api/venta',(request,response)=>{

    let query =`INSERT into ventas(valorTotal,identificador,cantidad,precioUnitario,fechaVenta,idCliente,nombreCliente,vendedor,estado)VALUE(?,?,?,?,?,?,?,?,?)`;

    let values = [
           request.body['valorTotal'],
           request.body['identificador'],
           request.body['cantidad'],
		   request.body['precioUnitario'],
		   request.body['fechaVenta'],
           request.body['idCliente'],
           request.body['nombreCliente'],
		   request.body['vendedor'],
		   request.body['estado']

    ];
    connection.query(query,values,function(err,rows,fields){
     if(err){
    
        response.send('Error');
     }
    
      response.json('Agregado correctamente');
    
    });
    
    });



    app.put('/api/venta',(request,response)=>{

        let query =`Update ventas set valorTotal=?,identificador=?,cantidad=?,precioUnitario=?,fechaVenta=?,idCliente=?,nombreCliente=?,vendedor=?,estado=? where id=?`;
    
        let values = [
           request.body['valorTotal'],
           request.body['identificador'],
           request.body['cantidad'],
		   request.body['precioUnitario'],
		   request.body['fechaVenta'],
           request.body['idCliente'],
           request.body['nombreCliente'],
		   request.body['vendedor'],
		   request.body['estado'],
           request.body['id']
    
    
        ];
        connection.query(query,values,function(err,rows,fields){
         if(err){
        
            response.send('Error');
         }
        
          response.json('Actualizado correctamente');
        
        });
        
        });


        app.delete('/api/venta/:id',(request,response)=>{

            let query =`DELETE from ventas where id=?`;
        
            let values = [
                   
                   parseInt(request.params.id)
        
        
            ];
            connection.query(query,values,function(err,rows,fields){
             if(err){
            
                response.send('Error');
             }
            
              response.json('Eliminado correctamente');
            
            });
            
            });
			
			
			