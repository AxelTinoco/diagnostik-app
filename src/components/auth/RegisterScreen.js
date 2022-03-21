import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward, IoIosAddCircleOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
    import { FormRegisternState } from '../FormRigisterState';

export const RegisterScreen = () => {

    const [changeClass] = useState(false);

    let navigate = useNavigate()
    const handleNavigateLoginForm = () => {

        navigate('/auth/login')
       
    
        }

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-screen md:bg-pattern bg-[#02b3c5]">
            <div className=" bg-register col-span-12 row-span-5  rounded-b-[4rem] bg-top flex 
            flex-col justify-around items-center shadow-2xl
             md:bg-cover md:col-span-6 md:row-span-6 md:rounded-r-[3rem] md:rounded-bl-none text-white ">
                <div className=" w-full text-center text-3xl font-bold sm:text-5xl md:text-7xl">Logo</div>
                <div className="w-1/3 text-center">
                    <h2 className="text-3xl font-bold sm:text-5xl md:text-7xl">Welcome</h2>
                    <p className="text-[#dfdfdf]">to lonely planet,we are the heart of globetrotting.</p>
                </div>

                <div className="w-1/3 text-center">
                    <p className="text-[#dfdfdf]">Login or create a new account.</p>
                </div>



                <IoIosArrowDown className={'text-3xl animate-bounce md:hidden'} />
                <IoIosArrowForward className={'animate-bounce_right md:text-5xl hidden md:flex'} />

            </div>

            <div className="col-span-12 flex p-4 justify-around text-center md:col-span-6 text-white space-y-2">

                <div className="w-1/2  flex justify-center items-center text-xl md:hidden">
                    Login <IoIosArrowForward className='ml-2' />
                </div>

                <div className="w-1/2 flex justify-end items-center text-xl">
                    <button 
                        className='flex items-center'
                        onClick={handleNavigateLoginForm}
                        >Login<IoIosAddCircleOutline className='ml-2' 
                       
                        />
                    </button>
                </div>
            </div>

            <FormRegisternState changeClass={changeClass} />




        </div>
    )
}
