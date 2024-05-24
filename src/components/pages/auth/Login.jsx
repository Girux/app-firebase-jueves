import React, { useEffect, useState } from "react";
import "./Login.css";
import { connDatabase } from "../../database/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Swal from 'sweetalert2'

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  //Crear una funcion cualquiera y en collection llamo la conexion a mi base de datos, como una base de datos nunca va a terminar se utiliza una funcion asyncrona, almaceno en una variable local la baase de datos desde la nube a mi proyecto -- Iniciamos una collection en la pag firebase, le damos el ID generar ID aleatorio y en el campo definimos lo que queramos Ejm: user string admin / passwoerd string 1234 t se crean los objetos
  async function getUsuarios() {
    let collectionUsuarios = collection(connDatabase, "usuarios");
    let resultado = await getDocs(collectionUsuarios);
    //.data() es un metodo de arreglo que permite mostrar la informacion que está dentro del doc
    //spread operator (...) Recorre el arreglo y agarra cada elemento uno por uno
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
    setUsuarios(resultado.docs.map((doc) => ({ ...doc.data() }))); //Se usa parentesis para retornar el contenido
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some((usuario) => usuario.user === user && usuario.password === password);
    return estado;
  };

  const iniciarSesion = () => {
    if(buscarUsuario()){
      //sweetalert, para instalarlo se usa con el comando "npm i sweetalert2"
      Swal.fire({
        title: "Bienvenido...",
        text: "Será direccionado al Home",
        icon: "success"
      });
    }else{
      Swal.fire({
        title: "Error",
        text: "Usuario y/o contraseña incorrecta",
        icon: "Error"
      });
    }
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={iniciarSesion} type="button">
            login
          </button>
          <p class="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
