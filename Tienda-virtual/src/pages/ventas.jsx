import React from "react"
import ventas from '../styles/ventas.css';
import google from '../media/google.png';

function Ventas(){
    return(
    <>
            <div className="cajaventas">
                <h1>Registro Ventas</h1>
                <section id="contenedorFormulariov"> 
                    <label for="IngresoCliente">Nombre del cliente<input id="IngresoCliente" type="text" placeholder="Camilo Perez" /></label>
                    <label for="IngresoCorreo">Correo del cliente<input id="IngresoCorreo" type="email" placeholder="camilo@gmail.com" /></label>
                    <label for="IngresoIdentificador">Identificador del producto<input id="IngresoIdentificador" type="number" placeholder="010293" /></label>    
                    <label for="IngresoPrecioUnitario">Precio unitario<input id="IngresoPrecioUnitario" type="number" placeholder="30000" /></label>
                    <label for="IngresoVendedor">Nombre del vendedor<input id="IngresoVendedor" type="text" placeholder="Luna Arias" /></label>
                </section>
                
                <section id="contenedorFormulariov">
                    <label for="IngresoDocumento">Documento del cliente<input id="IngresoDocumento" type="number" placeholder="1025486736" /></label>
                    <label for="IngresoFecha">Fecha  de la  venta<input id="IngresoFecha" type="date" /></label>
                    <label for="IngresoCantidad">Cantidad<input id="IngresoCantidad" type="number" placeholder="3" /></label>
                    <label for="IngresoValorTotal">Valor total<input id="IngresoValorTotal" type="number" placeholder="90000" /></label>
                    <button type="submit" className="botong" >Guardar</button>
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
                                <td><i className="fas fa-edit iconoEditar"></i></td>
                                <td><i className="fas fa-trash iconoEliminar"></i></td>
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
}
export default Ventas;
