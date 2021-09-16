import "../../components/RepositoryItem/style.scss";
export function RepositoryItem(props) {
  return (
    <li className="content-gallery">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href="{props.repository.link}">Acessar</a>
    </li>
  );
}
