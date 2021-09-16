import "../../components/RepositoryList/style.scss";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";

const repository = {
  name: "Gallery-page-stake",
  description:
    " Site feito para treinar responsividade com Media queries, flex-box e grid system do bootstrap",
  link: "https://github.com/nataliaaraujo0/gallery-page-skate",
};

const repositoryDatatime = {
  name: "format_datatime_js",
  description:
    " Projeto captura a data e hora em tempo rel e mostra o mesmo em um documento.tltle a quantidade de cliques no botão.",
  link: "https://github.com/nataliaaraujo0/format_datatime_js",
};

const repositoryList = {
  name: "lista_repositorio_git",
  description:
    " Porjeto feito para estudar React, onde o objetivo é listar os repositórios do Github.",
  link: "https://github.com/nataliaaraujo0/lista_repositorio_git",
};

const repositoryPintura = {
  name: "pintura-digital ",
  description: "Site sobre Pintura Digital, feito em Html estático e Css.",
  link: "https://github.com/nataliaaraujo0/pintura-digital",
};

const repositoryIlustration = {
  name: "crud-ilustration-js",
  description:
    "Este projeto tem o objetivo de criar um CRUD usando Html,Css, Javascript e Framework Materializecss.",
  link: "https://github.com/nataliaaraujo0/pintura-digital",
};
const repositoryHades = {
  name: "hades-personagens",
  description:
    "Personagens do jogo Hades, feito Css e a biblioteca de animação animate Css. Este projeto foi feito para treinar Box Model - Css.",
  link: "https://github.com/nataliaaraujo0/hades-personagens",
};

export function RepositoryList() {
  return (
    <>
      <ul className="container-gallery">
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repositoryDatatime} />
        <RepositoryItem repository={repositoryList} />
        <RepositoryItem repository={repositoryPintura} />
        <RepositoryItem repository={repositoryIlustration} />
        <RepositoryItem repository={repositoryHades} />
      </ul>
    </>
  );
}
