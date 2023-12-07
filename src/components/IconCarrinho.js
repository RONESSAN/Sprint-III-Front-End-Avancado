import { useNavigate } from "react-router-dom";

export default function IconCarrinho(props) {
  const listaCarrinho = props.qde.listaCarrinho;
  const qtdPedidos = props.qde.qtdPedidos;

  const navigate = useNavigate();

  return (
    <figure onClick={() => navigate("/Carrinho", { state: { listaCarrinho } })}>
      <div className="carrinho">
        <img src={"/carrinho.jpeg"} alt="Carrinho" />
        <span>{qtdPedidos}</span>
      </div>
    </figure>
  );
}
