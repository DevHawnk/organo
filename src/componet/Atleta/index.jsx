import "./Atleta.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Atleta = ({ atleta, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(atleta.id);
  }
  return (
    <div className="atleta">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(atleta.id)}
      />
      <img src={atleta.imagem} alt={atleta.nome} />
      <h4>{atleta.nome}</h4>
      <h5>{atleta.cargo}</h5>
      <p>{atleta.descrição}</p>
    </div>
  );
};

export default Atleta;
