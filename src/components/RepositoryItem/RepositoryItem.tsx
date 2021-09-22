import "../../components/RepositoryItem/style.scss";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="content-gallery">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Sem descrição!"}</p>
      <a href={props.repository.html_url}>Acessar</a>
    </li>
  );
}
