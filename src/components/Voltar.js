import { useNavigate } from "react-router-dom";
import "../carrinho.css";

export default function Voltar() {
  const navigate = useNavigate();

  return (
    <figure onClick={() => navigate("/")}>
      <div className="voltar">
        <img src={"/voltar.jpeg"} alt="Voltar" width="25px" />
        <text> voltar página inicial</text> 
      </div>
    </figure>
  );
}
