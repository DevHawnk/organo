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
      nome: "Couht's",
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

  // const inicial = [
  //   {
  //     id: uuidv4(),
  //     nome: "Lucas Louzeira",
  //     cargo: "Atleta OL e couch's",
  //     imagem:
  //       "https://drive.google.com/file/d/1l4qIwlKOQfFPSb1WZekDko5IZOuK-zBi/view?usp=drive_link",
  //     time: times[0].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Matheus Dregg",
  //     cargo: "Atleta, capitão da defesa e MLB",
  //     imagem:
  //       "https://drive.google.com/file/d/1IH-hTmuFDM6w9ZqrR9hNS9C7494Rp0d-/view?usp=drive_link",
  //     time: times[0].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Felipe Silva e Silva",
  //     cargo: "Atleta DB",
  //     imagem:
  //       "	https://drive.google.com/file/d/1KaO64C8SJYNr8Zk4mACwUgKE-50G_IwZ/view?usp=drive_link",
  //     time: times[0].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Arthur",
  //     cargo: "Heard Couht",
  //     imagem:
  //       "https://drive.google.com/file/d/1cUkM9rv-FjevMGVdVB6RKxSiYDN18bT2/view?usp=drive_link",
  //     time: times[0].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Hawnk",
  //     cargo: "O que o time precisar",
  //     imagem:
  //       "https://drive.google.com/file/d/1mM_sn5zeDae9VOPdcChPX-IBGVwibNBV/view?usp=drive_link",
  //     time: times[1].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[1].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Arthur",
  //     cargo: "Heard Couht",
  //     imagem:
  //       "https://drive.google.com/file/d/1cUkM9rv-FjevMGVdVB6RKxSiYDN18bT2/view?usp=drive_link",
  //     time: times[1].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Matheus Dregg",
  //     cargo: "Atleta, capitão da defesa e MLB",
  //     imagem:
  //       "https://drive.google.com/file/d/1IH-hTmuFDM6w9ZqrR9hNS9C7494Rp0d-/view?usp=drive_link",
  //     time: times[1].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[2].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Lucas Louzeira",
  //     cargo: "Atleta OL e couch's",
  //     imagem:
  //       "https://drive.google.com/file/d/1l4qIwlKOQfFPSb1WZekDko5IZOuK-zBi/view?usp=drive_link",
  //     time: times[2].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Felipe Silva e Silva",
  //     cargo: "Atleta DB",
  //     imagem:
  //       "	https://drive.google.com/file/d/1KaO64C8SJYNr8Zk4mACwUgKE-50G_IwZ/view?usp=drive_link",
  //     time: times[2].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Hawnk",
  //     cargo: "O que o time precisar",
  //     imagem:
  //       "https://drive.google.com/file/d/1mM_sn5zeDae9VOPdcChPX-IBGVwibNBV/view?usp=drive_link",
  //     time: times[2].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Arthur",
  //     cargo: "Heard Coach",
  //     imagem:
  //       "https://drive.google.com/file/d/1cUkM9rv-FjevMGVdVB6RKxSiYDN18bT2/view?usp=drive_link",
  //     time: times[3].nome,
  //   },
  //   {
  //     nome: "Lucas Louzeira",
  //     cargo: "Atleta OL e Coach",
  //     imagem:
  //       "https://drive.google.com/file/d/1l4qIwlKOQfFPSb1WZekDko5IZOuK-zBi/view?usp=drive_link",
  //     time: times[3].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[3].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[3].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[4].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[4].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[4].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[4].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[5].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[5].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[5].nome,
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Bogão",
  //     cargo: "QB e financeiro do time",
  //     imagem:
  //       "https://scontent.fcaw3-1.fna.fbcdn.net/v/t39.30808-6/370375313_931894421980193_5683235921473774694_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X5zpncvmvREAX9EBYpn&_nc_ht=scontent.fcaw3-1.fna&oh=00_AfB1HyreXg1owvaB9vB0Q8BZbKu92XFzg8u4Cq0cNVHQCA&oe=6546137B",
  //     time: times[5].nome,
  //   },
  // ];

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
        <h1>Gerador de Card</h1>
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
