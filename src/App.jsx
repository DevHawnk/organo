import { useState } from "react";
import Banner from "./componet/Banner";
import Formulario from "./componet/Formulario";
import Time from "./componet/Time";

function App() {
  const times = [
    {
      nome: "Ataque",
      corPrimaria: "#FFFF00",
      corSecundaria: "#ffff",
    },
    {
      nome: "Defesa",
      corPrimaria: "#33006F",
      corSecundaria: "#1a0433",
    },
    {
      nome: "Couch s",
      corPrimaria: "#4B0082",
      corSecundaria: "#830fd6",
    },
    {
      nome: "Comessão Tecnica",
      corPrimaria: "#deebf5",
      corSecundaria: "#d8cbd8",
    },
    {
      nome: "Saude",
      corPrimaria: "#FFC72C",
      corSecundaria: "#FFFF00",
    },
    {
      nome: "Marketing",
      corPrimaria: "#F0E68C",
      corSecundaria: "#f3e248",
    },
    {
      nome: "Inovação",
      corPrimaria: "#FEBE10",
      corSecundaria: "#f5ca55",
    },
  ];
  const [atletas, setAtletas] = useState([]);

  const aoNovoAtletaAdicionado = (atleta) => {
    console.log(atleta);
    setAtletas([...atletas, atleta]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoAtletaCadastrado={(atleta) => aoNovoAtletaAdicionado(atleta)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          descricao={time.descricao}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          atletas={atletas.filter((atleta) => atleta.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
