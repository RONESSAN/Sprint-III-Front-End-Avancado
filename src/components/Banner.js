import banner from "../assets/loja.jpg";

export default function Banner() {
  return (
    <div className="Products">
      <header>
        <div className="user">
          <span>Usuário</span>
        </div>
      </header>

      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      <div className="relogio">
        <img src={"/relogio.jpeg"} alt="Relogio" />
      </div>

      <div className="horario">
        <span>Seg-Sex:7:30 as 18:00</span>
        <br></br>
        <span>Atendimento</span>
      </div>

      <div className="telefone">
        <img src={"/telefone.jpeg"} alt="Telefone" />
      </div>

      <div className="telefone_dados">
        <span>(64) 3404-2004</span>
        <br></br>
        <span>Telefone</span>
      </div>
    </div>
  );
}
