import React from "react";
import Voltar from "../components/Voltar";
import BotaoFinalizar from "../components/BotaoFinalizar";
import TabelaItens from "../components/TabelaItens";

export default function Carrinho() {
  return (
    <div>
      <Voltar />
      <BotaoFinalizar />
      <TabelaItens />
    </div>
  );
}
