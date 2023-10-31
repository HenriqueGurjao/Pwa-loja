import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import addNotification from 'react-push-notification';
import 'react-toastify/dist/ReactToastify.css';
import teclado from '../img/4.jpeg'
import teclado2 from '../img/6.webp'
import teclado3 from '../img/7.webp'
import teclado4 from '../img/8.webp'
import teclado5 from '../img/12.webp'
import teclado6 from '../img/13.jpg'
import teclado7 from '../img/images 1.jpeg'
import teclado8 from '../img/images2.jpeg'
import teclado9 from '../img/images3.jpeg'
import teclado10 from '../img/images5.jpeg'
import teclado11 from '../img/images9.jpeg'
import teclado12 from '../img/teclado1.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../contexts/CartContext';



const Prods = [
    { id: 1, title: "teclado apple", price: 100.99, Image:teclado },
    { id: 2, title: "teclado microsorft", price: 50.99, Image:teclado2 },
    { id: 3, title: "teclado redragon", price: 40.99, Image:teclado3 },
    { id: 4, title: "teclado samsung", price: 60.99, Image:teclado4 },
    { id: 5, title: "teclado Skylong", price: 70.99, Image:teclado5 },
    { id: 6, title: "teclado Logitech", price: 29.99, Image:teclado6 },
    { id: 7, title: "teclado Dell", price: 199.99, Image:teclado7 },
    { id: 8, title: "teclado Sony", price: 79.99, Image:teclado8 },
    { id: 9, title: "teclado HP", price: 499.99, Image:teclado9 },
    { id: 10, title: "teclado Canon", price: 299.99, Image:teclado10 },
    { id: 11, title: "teclado gamer", price: 349.99, Image:teclado11 },
    { id: 12, title: "teclado Epson", price: 59.99, Image:teclado12 }

];

     
function BodyProdutos(handleProducts) {
    const { addToCart } = useContext(CartContext);


    function shareContent(){
        let data = {url: "http://localhost:3000/produtos", text: "ACESSA AI ACESSA AI ACESSA AI ACESSA AI", title: "Acesse o Site Produtos Pirata Online"};
        console.log(data);
        
        if (!navigator.share){
          alert("Your device does not support the Web Share API. Try on an iPhone or Android phone!");
        }
        else {
          navigator.share(data);
        }
      } 
      
    
    
    const notificacao = () =>{
        addNotification({
            title: 'Compras Piratas Online',
            message: 'O seu produto foi adicionado ao Carrinho',
            duration: 4000,
            native: true,
        });
    }



    return (
        <div className="">
            <ul className="flex flex-wrap justify-around">
                {Prods.map((Prod) => (
                    <li key={Prod.id} className="m-4">
                        <div className="w-60 h-80 bg-zinc-500 rounded-xl p-4 text-center text-white">
                            <div className='justify-items-center text-center text-white'>
                                <p>{Prod.title}</p>
                                <img src={Prod.Image} alt={Prod.title} className="w-48 h-52 bg-top rounded-xl" />
                                <p>{Prod.price}</p>
                            </div>

                            <div className="flex flex-col justify-around md:flex-row mt-4">
                                <div className="mx-1 text-white">
                                    <button onClick={() => {addToCart(Prod); notificacao()}} className="border w-28 rounded-lg bg-green-500">
                                        Carrinho
                                    </button>
                                    <ToastContainer />
                                </div>
                                <div className="mx-1 text-white text-justify">
                                    <button className="border w-28 rounded-lg bg-blue-500" onClick={shareContent}>
                                        Compartilhar
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