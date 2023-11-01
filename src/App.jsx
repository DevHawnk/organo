import { useState } from "react";
import Banner from "./componet/Banner";
import Formulario from "./componet/Formulario";
import Rodape from "./componet/Rodape";
import Time from "./componet/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Ataque",
      cor: "#ecf3af",
    },
    {
      id: uuidv4(),
      nome: "Defesa",
      cor: "#9102eb",
    },
    {
      id: uuidv4(),
      nome: "Coach",
      cor: "#ffffff",
    },
    {
      id: uuidv4(),
      nome: "Saude",
      cor: "#dfc118",
    },
    {
      id: uuidv4(),
      nome: "Marketing",
      cor: "#7311b4",
    },
    {
      id: uuidv4(),
      nome: "Aposentados",
      cor: "#2300c0",
    },
    {
      id: uuidv4(),
      nome: "",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "Bogão",
      cargo: "QuartBack",
      imagem:
        "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
      time: times[0].nome,
    },

    {
      id: uuidv4(),
      nome: "Dregg",
      cargo: "Capitão da defesa, Middle LineBack",
      imagem:
        "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/380771019_944720677364234_6247344273165133156_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sg14pPjUhxQAX8ItcIo&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfBqNtxPHuWu4d_hI0SpL3lDHSy7n2Zix1v85KHY79iq_g&oe=65477618",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "Arthur ",
      cargo: "Head Coach",
      imagem:
        "https://github.com/DevHawnk/CardClandestinoTime/blob/master/assent/img/_Arthur.png?raw=true",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "Sylvio",
      cargo: "Atleta e Psicologo",
      imagem:
        "https://github.com/DevHawnk/CardClandestinoTime/blob/master/assent/img/atletas/Sylvio.jpg?raw=true",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: "Bogão",
      cargo: "QB e financeiro do time",
      imagem:
        "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
      time: times[5].nome,
    },
  ];

  const [atletas, setAtletas] = useState(inicial);

  function deletarAtleta(id) {
    setAtletas(atletas.filter((atleta) => atleta.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }]);
  }

  return (
    <div>
      <Banner />
      <Formulario
        aoCriarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(atleta) => setAtletas([...atletas, atleta])}
      />
      <section className="times">
        <h1>Card's</h1>
        {times.map((time, indice) => (
          <Time
            mudarCor={mudarCor}
            key={indice}
            time={time}
            atletas={atletas.filter((atleta) => atleta.time === time.nome)}
            aoDeletar={deletarAtleta}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
