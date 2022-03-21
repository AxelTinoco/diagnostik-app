import { useState } from 'react'
import {GoEye,GoEyeClosed} from 'react-icons/go'
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { uiReducer } from '../reducers/uiReducer'
import { uiRemoveError, uiSetError } from '../actions/ui'
import { startGoogleLogin, startWithEmailPasswordName } from '../actions/auth'
import { PhoneRegister } from './PhoneRegister'

export const FormRegisternState = ({changeClass}) => {

    const [view, setView] = useState(false)
    const [state, setState] = useState('password')
  
    const [showSection, setShowSection] = useState(false);
    const {msgError} = useSelector(state => state.ui)
    console.log(msgError)

    const dispatch = useDispatch(uiReducer)


    const [formValues,handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2:''

    })

    const {email,password,name,password2} = formValues;

    const handleViewPassword = () => {
    
        setView(!view)

        if (view) {
            setState('password')
        }else{
            setState('text')
        }
    }

  
    
    const handleSubmitRegister = (e) => {
        e.preventDefault()
      if(isFormValid()){
          dispatch(startWithEmailPasswordName(email,password,name))
      }

    }

    const handleRegistertGoogle = () => {
        
        dispatch(startGoogleLogin())


    }
    
    const isFormValid = () => {
            //TODO
        if (name.trim().length === 0) {
            // console.log('Name is required')
            dispatch(uiSetError('Name is required'))
            return false
        }else if (!validator.isEmail(email)){
            console.log('Email invail')
            dispatch(uiSetError('Email Invalid'))
            return false
        }else if( password !== password2 || password < 5 ){
            dispatch(uiSetError('Password not equal'))
            return false
        }
        dispatch(uiRemoveError())
        return true;
    }



    const handlePhoneForm=(e)=>{
        e.preventDefault()
        setShowSection(!showSection)
        console.log(showSection)

    }

    


    return (

        <div className={`hidden md:flex col-start-8 col-end-12 row-start-2 row-end-6 rounded-3xl p-4 justify-center flex-col items-center space-y-6 border-b shadow-xl`}>
        { !showSection ? (
        
        <form 
        className = {`hidden md:flex flex-col w-full justify-center items-center space-y-6 `}
        onSubmit={showSection ? handleSubmitRegister : null}
        >
            <h2 className='text-4xl ' >Register</h2>
            
            {
                msgError && (
                    <div className='absolute rounded-xl bg-red-500 text-white top-3 p-2'>
                        {msgError}
                    </div>
                )
            }

                  <div className='w-1/2 relative'>
                   <input 
                   type="text" 
                   name='name' 
                   value={name}
                   onChange={handleInputChange}
                   className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Name'
                   />
                   <label htmlFor="name" 
                   className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
                   peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
                   '>Name</label>
                   </div>
       
                  <div className='w-1/2 relative'>
                   <input id='email' type="email" name="email" 
                   value={email}  onChange={handleInputChange}
                   className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Your Email' />
                   <label htmlFor="email" 
                   className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
                   peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
                   '>Email</label>
                  </div>
       
       
                  <div className='w-1/2 relative'>
                   <input id='password' type={state} name="password"
                   value={password} onChange={handleInputChange}
                   className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none '
                    autoComplete='off' placeholder='Password' required
                     />
                   <label htmlFor="password" required
                   className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
                   peer-placeholder-shown:text-black peer-placeholder-shown:p-0
                   '>Password</label>
                   {
                       (view) 
                       ? 
                       <GoEye className='text-xl absolute right-2 top-2 cursor-pointer' onClick={handleViewPassword} /> 
                       :<GoEyeClosed className=' text-xl right-2 top-2 absolute cursor-pointer' onClick={handleViewPassword}/> 
                   }
       
                  </div>
       
                  <div className='w-1/2 relative'>
                   <input id='password2' type={state} name="password2"
                   value={password2} onChange={handleInputChange}
                   className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none '
                    autoComplete='off' placeholder='Confirm Password' required
                     />
                   <label htmlFor="password2" required
                   className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
                   peer-placeholder-shown:text-black peer-placeholder-shown:p-0
                   '>Confirm Password</label>
       
                  </div>
       
                  <div className='w-1/2 relative '>
                  <button 
                   type='submit'
                   onSubmit={handleSubmitRegister}
                   className='bg-primary p-2 rounded-2xl my-4 w-full text-white shadow-xl'
                   >
                       Register
                   </button>
                  </div>    
        </form>
        )
        :
        <PhoneRegister />

        }
           <div className='flex justify-around flex-row border-t p-4 w-1/3'>
        
                <button className='mx-3'>
                    <FcGoogle className='text-3xl' onClick={handleRegistertGoogle}/>
                </button>
        
                or
        
                <button className='mx-3' onClick={handlePhoneForm}>
                <BsGithub className='text-3xl' />
                </button>
        
           </div>
        
    
    
        
        </div>

    )
}