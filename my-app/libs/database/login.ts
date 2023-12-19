import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../app/firebase';


export default function SignIn(email: string, password: string) {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}