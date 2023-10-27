import { useState } from "react";
import Banner from "./componet/Banner";
import Formulario from "./componet/Formulario";
import Time from "./componet/Time";

function App() {
  const times = [
    {
      nome: "Ataque",
      corPrimaria: "#ffff",
      corSecundaria: "#FFFF00",
    },
    {
      nome: "Defesa",
      corPrimaria: "#33006F",
      corSecundaria: "#FFC72C",
    },
    {
      nome: "Couch s",
      corPrimaria: "#4B0082",
      corSecundaria: "#E6E6FA",
    },
    {
      nome: "Comessão Tecnica",
      corPrimaria: "#0066b2",
      corSecundaria: "#33006F",
    },
    {
      nome: "Saude",
      corPrimaria: "#FFC72C",
      corSecundaria: "#FFFF00",
    },
    {
      nome: "Marketing",
      corPrimaria: "#F0E68C",
      corSecundaria: "#ffff",
    },
    {
      nome: "Inovação",
      corPrimaria: "#FEBE10",
      corSecundaria: "#1d1160",
    },
  ];
  const [atleta, setAtleta] = useState([]);

  const aoNovoAtletaAdicionado = (atleta) => {
    console.log(atleta);
    setAtleta([...atleta, atleta]);
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
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          atletar={atleta.filter((atleta) => atleta.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
