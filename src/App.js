import './App.css';
import BodyCarrinho from './components/BodyCarrinho';
import BodyPerfil from './components/BodyPerfil';
import BodyProdutos from './components/BodyProdutos';
import { useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  /*const [CompProdutos, SetIsProduto] = useState(true);
  const [CompPerfil, SetIsPerfil] = useState(false);
  const [CompCarrinho, SetIsCarrinho] = useState(false);
*/

  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    // Você pode atualizar a URL manualmente usando window.history.pushState
    window.history.pushState(null, '', `/${page}`);
  };

  const handlePopState = () => {
    // Quando o usuário usa os botões de navegação do navegador
    // para voltar ou avançar, atualize a página com base na URL atual.
    const path = window.location.pathname.replace('/', '');
    setCurrentPage(path);
  };

  // Adicione um ouvinte para o evento popstate
  window.addEventListener('popstate', handlePopState);

  return (
    <div className="App">
      <header>
        <nav className="">
          <div className="grid justify-items-center p-4 text-xl ">
            <div className="hidden w-full md:block md:w-auto border border-black rounded-lg bg-stone-700" >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 mx-4 md:flex-row md:space-x-32 md:mt-0 md:border-0 ">
                <li>
                  <button onClick={() => navigateTo('perfil')} className=" text-white">Perfil</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('produtos')} className=" text-white">Produtos</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('carrinho')} className=" text-white">carrinho</button>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      <body>
        {currentPage === 'perfil' && <BodyPerfil />}
        {currentPage === 'produtos' && <BodyProdutos />}
        {currentPage === 'carrinho' && <BodyCarrinho />}
      </body>
    </div>
  );
}

export default App;