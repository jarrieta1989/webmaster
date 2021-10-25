import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import apiBaseUrl from "../components/Api";

function ModuloVenta(){

  const baseUrl="https://tiendavirtualapi.herokuapp.com/api/venta";
  const [data, setData]=useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const {user} = useAuth0();
  const [permiso, setPermiso] = useState(false);

    const getInfo = async () =>{
        try{
            const response = await fetch(`${apiBaseUrl}/api/usuarios?email=${user.email}`)
            // const response = await fetch(`${apiBaseUrl}/get-user?email=${user.email}`)
            // const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`)
            const jsonResponse = await response.json();
            const userData = jsonResponse;
            if(userData.role === 'Admin') setPermiso(true);
        }catch(e){console.log(e)}
    }

  useEffect(()  =>{
     getInfo()

  },[]) 

  
  
  


  const [frameworkSeleccionado, setFrameworkSeleccionado]=useState({
    valorTotal: '',
    identificador: '',
    cantidad: '',
		precioUnitario: '',
		fechaVenta: '',
    idCliente: '',
    nombreCliente: '',
		vendedor: '',
		estado: '',
    id: ''

     

    
  });

  

  const handleChange=e=>{
    const {name, value}=e.target;
    setFrameworkSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(frameworkSeleccionado);
  }

  

  const handleChange1=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const sumar=function(){
	 frameworkSeleccionado.valorTotal =  frameworkSeleccionado.precioUnitario*frameworkSeleccionado.cantidad;
	 
	 return frameworkSeleccionado.valorTotal;
	  
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.vendedor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  }

  
  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  
  const peticionGet=async()=>{
  await axios.get(baseUrl)
  .then(response=>{
    setData(response.data);
    setTablaUsuarios(response.data);

  })

  }
  
   function peticionPost(){
   fetch(baseUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
        valorTotal:frameworkSeleccionado.valorTotal,
        identificador:frameworkSeleccionado.identificador,
        cantidad:frameworkSeleccionado.cantidad,
        precioUnitario:frameworkSeleccionado.precioUnitario,
        fechaVenta:frameworkSeleccionado.fechaVenta,
        idCliente:frameworkSeleccionado.idCliente,
        nombreCliente:frameworkSeleccionado.nombreCliente,
        vendedor:frameworkSeleccionado.vendedor,
        estado:frameworkSeleccionado.estado



            })
        })
        .then(res=>res.json())
        .then((result)=>{
            
            abrirCerrarModalInsertar();
			peticionGet();
			
			
        },(error)=>{
            alert('Failed');
        })
  }
  function peticionPut(){
	fetch(baseUrl,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
				id:frameworkSeleccionado.id,
				valorTotal:frameworkSeleccionado.valorTotal,
        identificador:frameworkSeleccionado.identificador,
        cantidad:frameworkSeleccionado.cantidad,
        precioUnitario:frameworkSeleccionado.precioUnitario,
        fechaVenta:frameworkSeleccionado.fechaVenta,
        idCliente:frameworkSeleccionado.idCliente,
        nombreCliente:frameworkSeleccionado.nombreCliente,
        vendedor:frameworkSeleccionado.vendedor,
        estado:frameworkSeleccionado.estado
             
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            abrirCerrarModalEditar();
			peticionGet();
            
        },(error)=>{
            alert('Failed');
        })
	
	
	
	
  }

  function peticionDelete(id){
  
    
	    fetch(baseUrl+'/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
          abrirCerrarModalEliminar();
		  peticionGet();
		  
           
        },(error)=>{
            alert('Failed');
        })
		
		
		
        }
	
	
	
	

  




  const seleccionarFramework=(framework, caso)=>{
    setFrameworkSeleccionado(framework);

    (caso==="Editar")?
    abrirCerrarModalEditar():
    abrirCerrarModalEliminar()
    
  }

 
useEffect(()=>{

  peticionGet();

},[])

return(
  <main>
    <div>
      {(permiso === true) ?
      <><div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por ID o por Vendedor"
          onChange={handleChange1} />
        <br />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div><br /><button className="btn btn-success" onClick={() => abrirCerrarModalInsertar()}>Insertar Nueva Venta</button><br /><br /><table className="table table-striped" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Id Cliente</th>
              <th>Cliente</th>
              <th>Vendedor</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(framework => (
              <tr key={framework.id}>
                <td>{framework.id}</td>
                <td>{framework.identificador}</td>
                <td>{framework.cantidad}</td>
                <td>{framework.precioUnitario}</td>
                <td>{framework.valorTotal}</td>
                <td>{framework.fechaVenta}</td>
                <td>{framework.idCliente}</td>
                <td>{framework.nombreCliente}</td>
                <td>{framework.vendedor}</td>
                <td>{framework.estado}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => seleccionarFramework(framework, "Editar")}>Editar</button> {"  "}
                  <button className="btn btn-danger" onClick={() => seleccionarFramework(framework, "Eliminar")}>Eliminar</button>
                </td>
              </tr>
            ))}


          </tbody>

        </table><Modal isOpen={modalInsertar}>
          <ModalHeader>Insertar Venta</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Descripción: </label>
              <br />
              <input type="text" className="form-control" name="identificador" onChange={handleChange} />
              <br />
              <label>Cantidad: </label>
              <br />
              <input type="number" className="form-control" name="cantidad" onChange={handleChange} />
              <br />
              <label>Precio Unitario: </label>
              <br />
              <input type="number" className="form-control" name="precioUnitario" onChange={handleChange} />
              <br />
              <label>Valor Total: </label>
              <br />
              <input type="number" className="form-control" name="valorTotal" onChange={handleChange} value={sumar()} />
              <br />

              <label>Fecha: </label>
              <br />
              <input type="date" className="form-control" name="fechaVenta" onChange={handleChange} required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
              <br />
              <label>Id Cliente: </label>
              <br />
              <input type="text" className="form-control" name="idCliente" onChange={handleChange} />
              <br />
              <label>Nombre Cliente: </label>
              <br />
              <input type="text" className="form-control" name="nombreCliente" onChange={handleChange} />
              <br />
              <label>Vendedor: </label>
              <br />
              <input type="text" className="form-control" name="vendedor" onChange={handleChange} />
              <br />

              <label>Estado: </label>
              <br />
              <select class="form-select" aria-label="Default select example" name="estado" onChange={handleChange}>
                <option selected>Estado del Producto</option>
                <option value="En proceso">En proceso</option>
                <option value="Cancelada">Cancelada</option>
                <option value="Entregada">Entregada</option>

              </select>
              <br />


            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => peticionPost()}>Insertar</button>{"   "}
            <button className="btn btn-danger" onClick={() => abrirCerrarModalInsertar()}>Cancelar</button>

          </ModalFooter>
        </Modal><Modal isOpen={modalEditar}>
          <ModalHeader>Editar Productos</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Descripción: </label>
              <br />
              <input type="text" className="form-control" name="identificador" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.identificador} />
              <br />
              <label>Cantidad: </label>
              <br />
              <input type="number" className="form-control" name="cantidad" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.cantidad} />
              <br />
              <label>Precio Unitario: </label>
              <br />
              <input type="number" className="form-control" name="precioUnitario" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.precioUnitario} />
              <br />
              <label>Valor Total: </label>
              <br />
              <input type="number" className="form-control" name="valorTotal" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.valorTotal} />
              <br />

              <label>Fecha: </label>
              <br />
              <input type="date" className="form-control" name="fechaVenta" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.fechaVenta} />
              <br />
              <label>Id Cliente: </label>
              <br />
              <input type="text" className="form-control" name="idCliente" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.idCliente} />
              <br />
              <label>Nombre Cliente: </label>
              <br />
              <input type="text" className="form-control" name="nombreCliente" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.nombreCliente} />
              <br />
              <label>Vendedor: </label>
              <br />
              <input type="text" className="form-control" name="vendedor" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.vendedor} />
              <br />

              <label>Estado: </label>
              <br />
              <select class="form-select" aria-label="Default select example" name="estado" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.estado}>
                <option selected>Estado del Producto</option>
                <option value="En proceso">En proceso</option>
                <option value="Cancelada">Cancelada</option>
                <option value="Entregada">Entregada</option>

              </select>

              <br />


            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => peticionPut()}>Editar</button>{"   "}
            <button className="btn btn-danger" onClick={() => abrirCerrarModalEditar()}>Cancelar</button>
          </ModalFooter>
        </Modal><Modal isOpen={modalEliminar}>
          <ModalBody>
            ¿Estás seguro que deseas eliminar el producto {frameworkSeleccionado && frameworkSeleccionado.descripcion}?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => peticionDelete(frameworkSeleccionado.id)}>
              Sí
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => abrirCerrarModalEliminar()}
            >
              No
            </button>
          </ModalFooter>
        </Modal></>
    

      :
      <h1> NO ES ADMINISTRADOR </h1>
        }
    </div> 



  </main>  









);


}
export default ModuloVenta;
