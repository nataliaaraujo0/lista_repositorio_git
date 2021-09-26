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

    <div className="card">
      <h1>{props.repository.name}</h1>
      <p>{props.repository.description ?? "Sem descrição!"}</p>
      <a href={props.repository.html_url}>Acessar</a>
    </div>


  );
}
