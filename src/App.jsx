import "./styles/global.scss";
import { Header } from "./components/Header/Header";
import { RepositoryList } from "./components/RepositoryList/RepositoryList";


export function App() {
  return (
    <>
      <Header />
      <RepositoryList />
     
    </>
  );
}
