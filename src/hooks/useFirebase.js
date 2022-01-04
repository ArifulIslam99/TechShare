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
    
    // const user = userCredential.user;
    const newUser = {email, displayName: name};
    setUser(newUser)

    saveUserDb(email, name, 'POST')
    
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
        
      });
      alert('Account Created Successfully')
      history.push('/')

       function load()
       {
         history.go(0)
       }
      setTimeout(load, 5000)
      
      
   
  })
  .catch((error) => {
     setError(error.message)
  }).finally(()=>setIsLoading(false));
    } 
     

    const googleSignIn = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
        .then((result) => {
    
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const destination = location.state?.from || '/'
          history.replace(destination)
    const user = result.user; 
    saveUserDb(user.email, user.displayName, 'PUT')
    
      }).catch((error) => {
            
            setError(error.message)
      }).finally(()=>setIsLoading(false));
        }

       const userLogin = (email, password, history, location) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          const destination = location?.state?.from || '/'
          history.replace(destination)
          
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
             
            }
            setIsLoading(false)
          });
    },[auth])

  const saveUserDb = (email, displayName, method) =>{
          const user = {email, displayName, role:'user'}
          fetch('https://safe-fjord-60058.herokuapp.com/users',{
            method: method,
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
          })
  }   
  

    return{
        user,
        error,
        userRegistration,
        userLogin,
        logOut,
        isLoading,
        googleSignIn,
    }

}

export default useFirebase;