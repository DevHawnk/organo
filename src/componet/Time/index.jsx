import Atleta from "../Atleta";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({ time, atletas, aoDeletar, mudarCor }) => {
  return (
    atletas.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(evento) => {
            mudarCor(evento.target.value, time.nome);
          }}
        />
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
