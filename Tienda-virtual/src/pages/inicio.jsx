
import React from 'react'

const Inicio = () => {
    return (
        <h1>
           
        </h1>
    )
}

export default Inicio;

// const [permiso, setPermiso, setName] = useState(false);
// const getInfo = async () =>{
//     try{
//         const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`)
//         const jsonResponse = await response.json();
//         const userData = jsonResponse.data;
//         setName(userData.nombre);
//         if(userData.role === 'user' && 'administrador') setPermiso(true);
//     }catch(e){console.log(e)}
// }