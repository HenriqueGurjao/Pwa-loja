import React, { useEffect } from 'react';

const Prods = [
  { id: 1, title: "teclado apple", price: 100.99 },
  { id: 2, title: "teclado microsorft", price: 50.99 },
  { id: 3, title: "teclado redragon", price: 40.99 }

];

function BodyCarrinho() {

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





 /*

  const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };
  
  const btn = document.querySelector("button");
  const resultPara = document.querySelector(".result");
  
  // Share must be triggered by "user activation"
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "MDN shared successfully";
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });

*/



  return (
    <div className="grid justify-items-center p-4 text-xl">
      <div>
      <p class="result"></p>
        <ul className="">
          <li>
            <div className=" w-full bg-zinc-500 rounded-xl p-4 justify-around text-white ">
              <div className=' flex justify-items-start ml-4  text-white'>
 
                <p className='mx-24'>Nome:</p>
                <p className='mx-44'>Preço: </p>
                <p className='mx-20'>quantidade: </p>
              </div>

            </div>

          </li>
          {Prods.map((Prods) => (
            <li key={Prods.id} className="m-4 ">
              <div className="w-full bg-zinc-500 rounded-xl p-4 flex justify-between text-white">
                <div className=' flex  justify-around text-white'>
                  <p className='mx-24'>{Prods.title} </p>
                  <p className='mx-20'>Preço: {Prods.price} </p>
                  <p className='mx-24'>Quantidade: </p>              
                  <p className='mx-24'>Valor final: quantidade * preço de produto  { Prods.price} </p>

                </div>

                <div className="flex flex-col justify-around md:flex-row ">

                  <div className="mx-1 text-white text-justify">
                    <button className="border w-32 h-20  rounded-lg bg-blue-500" >
                      Remover Carrinho
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=''></div>
      <div className="w-2/5 bg-zinc-500 rounded-xl p-3  text-white ">
        <div className=' flex flex-wrap justify-around text-white'>
          <div className=''>
            <p>Total: </p>
          </div>
          <div className="mx-1 text-white text-center">
            <button className="border w-44 rounded-lg bg-lime-500 text-xl" id="apple-pay-button">
              Finalizar Comprar
            </button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default BodyCarrinho