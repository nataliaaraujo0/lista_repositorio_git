import "../../components/RepositoryList/style.scss"
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);



  useEffect(() => {
    fetch("https://api.github.com/users/nataliaaraujo0/repos")
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <>
      <ul className="container">
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </>



  );
}
