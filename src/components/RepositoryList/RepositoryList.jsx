import "../../components/RepositoryList/style.scss";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
export function RepositoryList() {
  return (
    <>
      <section className="container-gallery">
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </section>
    </>
  );
}
