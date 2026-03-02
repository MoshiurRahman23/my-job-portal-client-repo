import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";


const googleProvider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [loadding,setLoadding]=useState(true);
    const [user,setUser]=useState(null);

    const createUser = (email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const LogInUser = (email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        setLoadding(true);
        return signInWithPopup(auth,googleProvider)
    }

        const signInWithFacebook = () => {
        setLoadding(true);
        return signInWithPopup(auth, facebookprovider)
        .then((result) => {
            const user = result.user;

            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            console.log(user, accessToken);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData?.email;

            const credential = FacebookAuthProvider.credentialFromError(error);

            console.log(errorCode, errorMessage, email, credential);
        });
        };
    const signOutUser = ()=>{
        setLoadding(true)
        return signOut(auth)
    }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoadding(false);
    //    if (currentUser?.email) {
    //     const userData = { email: currentUser.email };

    //     axios.post('http://localhost:5000/jwt', userData)
    //         .then(res => {
    //         const token = res.data.token;

    //         localStorage.setItem("access-token", token);

    //         console.log("Token saved:", token);
    //         })
    //         .catch(error => {
    //         console.log(error);
    //         });
    //     }
   if (currentUser?.email) {
    const userData = { email: currentUser.email };

    axios.post('http://localhost:5000/jwt', userData, { withCredentials: true })
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }
        console.log(currentUser);
    });

    return ()=> unsubscribe();
},[]);



    const authInfo ={
        loadding,
        user,
        createUser,
        LogInUser,
        signOutUser,
        signInWithGoogle,
        signInWithFacebook
    }

  return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider