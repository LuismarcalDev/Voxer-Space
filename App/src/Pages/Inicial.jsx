import enviar from "../imgs/enviar.png"
import photo from "../imgs/photo.png"
import compartilhar from "../imgs/compartilhar.png"
import salvar from "../imgs/salvar.png"
import coracao from "../imgs/coraao.png"
import "../styles/style.css"
import  '../styles/inicio.css'
import { useState,useEffect } from "react"
function Inicial(){
const [user,setUser]= useState([])

async function usuario() {
  const res = await fetch(`https://randomuser.me/api/?results=1&gender=male`);
  const data = await res.json();

  const lista = data.results.map(usera => ({
    nome: `${usera.name.first} ${usera.name.last}`,
    username: usera.login.username,
    foto: usera.picture.medium,
  }));

  setUser(lista);
}usuario()


const [text,setText]= useState([])
async function texto(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
    const data = await res.json()
    setText(data)
}
useEffect(() => {
  texto();
}, []);
//https://jsonplaceholder.typicode.com/posts


    

    return(
        <div className="inicio">
            
<div className="header">
   <h3>
    <span>V</span>
        <br />
        S
   </h3>
    <div className="post">
       <div className="pesquisa-container">
         <input type="text"
         placeholder="Escreva suas ideias"
         />
         <img src={enviar} alt="" />
       </div>
        <button>
           <img src={photo} alt="" />
         
        </button>
    </div>
</div>

<div className="feed">
    <div className="posts">
        {user.map((usera,i)=>(
      <div className="header-poster" key={i}>

            <img  src={usera.foto} alt={usera.username} />
            <div className="user-header">
                <p>{usera.nome}</p>
                <p id="ahh">{usera.username}</p>
            </div>
        </div>

        ))}
            {text.map((post, index)=> (
  <div className="post-msg" key="index">
            <p>{post.body}</p>
        </div>

            ))}
      
        <div className="controle-posts">
            <button>
                adicionar Comentario
            </button>
           <div className="fds">
             <img src={coracao} alt="curtir" />
            <img src={salvar} alt="salvar" />
            <img src={compartilhar} alt="compartilhar" />
           </div>
        </div>
    </div>


</div>
<div className="footer"></div>
        </div>
    )
}
export default Inicial