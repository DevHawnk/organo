import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "../Formulario/Formulario.css";
import "../ListaSuspensa";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = () => {
  const times = [
    "Prog",
    "Front",
    "Data",
    "Devops",
    "UX",
    "Mobile",
    " Inovação",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="container_form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
export default Formulario;
