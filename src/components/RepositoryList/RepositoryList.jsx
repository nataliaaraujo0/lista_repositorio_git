import "../../components/RepositoryList/style.scss";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import { useState, useEffect } from "react";

const repository = {
  name: "Gallery-page-stake",
  description:
    " Site feito para treinar responsividade com Media queries, flex-box e grid system do bootstrap",
  link: "https://github.com/nataliaaraujo0/gallery-page-skate",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/nataliaaraujo0/repos")
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <>
      <ul className="container-gallery">
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </>
  );
}
