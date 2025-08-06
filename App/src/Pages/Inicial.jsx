import enviar from "../imgs/enviar.png";
import photo from "../imgs/photo.png";
import compartilhar from "../imgs/compartilhar.png";
import salvar from "../imgs/salvar.png";
import coracao from "../imgs/coraao.png";
import user1 from "../imgs/user1.png";
import "../styles/style.css";
import "../styles/inicio.css";
import { useState, useEffect } from "react";
function Inicial() {
const num = [1,2,3,4,5];

const [pessoas,setPessoas] = useState([])
useEffect(()=>{
    async function perfis(){
       const res = await fetch(`https://randomuser.me/api/?results=1&gender=male`)
        const data = await res.json();
        setPessoas(data)
    }perfis()
},[])
console.log(pessoas.results[0].location.city)


git 
  return (
    <div className="inicio">
      <div className="header" style={{}}>
        <h3>
          <span>V</span>oxer Spa<span>c</span>e
        </h3>
        <img src={user1} alt="" />
      </div>

      <div className="feed">

       {num.map((_, index) =>(

      
        <div className="posts" key={index}>
          <div className="header-poster">
            <img src="https://randomuser.me/api/portraits/men/76.jpg" />
            <div className="user-header">
              <p>luisaodamassa</p>
              <p id="ahh">luisacds</p>
            </div>
          </div>

          <div className="post-msg" key="index">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              vero autem delectus officiis non natus maiores tempore veritatis
              dolorum quidem. Beatae vel ex plicabo reprehenderit doloremque
              iure, voluptate blanditiis ex veritatis.
            </p>
          </div>

          <div className="controle-posts">
            <button>adicionar Comentario</button>
            <div className="fds">
              <img src={coracao} alt="curtir" />
              <img src={salvar} alt="salvar" />
              <img src={compartilhar} alt="compartilhar" />
            </div>
          </div>
        </div>
 ))}
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default Inicial;
