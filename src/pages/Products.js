import { useState } from "react";
import Item from "../components/Item";
import products from "../products.json";
import IconCarrinho from "../components/IconCarrinho";
import Banner from "../components/Banner";

export default function Products() {
  const [productList] = useState(products.bottles);
  const [listaCarrinho, setListaCarrinho] = useState([]);
  const [qtdPedidos, setQtdPedidos] = useState(0);

  return (
    <div>
      
      <Banner/>

      <IconCarrinho qde={{ qtdPedidos, listaCarrinho }} />

      <section className="main-products">
        {productList.map((p, index) => (
          // aqui estou passando 3 props: 1 as informações do produto, 2 a lista de produtos no carrinho, 3 a função para atualizar a lista de produtos do carrinho
          <Item
            key={index}
            infos={{
              product: p,
              carrinho: listaCarrinho,
              setListaCarrinho,
              setQtdPedidos,
            }}
          />
        ))}
      </section>

      <footer></footer>
    </div>
  );
}
