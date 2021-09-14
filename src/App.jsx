import "./styles/global.scss";
import { RepositoryList } from "./components/RepositoryList";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <RepositoryList />
    </div>
  );
}
