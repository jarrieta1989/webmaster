import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader, Navbar} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ModuloProducto(){

    const baseUrl="http://192.168.0.106/api/";
  const [data, setData]=useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);


  
  
  


  const [frameworkSeleccionado, setFrameworkSeleccionado]=useState({
    id: '',
    descripcion: '',
    valorUnitario: '',
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
      if(elemento.descripcion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
  
  
  

  const peticionPost=async()=>{
    var f = new FormData();
    f.append("descripcion", frameworkSeleccionado.descripcion);
    f.append("valorUnitario", frameworkSeleccionado.valorUnitario);
    f.append("estado", frameworkSeleccionado.estado);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    var f = new FormData();
    f.append("descripcion", frameworkSeleccionado.descripcion);
    f.append("valorUnitario", frameworkSeleccionado.valorUnitario);
    f.append("estado", frameworkSeleccionado.estado);
    f.append("METHOD", "PUT");
    await axios.post(baseUrl, f, {params: {id: frameworkSeleccionado.id}})
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(framework=>{
        if(framework.id===frameworkSeleccionado.id){
          framework.descripcion=frameworkSeleccionado.descripcion;
          framework.valorUnitario=frameworkSeleccionado.valorUnitario;
          framework.estado=frameworkSeleccionado.estado;
          
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    var f = new FormData(); 
    f.append("METHOD", "DELETE");
    await axios.post(baseUrl, f, {params: {id: frameworkSeleccionado.id}})
    .then(response=>{
      setData(data.filter(framework=>framework.id!==frameworkSeleccionado.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
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
          placeholder="Búsqueda por Producto o por Referencia"
          onChange={handleChange1}
        />
          <br />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <br />
    <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Insertar Nuevo Producto</button>
    <br /><br />
    <table className="table table-striped" style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripción</th>
          <th>Valor Unitario</th>
          <th>Estado</th> 
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(framework=>(
          <tr key={framework.id}>
            <td>{framework.id}</td>
            <td>{framework.descripcion}</td>
            <td>{framework.valorUnitario}</td>
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
      <ModalHeader>Insertar Producto</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Descripción: </label>
          <br />
          <input type="text" className="form-control" name="descripcion" onChange={handleChange}  />
          <br />
          <label>Valor Unitario: </label>
          <br />
          <input type="number"  className="form-control"  name="valorUnitario" onChange={handleChange}/>
          <br />
          <label>Estado: </label>
          <br />
          <select class="form-select" aria-label="Default select example" name="estado" onChange={handleChange}>
                  <option selected>Estado del Producto</option>
                  <option value="Disponible">Disponible</option>
                  <option value="No Disponible">No Disponible</option>
                  
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
      <ModalHeader>Editar Productos</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Descripción: </label>
          <br />
          <input type="text" className="form-control" name="descripcion" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.descripcion}/>
          <br />
          <label>Valor Unitario: </label>
          <br />
          <input type="text" className="form-control" name="valorUnitario" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.valorUnitario}/>
          <br />
          <label>Estado: </label>
          <br />
          <select class="form-select" aria-label="Default select example" name="estado" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.estado}>
                  <option selected>Estado del Producto</option>
                  <option value="Disponible">Disponible</option>
                  <option value="No Disponible">No Disponible</option>
                  
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
        ¿Estás seguro que deseas eliminar el producto {frameworkSeleccionado && frameworkSeleccionado.descripcion}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>peticionDelete()}>
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

export default ModuloProducto;