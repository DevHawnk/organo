import Atleta from "../Atleta";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.atleta > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

      <div className="atleta">
        {props.atletas.map((atleta) => (
          <Atleta
            key={atleta.nome}
            nome={atleta.nome}
            cargo={atleta.cargo}
            imagem={atleta.imagem}
            corDeFundo={props.corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
