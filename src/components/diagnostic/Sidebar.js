import { BsCalendarPlus } from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'
import { DiagnosticEntries} from './DiagnosticEntries'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import { useState } from 'react'

export const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const dispatch = useDispatch()

    const {name} = useSelector(state => state.auth)
 
  
    const handleLogout = () => {

       dispatch(startLogout())

    }

    
    const handleNewNote = () => {

        dispatch(startNewNote())
        setShowMenu(false)

    }

    const handleChangeView = () => {

        setShowMenu(!showMenu)
    }



    return (
        <>
            <FiMenu className={showMenu ? 'text-4xl absolute z-30 top-2 left-2 text-white': 'text-4xl absolute z-30 top-2 left-2 text-white '} onClick={handleChangeView}/>
        {
     
            <aside className={showMenu ? " h-screen bg-[#316b61] p-4 overflow-hidden w-[70%] md:w-[30%] md:relative absolute z-50 animate__animated animate__slideInLeft" : "hidden"}>
            <IoClose className='text-4xl absolute z-30 top-2 left-2 text-white' onClick={handleChangeView}/>

            <div className="flex flex-col space-y-2 md:flex-row justify-between text-white">
                <div className="p-2 flex items-center space-x-2 justify-center text-center mt-3">
                     <h2>{name}</h2>
                </div>
                <button
                    className=" md:p-2 bg-black rounded-2xl hover:bg-white hover:text-black animated-things "
                    onClick={handleLogout}
                    >
                        Cerrar sesion
                </button>
            </div>

            <div className='flex w-full justify-center flex-col items-center text-white mt-4'>
                <div 
                onClick={handleNewNote}
                className='group items-center flex flex-col p-0 cursor-pointer space-y-4'>
                    <BsCalendarPlus className='flex text-5xl group-hover:text-gray-300 transition-all' />
                    <p className=' group-hover:text-gray-300 '>Ingresa tus Sintomas</p>
                </div>

            </div>


            <DiagnosticEntries />


        </aside>
    
        }
        </>
    )
}
