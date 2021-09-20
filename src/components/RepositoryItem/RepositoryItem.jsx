import "../../components/RepositoryItem/style.scss";

export function RepositoryItem(props) {
  return (
    <li className="content-gallery">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Repositório Privado!"}</p>
      <a href="{props.repository.html_url}">Acessar</a>
    </li>
  );
}
