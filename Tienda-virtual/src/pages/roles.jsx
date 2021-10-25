import React from "react";
import styles from "../styles/roles.module.css";
import { useState, useEffect} from "react";
import Axios from "axios";

export function Roles() {
  const [usuario, setUsuario] = useState("");
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = () => {
    Axios.get("http://localhost:3001/api/roles").then((response) => {
      setUsuarios(response.data);
    });
  };

  const updateUsuarios = (usuario) => {
    Axios.put("http://localhost:3001/api/rolesActualizar", { Usuario: usuario, Rol: rol, Estado: estado}).then(
      (response) => {
        setUsuarios(
          usuarios.map((val) => {
            return val.usuario === usuario
              ? {
                  id: val.id,
                  Usuario: val.usuario,
                  Rol: val.rol,
                  Estado: val.estado,

                }
              : val;
          })
        );
      }
    );
  };
  useEffect(()=>{

    getUsuarios();
  
  },[])

  return (
      <body>
        <div className={styles.contenedor} id={styles.cabecero}>
          <h1>Gestion de Usuarios</h1>
        </div>

        <aside className={styles.divTable}>
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
            {usuarios.map((r)=> 
            <tr>
              <td>{r.usuario}</td>
              <td>{r.rol}</td>
              <td>{r.estado}</td>
            </tr>)
            }

          </table>
        </aside>
        <section className={styles.divInputs}>
          <form>
            <label for="usuario">Nombre Usuario</label>
            <br />
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Ingresa el Usuario"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </form>

          <label for="rol">Seleccionar Rol</label>
          <br />
          <select name="rol" id="rol" onChange={(e) => setRol(e.target.value)}>
            <option value="administrador">Administrador</option>
            <option value="vendedor">Vendedor</option>
          </select>
          <br />

          <label for="estado">Seleccionar Estado del Usuario</label>
          <br />
          <select name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}>
            <option value="pendiente">Pendiente</option>
            <option value="autorizado">Autorizado</option>
            <option value="no autorizado">No Autorizado</option>
          </select>
          <div>
            <button onClick={() => {
                    updateUsuarios(usuario);
                  }}>Actualizar</button>
          </div>
        </section>
      </body>
  
  );
}
