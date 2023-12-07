import React, { useEffect } from "react";
import "../carrinho.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function TabelaItens() {
  var valor = 0;
  const navigate = useNavigate();
  const { state } = useLocation();
  const listaCarrinho = state?.listaCarrinho;

  useEffect(() => {
    const CarrinhoVazio = () => {
      if (listaCarrinho.length === 0) {
        alert("Favor selecionar pelo menos 1 produto!");
        navigate("/");
      }
    };
    CarrinhoVazio();
  });

  // somando o total do pedido.
  for (var i = 0; i < listaCarrinho.length; i++) {
    valor += Math.round(listaCarrinho[i].total * 100) / 100;
  }
  let total = valor.toFixed(2);

  return (
    <div>
      <div className="total">
        <span>Total da Compra: {total}</span>
      </div>
      <table border={1}>
          <tr className="cabecalho">
            <th>ID</th>
            <th>DESCRIÇÃO DO PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>VALOR UNITÁRIO</th>
            <th>TOTAL</th>
          </tr>
        <tbody>
          {listaCarrinho.map((carrinho) => (
            <tr>
              <td>{carrinho.id}</td>
              <td>{carrinho.produto}</td>
              <td>{carrinho.quantidade}</td>
              <td>{carrinho.unitario}</td>
              <td>{carrinho.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
