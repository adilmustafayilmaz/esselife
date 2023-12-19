import { collection, addDoc } from "firebase/firestore";
import { db } from "../../app/firebase";


export default async function AddItem(email: string, password: string) {


    console.log("Email " + email)
    console.log("Password " + password)

    await addDoc(collection(db, 'users'), {
        email: email,
        password: password
    });

}