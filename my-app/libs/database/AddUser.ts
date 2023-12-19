import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth } from '../../app/firebase';
import toast from 'react-hot-toast'


export default function SignUp(email: string, password: string){

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            if( errorCode === AuthErrorCodes.WEAK_PASSWORD){
                toast.error("Weak Password")
            }
            if( errorCode === AuthErrorCodes.EMAIL_EXISTS){
                toast.error("Email Exists")
            }
            if( errorCode === AuthErrorCodes.INVALID_EMAIL){
                toast.error("Invalid Email")
            }
        })
}