<<<<<<< HEAD
import React from "react";
import "../styles/ventas.css";
import "../media/google.png";

function Ventas() {
  return (
    <>
      <div className="cajaventas">
        <h1>Registro Ventas</h1>
        <section id="contenedorFormulariov">
          <label for="IngresoCliente">
            Nombre del cliente
            <input id="IngresoCliente" type="text" placeholder="Camilo Perez" />
          </label>
          <label for="IngresoCorreo">
            Correo del cliente
            <input
              id="IngresoCorreo"
              type="email"
              placeholder="camilo@gmail.com"
            />
          </label>
          <label for="IngresoIdentificador">
            Identificador del producto
            <input
              id="IngresoIdentificador"
              type="number"
              placeholder="010293"
            />
          </label>
          <label for="IngresoPrecioUnitario">
            Precio unitario
            <input
              id="IngresoPrecioUnitario"
              type="number"
              placeholder="30000"
            />
          </label>
          <label for="IngresoVendedor">
            Nombre del vendedor
            <input id="IngresoVendedor" type="text" placeholder="Luna Arias" />
          </label>
        </section>

        <section id="contenedorFormulariov">
          <label for="IngresoDocumento">
            Documento del cliente
            <input
              id="IngresoDocumento"
              type="number"
              placeholder="1025486736"
            />
          </label>
          <label for="IngresoFecha">
            Fecha de la venta
            <input id="IngresoFecha" type="date" />
          </label>
          <label for="IngresoCantidad">
            Cantidad
            <input id="IngresoCantidad" type="number" placeholder="3" />
          </label>
          <label for="IngresoValorTotal">
            Valor total
            <input id="IngresoValorTotal" type="number" placeholder="90000" />
          </label>
          <button type="submit" className="botong">
            Guardar
          </button>
        </section>
      </div>

      <div className="cajatabla">
        <section id="contenedorTablaventas">
          <h1>Consulta Ventas</h1>
          <table>
            <tr>
              <th></th>
              <th></th>
              <th>Cliente</th>
              <th>Documento</th>
              <th>Correo</th>
              <th>Fecha venta</th>
              <th>Vendedor</th>
              <th>Id venta</th>
              <th>Precio unidad</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Estado pedido</th>
            </tr>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-edit iconoEditar"></i>
                </td>
                <td>
                  <i className="fas fa-trash iconoEliminar"></i>
                </td>
                <td>Daniela</td>
                <td>140943847</td>
                <td>daniela@hotmail.com</td>
                <td>29/09/2021</td>
                <td>Fernanda</td>
                <td>38292</td>
                <td>50000</td>
                <td>2</td>
                <td>100000</td>
                <td>Entregado</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-edit iconoEditar"></i>
                </td>
                <td>
                  <i className="fas fa-trash iconoEliminar"></i>
                </td>
                <td>Daniela</td>
                <td>140943847</td>
                <td>daniela@hotmail.com</td>
                <td>29/09/2021</td>
                <td>Fernanda</td>
                <td>38292</td>
                <td>50000</td>
                <td>2</td>
                <td>100000</td>
                <td>Entregado</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
=======
import React from "react"
import '../styles/ventas.css';
import '../media/google.png';
import ventas from '../styles/ventas.css';
import google from '../media/google.png';
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


function Ventas(){

    const [permiso, setPermiso] = useState(false);
    const {user} = useAuth0();

    const getInfo = async () =>{
        try{
            const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`)
            const jsonResponse = await response.json();
            const userData = jsonResponse;
            if(userData.role != 'invited') setPermiso(true);
        }catch(e){console.log(e)}
    }


    
     const [sales, setSales]=useState([]);

    const [salesCliente, setSalesCliente]=useState("");
    const [salesDocumento, setSalesDocumento]=useState(0);
    const [salesEmail, setSalesEmail]=useState("");
    const [salesFecha, setSalesFecha]=useState("");
    const [salesCodigo, setSalesCodigo]=useState(0);
    const [salesCantidad, setSalesCantidad]=useState(0);
    const [salesPrecioU, setSalesPrecioU]=useState(0);
    const [salesValorT, setSalesValorT]=useState(0);
    const [salesVendedor, setSalesVendedor]=useState("");
    const [salesEstadoO, setSalesEstadoO]=useState("");

    const [data, sSetData]=useState([]);
    const [tablaVentas, setTablaVentas]=useState([]);
    const [busqueda, setBusqueda]=useState("");
    const [sModalEditar, sSetModalEditar]= useState(false);
    const [sModalEliminar, sSetModalEliminar]= useState(false);

    const [frameworkSeleccionado, setFrameworkSeleccionado]=useState({
        FACTURA_ID:'',
        CLIENTE: '',
        DOCUMENTO: 0,
        EMAIL: '',
        FECHA: '',
        CODIGO: 0,
        CANTIDAD: 0,
        PRECIO_UNITARIO: 0,
        VALOR_TOTAL: 0,
        VENDEDOR: '',
        ESTADO_ORDEN: ''
        
    });

    //funciones

    
    const sHandleChange=e=>{
        const {sName, value}=e.target;
        setFrameworkSeleccionado((prevState)=>({
          ...prevState,
          [sName]: value
        }))
        console.log(frameworkSeleccionado);
      }

    const handleChange1=e=>{
        setBusqueda(e.target.value);
        sFiltrar(e.target.value); 
      }

    const sFiltrar=(sTerminoBusqueda)=>{
        var sResultadosBusqueda=tablaVentas.filter((sElemento)=>{
          if(sElemento.FACTURA_ID.toString().toLowerCase().includes(sTerminoBusqueda.toLowerCase())
          || sElemento.CLIENTE.toString().toLowerCase().includes(sTerminoBusqueda.toLowerCase())
          || sElemento.DOCUMENTO.toString().toLowerCase().includes(sTerminoBusqueda.toLowerCase())
          ){
            return sElemento;
          }
     
        });
        sSetData(sResultadosBusqueda);
    }

    const sAbrirCerrarModalEditar=()=>{
        sSetModalEditar(!sModalEditar);
    }
    
    const sAbrirCerrarModalEliminar=()=>{
        sSetModalEliminar(!sModalEliminar);
    }

    const seleccionarFramework=(framework, caso)=>{
        setFrameworkSeleccionado(framework);
        
        (caso==="Editar")?
        sAbrirCerrarModalEditar():
        sAbrirCerrarModalEliminar()
            
        }

        useEffect(()=>{
            sPeticionGet();
        },[])

    //peticion get
    const getSales= async()=>{
        try{
            const response =await fetch("http://localhost:3001/get-sales");
            const jsonResponse = await response.json();
            const responseSales=jsonResponse.data;
            const listSales =responseSales.map((sales)=>
                <tr>
                    <td><i className="fas fa-edit iconoEditar" onClick={()=>seleccionarFramework(sales, "Editar")}></i></td> 
                    <td><i className="fas fa-trash iconoEliminar"  onClick={()=>seleccionarFramework(sales, "Eliminar")} ></i></td>           
                    <td>{sales.CLIENTE}</td>
                    <td>{sales.DOCUMENTO}</td>
                    <td>{sales.EMAIL}</td>
                    <td>{sales.FECHA}</td>
                    <td>{sales.VENDEDOR}</td>
                    <td>{sales.FACTURA_ID}</td>
                    <td>{sales.PRECIO_UNITARIO}</td>
                    <td>{sales.CANTIDAD}</td>
                    <td>{sales.VALOR_TOTAL}</td>
                    <td>{sales.ESTADO_ORDEN}</td>
                </tr>
            );
            setSales(listSales)
        }
        catch(error){
            console.log(error)
        }

    }

    //peticion post 
    const regSales = async () =>{
        const regSalesData = {
            CLIENTE: salesCliente,
            DOCUMENTO: salesDocumento,
            EMAIL: salesEmail,
            FECHA: salesFecha,
            CODIGO: salesCodigo,
            CANTIDAD: salesCantidad,
            PRECIO_UNITARIO: salesPrecioU,
            VALOR_TOTAL: salesValorT,
            VENDEDOR: salesVendedor,
            ESTADO_ORDEN: salesEstadoO
    }
    const response =await fetch(`http://localhost:3001/reg-sales`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(regSalesData)
    });
    const jsonResponse1 =await response.json();
    console.log(jsonResponse1);
    }
  

    //peticiion put
    function sPeticionPut(){
        fetch(`http://localhost:3001/put-sales`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                            FACTURA_ID:frameworkSeleccionado.FACTURA_ID,
                            CLIENTE:frameworkSeleccionado.CLIENTE,
                            DOCUMENTO:frameworkSeleccionado.DOCUMENTO,
                            EMAIL:frameworkSeleccionado.EMAIL,
                            FECHA:frameworkSeleccionado.FECHA,
                            CODIGO:frameworkSeleccionado.CODIGO,
                            CANTIDAD:frameworkSeleccionado.CANTIDAD,
                            PRECIO_UNITARIO:frameworkSeleccionado.PRECIO_UNITARIO,
                            VALOR_TOTAL:frameworkSeleccionado.VALOR_TOTAL,
                            VENDEDOR:frameworkSeleccionado.VENDEDOR,
                            ESTADO_ORDEN:frameworkSeleccionado.ESTADO_ORDEN                 
                })
            })
            .then(res=>res.json())
            .then((result)=>{
                sAbrirCerrarModalEditar();
                getSales();
                
            },(error)=>{
                alert('Failed');
            })        
            
    }

    const sPeticionGet=async()=>{
        await axios.get("http://localhost:3001")
        .then(response=>{
          sSetData(response.data);
          setTablaVentas(response.data);
      
        })
      
        }

    //peticion delete
    function sPeticionDelete(FACTURA_ID){
  
    
        fetch(`h/ttp://localhost:3001/FACTURA_ID`,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
          sAbrirCerrarModalEliminar();
		 sPeticionGet();
		  
           
        },(error)=>{
            alert('Failed');
        })
			
		
        }

    useEffect(()=>{
        getSales();
    },[]);
        
	
    //configuracion pagina
  useEffect(()  =>{
     getInfo()

  },[]) 
    
  return(
    <>
            <div className="cajaventas">
                <h1>Registro Ventas</h1>
                <section id="contenedorFormulariov"> 
                    <label for="IngresoCliente">Nombre del cliente<input id="IngresoCliente" type="text" placeholder="Camilo Perez" onChange={(e) => setSalesCliente(e.target.value)}/></label>
                    <label for="IngresoCorreo">Correo del cliente<input id="IngresoCorreo" type="email" placeholder="camilo@gmail.com" onChange={(e) => setSalesEmail(e.target.value)}/></label>
                    <label for="IngresoIdentificador">Identificador del producto<input id="IngresoIdentificador" type="number" placeholder="010293"onChange={(e) => setSalesCodigo(e.target.value)}/></label>    
                    <label for="IngresoPrecioUnitario">Precio unitario<input id="IngresoPrecioUnitario" type="number" placeholder="30000" onChange={(e) => setSalesPrecioU(e.target.value)}/></label>
                    <label for="IngresoVendedor">Nombre del vendedor<input id="IngresoVendedor" type="text" placeholder="Luna Arias"onChange={(e) => setSalesVendedor(e.target.value)} /></label>
                </section>
                
                <section id="contenedorFormulariov">
                    <label for="IngresoDocumento">Documento del cliente<input id="IngresoDocumento" type="number" placeholder="1025486736"onChange={(e) => setSalesDocumento(e.target.value)} /></label>
                    <label for="IngresoFecha">Fecha  de la  venta<input id="IngresoFecha" type="date"onChange={(e) => setSalesFecha(e.target.value)}/></label>
                    <label for="IngresoCantidad">Cantidad<input id="IngresoCantidad" type="number" placeholder="3"onChange={(e) => setSalesCantidad(e.target.value)}/></label>
                    <label for="IngresoValorTotal">Valor total<input id="IngresoValorTotal" type="number" placeholder="90000"onChange={(e) => setSalesValorT(e.target.value)}/></label>
                    <button type="submit" onClick={regSales}  className="botong" >Guardar</button>
                </section>
            </div>

            <div className="cajatabla">
                <section id="contenedorTablaventas">
                    <h1>Consulta Ventas</h1>
                    <div className="buscar1">
                    <input value={busqueda} placeholder="Ingrese factura id, cliente o documento"  onChange={handleChange1} /> <i className="fas fa-search botonGenerico1 iconoBusqueda1"></i>
                </div> 
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Cliente</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Fecha venta</th>
                            <th>Vendedor</th>
                            <th>Id venta</th>
                            <th>Precio unidad</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Estado pedido</th>
                        </tr>
                        <tbody>
                            {sales}
                        </tbody>
                    </table>
                </section>
            </div>

            <Modal isOpen={sModalEditar}>
      <ModalHeader>Editar Venta</ModalHeader>
      <ModalBody>
        <div className="form-group">
        <label>Cliente: </label>       
        <input type="text"  className="form-control"  name="nombreCliente" onChange={sHandleChange}value={frameworkSeleccionado && frameworkSeleccionado.CLIENTE}/>
        
        <label>Documento: </label>
        <input type="text"  className="form-control"  name="correo" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.DOCUMENTO}/>

        <label>Correo: </label>
        <input type="text"  className="form-control"  name="idCliente" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.EMAIL}/>
        
        <label>Fecha: </label>
        <input type="date"  className="form-control"  name="fechaVenta" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.FECHA} />
        
        <label>Vendedor: </label>
        <input type="text"  className="form-control"  name="vendedor" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.VENDEDOR}/>

        <label>codigo producto: </label>          
        <input type="text" className="form-control" name="identificador" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.CODIGO} />

        <label>Precio Unitario: </label>
        <input type="number"  className="form-control"  name="precioUnitario" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.PRECIO_UNITARIO}/>

        <label>Cantidad: </label>
        <input type="number"  className="form-control"  name="cantidad" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.CANTIDAD}/>
        
        <label>Valor Total: </label>
        <input type="number"  className="form-control"  name="valorTotal"  onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.VALOR_TOTAL}/>
  
        <label>Estado: </label>
        <select class="form-select" aria-label="Default select example" name="estado" onChange={sHandleChange} value={frameworkSeleccionado && frameworkSeleccionado.ESTADO_ORDEN} >
                  <option selected>Estado del Producto</option>
                  <option value="En proceso">En proceso</option>
                  <option value="Cancelada">Cancelada</option>
                  <option value="Entregada">Entregada</option>                  
          </select>
                    
          
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>sPeticionPut()} >Editar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>sAbrirCerrarModalEditar()}>Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={sModalEliminar}>
        <ModalBody>
        ¿Estás seguro que deseas eliminar el ID venta {frameworkSeleccionado && frameworkSeleccionado.FACTURA_ID}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>sPeticionDelete(frameworkSeleccionado.FACTURA_ID)}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>sAbrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

        </>

        
    );
>>>>>>> 359b7dfbd279bd6911b9d91fa63db115894344c3
}
export default Ventas;
