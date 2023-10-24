import './App.css';
import BodyCarrinho from './components/BodyCarrinho';
import BodyPerfil from './components/BodyPerfil';
import BodyProdutos from './components/BodyProdutos';
import { useState } from "react"


function App() {

  const [CompProdutos, SetIsProduto] = useState(true);
  const [CompPerfil, SetIsPerfil] = useState(false);
  const [CompCarrinho, SetIsCarrinho] = useState(false);

  return (
    <div className="App">
      <header>
        <nav className="">
          <div className="grid justify-items-center p-4 text-xl ">
            <div className="hidden w-full md:block md:w-auto border border-black rounded-lg bg-stone-700" >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 mx-4 md:flex-row md:space-x-32 md:mt-0 md:border-0 ">
                <li>
                  <button onClick={() => SetIsPerfil(true, SetIsProduto(false), SetIsCarrinho(false))} className=" text-white">Perfil</button>
                </li>
                <li>
                  <button onClick={() => SetIsProduto(true, SetIsPerfil(false), SetIsCarrinho(false))} className=" text-white">Produtos</button>
                </li>
                <li>
                  <button onClick={() => SetIsCarrinho(true, SetIsProduto(false), SetIsPerfil(false))} className=" text-white">carrinho</button>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      <body>
        {CompProdutos && <BodyProdutos />}
        {CompPerfil && <BodyPerfil />}
        {CompCarrinho && <BodyCarrinho />}
      </body>
    </div>
  );
}

export default App;
