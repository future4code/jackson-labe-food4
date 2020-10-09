import React, {useState} from "react";
import Router from "./router/Router";



function App() {

  // onClick carrinho passado por props até product details, para renderizá-los no cartPage.

  const [carrinho, setCarrinho] = useState([]);

  let soma = 0;

  const onClickCarrinho = (id, products, resetState, quantidade, setCounter) => {
    let newCart = [...carrinho];

    // adicionando o item selecionado a um array.
    const addProduct = products.map((produto) => {
      if (id === produto.id) {
        newCart.push({
          id: produto.id,
          name: produto.name,
          price: produto.price,
          description: produto.description,
          quantidade: Number(quantidade),
          image: produto.photoUrl
        });
      }
      return false;
    });

    if (addProduct === undefined) {
      console.error("Produto inválido");
      return;
    }


    // filtrando os itens do carrinho por quantidade e setando o contador.
    newCart.filter((item) => {
      return setCounter(Number(soma += item.quantidade))
    })

    setCarrinho(newCart);
    resetState()
  };

  console.log(carrinho)

  return (
    <div>
      <Router 
      setCarrinho={setCarrinho}
      carrinho={carrinho}
      onClickCarrinho={onClickCarrinho}/>
    </div>
  );
}

export default App;
