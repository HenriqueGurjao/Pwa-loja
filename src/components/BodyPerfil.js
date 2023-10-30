import { getAuth , useCreateUserWithEmailAndPassword , useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import addNotification from 'react-push-notification';
import { auth } from '../services/firebaseConfig';
import React from "react"
import userIcon from '../img/users.png';



function BodyPerfil(){
    ///useState não funciona nessa merda



    ///Notificação de criação de perfil    
    const notificacaoCreate = () =>{
        addNotification({
            title: 'Compras Piratas Online',
            message: 'Usuario Cadastrado com sucesso',
            duration: 8000,
            native: true,
        });
    }
   
    
    ///Notificação de criação de perfil    
    const notificacaoLogin = () =>{
        addNotification({
            title: 'Compras Piratas Online',
            message: 'Login bem Sucedido',
            duration: 6000,
            native: true,
        });
    }

    
    const [createUserWithEmailAndPassword, user, loading, error, ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, userlogin, loadinglogin, errorlogin,] = useSignInWithEmailAndPassword(auth);
  

    async function handleSingIn(){
        const email = document.getElementById('login').value;
        const password = document.getElementById('senha').value;
    
        await signInWithEmailAndPassword(email, password);
        notificacaoLogin()
        window.location.reload('http://localhost:3000/produtos');
    }

    function handleCreate(){
        const email = document.getElementById('login').value;
        const password = document.getElementById('senha').value;

        createUserWithEmailAndPassword(email, password);
        notificacaoCreate()
        window.location.reload(true);
    }


    return (
        <div>
            <div className="grid justify-items-center p-4 text-xl">
                <div className='bg-slate-500 !z-5 relative flex flex-col rounded-[5%] max-w-[72%] md:max-w-[350px] bg-clip-border shadow-3xl shadow-shadow-500 w-full TT bg-white undefined '>
                    <div className='grid justify-items-center p-4 texct-xl'>
                        <div className='title_login bg-white w-36 h-36 rounded-full col-span-4 mt-1 flex justify-center text-[25px] text-[#57D7FF]'>
                            <img src={userIcon} className='w-32 h-32 bg-top rounded-xl'></img>
                        </div>
                    </div>
                    <div className='boby_login'>
                        <form action="#">
                            <div className="entre_login mx-4">
                                <p className='mt-2 text-[#57D7FF] text-base/[20px] outline-none '>Email</p>
                                <input type="email" id="login" className=" flex h-10 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300" />
                            </div>
                            <div className="mt-2 senha_login mx-4" >
                                <p className='mt-2 text-[#57D7FF] text-base/[20px] outline-none'>Senha</p>
                                <input type="password" id="senha" className="flex h-10 w-full items-center justify-center rounded-lg border bg-white/0 p-2 text-sm outline-none border-gray-300" />
                            </div>
                            
                            <div className='flex justify-center mx-4'>
                                <button className="butto_login bg-[#57D7FF] hover:bg-[#4bbcdf] w-[100%] p-3 mt-2  border rounded-lg border-gray-300 text-white" type="button" onClick={handleSingIn}>Entrar</button>
                            </div>
                            <div className="versao mx-4 mb-2 text-[#57D7FF]">
                                <p>Não tem conta? <ins><strong><button className='buttton' onClick={handleCreate}>Cadastre</button></strong></ins></p>
                            </div>
                        </form>
                    </div>
                </div>
        
            </div>
        </div>

    )
}

export default BodyPerfil