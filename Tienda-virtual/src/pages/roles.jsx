import React from "react";
import Navbar from "../components/navbar";
import styles from "../styles/roles.module.css";

export function Roles() {
  return (
    <body className={styles.bodyBackground}>
      <Navbar/>
      <div className={styles.contenedor} id={styles.cabecero}>
        <h1>Gestion de Usuarios</h1>
      </div>

      <aside>
        <table>
          <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
          <tr>
            <td>User</td>
            <td>Vendedor</td>
            <td>Autorizado</td>
          </tr>
        </table>
      </aside>
      <section>
        <form>
          <label for="usuario">Nombre Usuario</label>
          <br />
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Ingresa el Usuario"
          />
        </form>

        <label for="rol">Seleccionar Rol</label>
        <br />
        <select name="rol" id="rol">
          <option value="administrador">Administrador</option>
          <option value="vendedor">Vendedor</option>
        </select>
        <br />

        <label for="estado">Seleccionar Estado del Usuario</label>
        <br />
        <select name="estado" id="estado">
          <option value="pendiente">Pendiente</option>
          <option value="autorizado">Autorizado</option>
          <option value="no autorizado">No Autorizado</option>
        </select>
        <div className={styles.contenedorBoton}>
          <button className={styles.botonActualizar}>Actualizar</button>
        </div>
      </section>
    </body>
  );
}
