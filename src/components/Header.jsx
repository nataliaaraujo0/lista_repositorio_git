import logoAvatar from "../assets/avatar.png";

export function Header() {
  return (
    <section className="container">
      <div className="content">
        <div className="box-avatar">
          <img src={logoAvatar} alt="logo-avatar" />
        </div>
        <div className="box-headline">
          <h1>Natália Araújo</h1>
          <p>nataliaaraujo0</p>
          <p>
            Estudante de Análise e Desenvolvimento de sistemas e entusiasta de
            Front-end e UI Design.
          </p>
        </div>
      </div>
    </section>
  );
}
