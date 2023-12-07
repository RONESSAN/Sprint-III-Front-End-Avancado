import React from "react";
import Voltar from "../components/Voltar";
import "../carrinho.css";

export default function Finalizar() {
  return (
    <div>
    <Voltar/>
      <id className="mensagemSucesso" >
        <h2>Compra Realizada com Sucesso.</h2>
        <h2>Obrigado!</h2>
      </id>
    </div>
  );
}
