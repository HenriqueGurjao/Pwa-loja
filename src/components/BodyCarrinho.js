


function BodyCarrinho({ carrinhoProdutos }) {
    const renderCarrinho = () => {
        const carrinhoList = document.getElementById('CarrinhoList');
        carrinhoList.innerHTML = '';
    
        carrinhoProdutos.forEach((produto, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${produto.nome} - ${produto.preco}`;
    
          const removerButton = document.createElement('button');
          removerButton.textContent = 'Remover';
          removerButton.addEventListener('click', () => {
            // Ao clicar no botão "Remover", chame a função para remover o produto
            removerProduto(index);
          });
    
          listItem.appendChild(removerButton);
          carrinhoList.appendChild(listItem);
        });
      };
    
      const removerProduto = (index) => {
        // Remove o produto na posição "index" do carrinho
        carrinhoProdutos.splice(index, 1);
    
        // Atualize a interface manualmente
        renderCarrinho();
      };

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <ul id="CarrinhoList">
                {carrinhoProdutos.map((produto, index) => (
                    <li key={index}>
                        {produto.nome} - {produto.preco}
                        <button onClick={() => removerProduto(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BodyCarrinho