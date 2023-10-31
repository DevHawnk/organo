import Atleta from "../Atleta";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.atletas.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="atletas">
        {props.atletas.map((atleta) => (
          <Atleta
            nome={atleta.nome}
            cargo={atleta.cargo}
            imagem={atleta.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
