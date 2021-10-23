import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader, Navbar} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ModuloUsuario(){

  const baseUrl="https://tiendavirtualapi.herokuapp.com/api/usuario";
  const [data, setData]=useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);


  
  
  


  const [frameworkSeleccionado, setFrameworkSeleccionado]=useState({
    id: '',
    nombre: '',
    apellido: '',
	rol: '',
    estado: ''
    
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

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
				nombre:frameworkSeleccionado.nombre,
				apellido:frameworkSeleccionado.apellido,
                rol:frameworkSeleccionado.rol,
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
				nombre:frameworkSeleccionado.nombre,
				apellido:frameworkSeleccionado.apellido,
                rol:frameworkSeleccionado.rol,
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

    <div>

<div className="containerInput" >
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o por Id"
          onChange={handleChange1}
        />
          <br />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <br />
    <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Ingresar Usuarios</button>
    <br /><br />
    <table className="table table-striped" style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Rol</th> 
		  <th>Estado</th> 
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(framework=>(
          <tr key={framework.id}>
            <td>{framework.id}</td>
            <td>{framework.nombre}</td>
            <td>{framework.apellido}</td>
			<td>{framework.rol}</td>
            <td>{framework.estado}</td>
          <td>
          <button className="btn btn-primary" onClick={()=>seleccionarFramework(framework, "Editar")}>Editar</button> {"  "}
          <button className="btn btn-danger" onClick={()=>seleccionarFramework(framework, "Eliminar")}>Eliminar</button>
          </td>
          </tr>
        ))}


      </tbody> 

    </table>


    <Modal isOpen={modalInsertar}>
      <ModalHeader>Ingresar Usuarios</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={handleChange}  />
          <br />
          <label>Apellido: </label>
          <br />
          <input type="text"  className="form-control"  name="apellido" onChange={handleChange}/>
          <br />
		  <label>Rol: </label>
          <br />
          <select class="form-select" aria-label="Default select example" name="rol" onChange={handleChange}>
                  <option selected>Estado del Usuario</option>
                  <option value="Admin">Admin</option>
                  <option value="Vendedor">Vendedor</option>
				 
                 
                  
                  
          </select>
          <br />
          <label>Estado: </label>
          <br />
          <select class="form-select" aria-label="Default select example" name="estado" onChange={handleChange}>
                  <option selected>Estado del Usuario</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Autorizado">Autorizado</option>
				  <option value="No Autorizado">No Autorizado</option>
                 
                  
                  
          </select>
          <br />
          
        
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
      </ModalFooter>
    </Modal>

    
    <Modal isOpen={modalEditar}>
      <ModalHeader>Editar Usuarios</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.nombre}/>
          <br />
          <label>Apellido: </label>
          <br />
          <input type="text" className="form-control" name="apellido" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.apellido}/>
          <br />
		   <label>Rol: </label>
          <br />
          <select class="form-select" aria-label="Default select example" name="rol" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.rol}>
                 <option selected>Estado del Usuario</option>
                  <option value="Admin">Admin</option>
                  <option value="Vendedor">Vendedor</option>
                  
          </select>
          
          <br />
          <label>Estado: </label>
          <br />
          <select class="form-select" aria-label="Default select example" name="estado" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.estado}>
                   <option selected>Estado del Usuario</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Autorizado">Autorizado</option>
				  <option value="No Autorizado">No Autorizado</option>
                 
                  
          </select>
          
          <br />
          
          
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionPut()} >Editar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
      </ModalFooter>
    </Modal>




    <Modal isOpen={modalEliminar}>
        <ModalBody>
        ¿Estás seguro que deseas eliminar el usuario {frameworkSeleccionado && frameworkSeleccionado.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>peticionDelete(frameworkSeleccionado.id)}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>abrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>




    </div>










);


}

export default ModuloUsuario;