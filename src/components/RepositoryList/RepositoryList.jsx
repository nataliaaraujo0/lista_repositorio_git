import "../../components/RepositoryList/style.scss";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import { useState, useEffect } from "react";

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
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </>
  );
}
