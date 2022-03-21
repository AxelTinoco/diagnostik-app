import Swal from 'sweetalert2'
import { types } from "../types/types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, 
    signInWithPopup ,signOut,updateProfile,RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./ui";
import { notesLogout } from './notes';


export const startLoginEmailPasword = (email,password) => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch(startLoading())
        signInWithEmailAndPassword(auth,email,password).then(({user}) =>{
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        })
        .catch(e => {
            dispatch(finishLoading());
            console.log(e)
            Swal.fire({
                
                    title: 'Error',
                    text: e.message,
                    customClass: {
                        container: 'd-flex flex-column',
                        popup:'d-flex flex-column'
                    },
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown d-flex flex-column'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp d-flex flex-column'
                    },
                   
                    icon: 'error',
                    
            })
        })

    }
}

export const startWithEmailPasswordName = (email,password,name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .then(async({user}) => {

                await updateProfile( user, { displayName: name })

                dispatch(login(user.uid, user.displayName))
                console.log(user)
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                
                    title: 'Error',
                    text: e.message,
                    customClass: {
                        container: 'd-flex flex-column',
                        popup:'d-flex flex-column'
                    },
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown d-flex flex-column'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp d-flex flex-column'
                    },
                   
                    icon: 'error',
                    
            })
            })
    }
}

export const generateReCaptcha = () =>{
    return (dispatch) => {

        const auth = getAuth()
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              //onSignInSubmit();
              console.log(response + " Aqui es el response")
            }
          }, auth)

    }
}

export const requestOTP = (phoneNumber) => {
    return (dispatch) => {
        console.log(phoneNumber + " desde auth")
        if (phoneNumber.length >= 12) {
            //setShowContainerOTP(true)
            const auth = getAuth()
            dispatch(generateReCaptcha())
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth,phoneNumber,appVerifier).then(confirmationResult => {
                console.log(confirmationResult + " Aqui es el confirmation")
                console.log(confirmationResult.verificationId)
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log(error)
                Swal.fire({
                
                    title: 'Error',
                    text: error.message,
                    customClass: {
                        container: 'd-flex flex-column',
                        popup:'d-flex flex-column'
                    },
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown d-flex flex-column'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp d-flex flex-column'
                    },
                   
                    icon: 'error',
                    
            })
            })
        }
    }
}


export const verifyOTP = (otp,name) => {
    return (dispatch) => {
        
        console.log(otp + "Desde verifyOTP")
        console.log(name + " Este es el nombre en verifyOTP")
        if (otp.length === 6) {
            let confirmationResult = window.confirmationResult;
            dispatch(startLoading())
            confirmationResult.confirm(otp).then(async({user})=> {
                //usuario inicio sesion correctamente
                await updateProfile( user, { displayName: name })
                console.log(user?.uid)
                console.log(user?.displayName)
                dispatch(login(user?.uid) , user?.displayName )
                dispatch(finishLoading());


            }).catch((error) => {
                console.log(error)
                Swal.fire({
                
                    title: 'Error',
                    text: error.message,
                    customClass: {
                        container: 'd-flex flex-column',
                        popup:'d-flex flex-column'
                    },
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown d-flex flex-column'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp d-flex flex-column'
                    },
                   
                    icon: 'error',
                    
            })
                dispatch(finishLoading());

            })
        }

    }

}



export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        // signInWithCredential(auth, googleAuthProvider)
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid , displayName ) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }

})

export const startLogout = () => {

    return async (dispatch) => {
        const auth = getAuth();
       await signOut(auth)
       dispatch(logout());
       dispatch(notesLogout())

    }
}

export const logout = () => ({
    type: types.logout
})