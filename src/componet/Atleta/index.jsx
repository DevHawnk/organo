import "./Atleta.css";

const Atleta = ({ nome, imagem, cargo }) => {
  return (
    <div className="atleta ">
      <div className="cabecalho">
        <img src={props.imagem} alt={props.nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Atleta;
