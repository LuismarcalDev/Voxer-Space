import "../styles/style.css"
import "../styles/Login.css"
import { useState } from "react"
function Login(){
    const [abrirLogin,setAbrirLogin] = useState("none")
function Login01(){
    setAbrirLogin("flex")

}


    return(
        <div className="Login">
         <div className="Login-container">
         <div className="title">
                <h2>
                    <span>V</span><br/>S
                </h2>
               <h3> <span>V</span>oxer Spa<span>c</span>e</h3>
               <p>A melhor rede Social Gerada por APIs</p>
            </div>
            <div className="inputs-login" style={{display:abrirLogin}}>
               <div className="input-container">
                <label htmlFor="">Usuario</label>
                <input type="text"
                placeholder="Nome de Usuario"
                />
               </div>

               <div className="input-container">
                <label htmlFor="">Senha</label>
                <input type="text"
                placeholder="Sua Senha"
                />
               </div>
            </div>
                <div className="btns">

                    <button id="Login" onClick={Login01}>
                        Faça Login
                    </button>

                    <button id="Cadastro">
                        Fazer Cadastro
                    </button>

                </div>

         </div>
        </div>
    )
}
export default Login