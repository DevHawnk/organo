import Atleta from "../Atleta";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({ time, atletas, aoDeletar, mudarCor }) => {
  return (
    atletas.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(time.cor, "0.6") }}
      >
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="atletas">
          {atletas.map((atleta, indice) => {
            console.log("renderizando colaborador");
            return (
              <Atleta
                key={indice}
                atleta={atleta}
                corDeFundo={time.corSecundaria}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
