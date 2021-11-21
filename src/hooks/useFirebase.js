import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword ,

  signOut , onAuthStateChanged, GoogleAuthProvider,  signInWithPopup,  updateProfile
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
   
 
    const [user, setUser] = useState({});

    const [error, setError] = useState("");

    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const userRegistration = (email, password,name, history) =>{

        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    const newUser = {email, displayName: name, photoURL: ''};
    setUser(newUser)
    
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://clipart.world/wp-content/uploads/2020/08/letter-t-png.png"
      }).then(() => {
        
      }).catch((error) => {
        
      });
      history.push('/')
   
  })
  .catch((error) => {
     setError(error.message)
  }).finally(()=>setIsLoading(false));
    } 
     

    const googleSignIn = (history) => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user; 
    history.push('/')
    
   
  }).catch((error) => {
         
        setError(error.message)
  }).finally(()=>setIsLoading(false));
    }

    const userLogin = (email, password, history) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          history.push('/')
          // ...
        })
        .catch((error) => {
            setError(error.message)
        }).finally(()=>setIsLoading(false));
    }

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
           setError(error.message)
          }).finally(()=>setIsLoading(false));
    } 

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user)
            } else {
             setUser({})
             setIsLoading(false)
            }
          });
    },[])



    return{
        user,
        error,
        userRegistration,
        userLogin,
        logOut,
        isLoading,
        googleSignIn
    }

}

export default useFirebase;