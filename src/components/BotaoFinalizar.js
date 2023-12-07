import { useNavigate } from "react-router-dom";

export default function BotaoFinalizar() {
    const navigate = useNavigate();
    
    return (
    <div className="botao">
      <button onClick={() => navigate("/Finalizar")}>Finalizar Compra</button>
    </div>
  );
}
