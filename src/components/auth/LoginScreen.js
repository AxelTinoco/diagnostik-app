import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward, IoIosAddCircleOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { FormLoginState } from '../FormLoginState';

export const LoginScreen = () => {

    let navigate = useNavigate()
   
    const [showLogin, setShowLogin] = useState(false)
  


    const handleNavigateRegisterForm = () => {

    navigate('/auth/register')
    console.log('click')

    }

    const handleShowLoginForm = () => {

        setShowLogin(!showLogin)

    }

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-screen md:bg-pattern bg-[#316b61]">
            <div className=" bg-login col-span-12 row-span-full rounded-b-[4rem] flex 
            flex-col justify-around items-center shadow-2xl background-login
             bg-cover md:col-span-6 md:row-span-6 md:rounded-r-[1rem] md:rounded-bl-none text-white md:bg-right relative">

                <div className=" w-full text-center text-3xl font-bold sm:text-5xl md:text-7xl">Logo</div>
                <div className="w-1/3 text-center">
                    <h2 className="text-3xl font-bold sm:text-5xl md:text-7xl bg-clip-text">DiagnostiKare</h2>
                    <p className="text-[#dfdfdf]"></p>
                </div>

                <div className="w-1/3 text-center">
                    <p className="text-black">Iniciar Sesion</p>
                </div>



                <IoIosArrowDown className={'text-3xl animate-bounce md:hidden'} />
                <IoIosArrowForward className={'animate-bounce_right md:text-5xl hidden md:flex'} />

            </div>

            <div className="col-span-12 flex p-4 justify-around text-center md:col-span-6  space-y-2 text-white">

                <div className="w-1/2  flex justify-center items-center text-xl md:hidden">
                   <button 
                        className='flex items-center'
                        onClick={handleShowLoginForm}
                        >
                    Iniciar Sesion <IoIosArrowForward className='ml-2' />
                   </button>
                </div>

                <div className="w-1/2 flex justify-end items-center text-xl">
                    <button 
                        onClick={ handleNavigateRegisterForm }
                        className='flex items-center p-2'>
                            <p>Aun no tienes cuenta?</p>
                        <IoIosAddCircleOutline
                         className='ml-2' 
                        />
                    </button>
                </div>
            </div>

            <FormLoginState showLogin={showLogin} />




        </div>
    )
}
