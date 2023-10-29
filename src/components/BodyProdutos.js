import React, { useEffect } from 'react';
import teclado from '../img/teclado1.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import addNotification from 'react-push-notification';
import 'react-toastify/dist/ReactToastify.css';

export function addCarinho() {
    const nomeProduto = document.getElementById('NomeProduto').textContent;
    const precoProduto = document.getElementById('PrecoProduto').textContent;

}

     
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

  const applePayMethod = {
    supportedMethods: 'https://google.com/pay',
    data: {
      version: 3,
      merchantIdentifier: 'merchant.whatpwacando.today',
      merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
      supportedNetworks: ['amex', 'discover', 'masterCard', 'visa', 'maestro'],
      countryCode: 'BR',
    },
  };


  const paymentDetails = {
    id: 'order-123',
    displayItems: [
      {
        label: 'PWA Demo Payment',
        amount: { currency: 'USD', value: '0.01' },
      },
    ],
    total: {
      label: 'Total',
      amount: { currency: 'USD', value: '0.01' },
    },
  };

  useEffect(() => {
    const applePayButton = document.querySelector('#apple-pay-button');

    if (applePayButton) {
      applePayButton.addEventListener('click', async () => {
        const request = new PaymentRequest([applePayMethod], paymentDetails);
        const response = await request.show();

        console.log(response);
      });
    }

  }, []); 




    return (
        <div className="">
            <div className=" grid justify-items-center p-4 text-xl ">
                <div className=" justify-items-stretch flex flex-col p-4 md:p-0 mt-4 mx-4 md:flex-row md:space-x-20 text-center text-white">

                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p id='NomeProduto'>Teclado </p>
                            <p id='PreçoProduto'>R$ 19 </p>

                        </div>
                        
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500" id="apple-pay-button" onClick={addCarinho}>comprar</button>
                                <ToastContainer/>
                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>


                </div>
                <div className=" justify-items-stretch flex flex-col p-4 md:p-0 mt-4 mx-4 md:flex-row md:space-x-20 text-center text-white">
                <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>
                    <div className=" w-60 h-80 bg-zinc-500 rounded-xl grid justify-items-center">
                        <div className="p-3 ">
                            <img src={teclado} className='w-48 h-52 bg-top rounded-xl'></img>
                        </div>
                        <div className='justify-items-stretch flex flex-col mx-4 md:flex-row md:space-x-10 text-center text-white'>
                            <p>Teclado </p>
                            <p>R$ 19 </p>

                        </div>
                        <div className=" flex flex-col justify-around md:flex-row mb-4" >
                            <div className=" mx-1 text-white ">
                                <button className="border w-28 rounded-lg bg-green-500">comprar</button>

                            </div>
                            <div className=" mx-1 text-white text-justify">
                                <button className="border w-28 rounded-lg bg-blue-500" onClick={notificacao}>carrinho</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BodyProdutos