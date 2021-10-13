import React from "react";
import Navbar from "../components/Navbar";
import ventas from '../styles/ventas.css';
import google from '../media/google.png';

function Ventas(){
    return(
    <div>
        <Navbar/>
            <section id="contenedorFormulario">
            <h1>Ventas</h1>
            <form>
                <label for="IngresoCliente">Nombre del cliente</label>
                <input id="IngresoCliente" type="text" placeholder="Camilo Perez"/>

                <label for="IngresoDocumento">Documento del cliente</label>
                <input id="IngresoDocumento" type="number" placeholder="1025486736"/>

                <label for="IngresoCorreo">Correo del cliente</label>
                <input id="IngresoCorreo" type="email" placeholder="camilo@gmail.com"/>

                <label for="IngresoFecha">Fecha de la venta</label>
                <input id="IngresoFecha" type="date"/>

                <label for="IngresoVendedor">Nombre del vendedor</label>
                <input id="IngresoVendedor" type="text" placeholder="Luna Arias"/>

                <label for="IngresoIdentificador">Identificador del producto</label>
                <input id="IngresoIdentificador" type="number" placeholder="010293"/>

                <label for="IngresoPrecioUnitario">Precio unitario</label>
                <input id="IngresoPrecioUnitario" type="number" placeholder="30000"/>

                <label for="IngresoCantidad">Cantidad</label>
                <input id="IngresoCantidad" type="number" placeholder="3"/>

                <label for="IngresoValorTotal">Valor total</label>
                <input id="IngresoValorTotal" type="number" placeholder="90000"/>

                <button type="submit">Guardar</button>

            </form>
        </section>

        <section id="contenedorTabla">
            <h1>Registro Ventas</h1>
            <table>
                <thead>
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
                </thead>
            </table>
        </section>
        </div>
    );
}
export default Ventas;
