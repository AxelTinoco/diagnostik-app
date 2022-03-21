import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { requestOTP, verifyOTP } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { uiReducer } from '../reducers/uiReducer';

export const PhoneRegister = ({showPhoneLogin}) => {
    console.log(showPhoneLogin)
    const [showContainerOTP, setShowContainerOTP] = useState(false);
    //const [phone, setPhone] = useState("+15538284348");
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch(uiReducer)
    console.log(showContainerOTP)

    const [formValues , handleInputChange ] = useForm({
        name : "",
        phone : "+15538284348"
    })

    const {name , phone } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("desde handle submit")
        console.log(phone)
        if (phone.length >= 10) {
               setShowContainerOTP(true)
            }
        dispatch(requestOTP(phone))
    }


    const handleVerifyOTP= (e) => {
        e.preventDefault()
        let otp = e.target.value
        setOtp(otp)
        console.log(name + " NOmbre en la funcion de phone")
        dispatch(verifyOTP(otp,name))

    }

    

   

    return (

        <form className='flex flex-col w-full justify-center items-center space-y-6 relative'
        onSubmit={handleSubmit}
        >

           {
               !showPhoneLogin && ( 
               
               <div className='w-1/2 relative flex flex-col h-full -space-y-9'>
               <input
                       type="text"
                       name='name'
                       value={name}
                       onChange={handleInputChange}
                       className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Name'
                   />
                   <label htmlFor="name"
                       className='absolute top-3 left-2 text-white text-sm bg-black p-1 rounded
                      peer-placeholder-shown:text-base peer-placeholder-shown:top-10 transition-all peer-placeholder-shown:bg-transparent 
                      peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
                      '>Nombre
                   </label>
                    
               </div>)
           }

                <div className='w-1/2 relative flex flex-col h-full -space-y-9'>
                    <input
                       type="text"
                       name='phone'
                       value={phone}
                       onChange={handleInputChange}
                       className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Name'
                   />
                   <label htmlFor="number"
                       className='absolute top-3 left-2 text-white text-sm bg-black p-1 rounded
                      peer-placeholder-shown:text-base peer-placeholder-shown:top-10 transition-all peer-placeholder-shown:bg-transparent 
                      peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
                      '>Numero</label>
   
                   
               </div>

            <div>
                    <button className='bg-green-400 w-full p-2 rounded-xl' type='submit'>Pedir token</button>
                </div>

            {
                showContainerOTP && (
                    <div className='w-1/2 relative'>
                <input
                    type="number"
                    name='otp'
                    value={otp}
                    onChange={handleVerifyOTP}
                    className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Name'
                />
                <label htmlFor="name"
                    className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
                   peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
                   '>otp</label>
            </div>
                )
            }

        <div id='recaptcha-container'>

        </div>
        </form>
    )
}
