import "./Atleta.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Atleta = ({ atleta, corDeFundo, aoDeletar, aoFavoritar }) => {
  return (
    <div className="atleta">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(atleta.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={atleta.imagem} alt={atleta.nome} />
      </div>
      <div className="rodape">
        <h4>{atleta.nome}</h4>
        <h5>{atleta.cargo}</h5>
      </div>
    </div>
  );
};

export default Atleta;
