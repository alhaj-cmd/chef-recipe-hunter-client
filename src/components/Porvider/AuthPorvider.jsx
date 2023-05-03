import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../firebase/Firebase-config';
// import App from '../../App';


export const AuthContext = createContext(null);

const  auth =  getAuth(app);
const AuthPorvider = ({children}) => {

    // const user = null;
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email, password) =>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        // setLoading(true);
        return signOut(auth);
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUsed =>{
            console.log('logged in user inside auth state', loggedUsed)
            setUser(loggedUsed);
            // setLoading(false);
        }) 
        return() =>{
            unsubscribe();
        }
    },[] )
    // const display = {pic:'https://t4.ftcdn.net/jpg/01/80/56/49/240_F_180564902_6jAuzv0QyTEHum9rlQgpSNlGDpVBleRi.jpg'}

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;