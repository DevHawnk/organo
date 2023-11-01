import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [descricao, setDescricao] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoAtletaCadastrado({
      nome,
      cargo,
      imagem,
      time,
      descricao,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setDescricao("");
  };

  return (
    <section className="container_form">
      <form onSubmit={aoSalvar}>
        <h2>Crie o card de Atleta</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Posição"
          placeholder="Digite sua Posição"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Descrição"
          placeholder="Descreva-se em poucas palavras"
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
