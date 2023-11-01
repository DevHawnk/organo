import "./Atleta.css";

const Atleta = ({ nome, imagem, cargo, descricao, corDeFundo }) => {
  return (
    <div className="atleta">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default Atleta;
