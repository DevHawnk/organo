import "./Atleta.css";

const Atleta = ({ nome, imagem, cargo, descricao, corDeFundo }) => {
  return (
    <div className="atleta">
      <div style={{ backgroundColor: corDeFundo }}>
        <h4>{nome}</h4>
        <img src={imagem} alt={nome} />
        <h5>{cargo}</h5>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default Atleta;
