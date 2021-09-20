import "./styles/global.scss";
import { Header } from "./components/Header/Header";
import { RepositoryList } from "./components/RepositoryList/RepositoryList";
import { Counter } from "./components/Counter/counter";

export function App() {
  return (
    <>
      <Header />
      <RepositoryList />
      <Counter />
    </>
  );
}
