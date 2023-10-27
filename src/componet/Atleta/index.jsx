import "./Atleta.css";

const Atleta = (props) => {
  return (
    <div className="atleta ">
      <div className="cabecalho">
        <img src="https://github.com/devhawnk.png" alt="hawnk dev" />
      </div>

      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Atleta;
