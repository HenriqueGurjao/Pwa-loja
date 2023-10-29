import React, { useEffect } from 'react';
import tecladoIMG from '../img/teclado1.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import addNotification from 'react-push-notification';
import 'react-toastify/dist/ReactToastify.css';

export function addCarinho() {
    const nomeProduto = document.getElementById('NomeProduto').textContent;
    const precoProduto = document.getElementById('PrecoProduto').textContent;

}

const Prods = [
    { id: 1, title: "teclado apple", price: 100.99 },
    { id: 2, title: "teclado microsorft", price: 50.99 },
    { id: 3, title: "teclado redragon", price: 40.99 },
    { id: 4, title: "teclado samsung", price: 60.99 },
    { id: 5, title: "teclado Skylong", price: 70.99 },
    { id: 6, title: "teclado Logitech", price: 29.99 },
    { id: 7, title: "teclado Dell", price: 199.99 },
    { id: 8, title: "teclado Sony", price: 79.99 },
    { id: 9, title: "teclado HP", price: 499.99 },
    { id: 10, title: "teclado Canon", price: 299.99 },
    { id: 11, title: "teclado gamer", price: 349.99 },
    { id: 12, title: "teclado Epson", price: 59.99 }

];

     
function BodyProdutos() {

    
    const notificacao = () =>{
        addNotification({
            title: 'Compras Piratas Online',
            message: 'O seu produto foi adicionado ao Carrinho',
            duration: 4000,
            native: true,
        });
    }

    //const notify = () =>{
    //    toast('Adicionado no Carrinho')
    //}




  return (
    <div className="">
        <ul className="flex flex-wrap justify-around">
            {Prods.map((Prods) => (
                <li key={Prods.id} className="m-4">
                    <div className="w-60 h-80 bg-zinc-500 rounded-xl p-4 text-center text-white">
                        <div className='justify-items-center text-center text-white'>
                            <p>{Prods.title}</p>
                            <img src={tecladoIMG} alt={Prods.title} className="w-48 h-52 bg-top rounded-xl" />
                            <p>{Prods.price}</p>
                        </div>
                        
                        <div className="flex flex-col justify-around md:flex-row mt-4">
                            <div className="mx-1 text-white">
                                <button className="border w-28 rounded-lg bg-green-500">
                                    Comprar
                                </button>
                                <ToastContainer />
                            </div>
                            <div className="mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>
                                    Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>


    </div>
)
}

export default BodyProdutos