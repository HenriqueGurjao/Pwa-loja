import './App.css';
import BodyCarrinho from './components/BodyCarrinho';
import BodyPerfil from './components/BodyPerfil';
import BodyProdutos from './components/BodyProdutos';
import { useState } from "react"
import React from 'react';
import{useEffect } from 'react';

function App() {

  /*const [CompProdutos, SetIsProduto] = useState(true);
  const [CompPerfil, SetIsPerfil] = useState(false);
  const [CompCarrinho, SetIsCarrinho] = useState(false);
*/

const [currentPage, setCurrentPage] = useState('produtos'); // Definido como 'produtos' para ser a página principal

useEffect(() => {
  // Adicione um ouvinte de evento popstate para tratar as alterações de URL do navegador
  const handlePopState = () => {
    const path = window.location.pathname.replace('/', '');
    setCurrentPage(path);
  };

  window.addEventListener('popstate', handlePopState);

  return () => {
    window.removeEventListener('popstate', handlePopState);
  };
}, []);

// Atualize a URL com base na página atual
useEffect(() => {
  window.history.pushState(null, '', `/${currentPage}`);
}, [currentPage]);

  const [products, setProducts] = useState({
    title: "",
    price: 0,
    img: ""
  })

  // function handleProduct(product) {
  //   setProducts({
  //     title: product.title,
  //     price: product.price,
  //     img: product.img
  //   });
  //   console.log("Recebi o produto: ", product);
  // }
  

  return (
    <div className="App">
      <header>
        <nav className="">
          <div className="grid justify-items-center p-4 text-xl ">
            <div className="hidden w-full md:block md:w-auto border border-black rounded-lg bg-stone-700" >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 mx-4 md:flex-row md:space-x-32 md:mt-0 md:border-0 ">
                <li>
                  <button onClick={() => setCurrentPage('perfil')} className=" text-white">Perfil</button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('produtos')} className=" text-white">Produtos</button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('carrinho')} className=" text-white">carrinho</button>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section>
        {currentPage === 'perfil' && <BodyPerfil />}
        {currentPage === 'produtos' && <BodyProdutos />}
        {currentPage === 'carrinho' && <BodyCarrinho />}
      </section>
    </div>
  );
}

export default App;