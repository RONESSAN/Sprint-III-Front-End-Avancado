import { useState } from "react";

export default function Item(props) {
  //console.log(props);

  const [quantity, setQuantity] = useState(0);
  const [valueButton, setValueButton] = useState(true);
  
  const product = props.infos.product;
  const listaCarrinho = props.infos.carrinho;
  const setQtdPedidos = props.infos.setQtdPedidos;

  function adicionaProduto() {
    listaCarrinho.push({
      id: product.id,
      produto: product.title,
      quantidade: 1,
      unitario: product.price,
      total: `${Math.round(product.price * 1 * 100) / 100}`,
    });    
    //atualizando a lista de produtos no carrinho.
    props.infos.setListaCarrinho(listaCarrinho);
    setQtdPedidos(val => val + 1);  
  }

  function retiraProduto( lista ) {
    if( lista.length > 0 ) {
      let index = listaCarrinho.findIndex(i => i.id === product.id );  /* procura em qual posição esta no vetor */
      listaCarrinho.splice(index, 1);
      setQtdPedidos(val => val -1);         
    }else {
      console.log( 'vazio');
    }
  }

  // Função para subtrair o valor da quantidade de um produto
  const minus = () => {
    quantity - 1 === 0 ? setValueButton(true) : setValueButton(false);
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      retiraProduto( listaCarrinho);    
    }
  };

  // Função para somar valor da quantidade de um produto
  const plus = () => {
    setValueButton(false);
    setQuantity(quantity + 1);
    adicionaProduto( listaCarrinho);    
  };

  // Função para adicionar no carrinho
  const buyProduct = () => {
    if (quantity !== 0) {
      if (
        window.confirm(
          `Total adicionado deste item: ${Math.round(product.price * quantity * 100) / 100}`    

        )
      ) {
        //atualizando a lista de produtos no carrinho.
        alert(
          "Itens adicionados ao carrinho: " + 
           JSON.stringify(listaCarrinho)
        );
      } else {
        setQuantity(0);
      }
    } else {
      alert("Por favor informa quantidade do item!");
    }
  };

  return (
    <article className="product">
      <img src={product.image} alt="Não foi possivel carregar a imagem" />
      <h3 className="price-product">
        R$ <span>{product.price}</span>
      </h3>
      <p className="name-product">{product.title}</p>
      <div className="quantity">
        <span>Quantidade:</span>
        <button disabled={valueButton} className="minus" onClick={minus}>
          -
        </button>
        <span>{quantity}</span>
        <button className="plus" onClick={plus}>
          +
        </button>
      </div>
      <button className="buy" onClick={buyProduct}>
        Adicionar ao Carrinho
      </button>
    </article>
  );
}
