
//TODO : displaying error message
//TODO : storing user profile data

import React, { useContext, useEffect, useState } from 'react'
import { AUTH } from '../services/firebase'

const firebaseAuth = React.createContext()

const AuthProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState({})
    const [authState, setauthState] = useState('initial')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSignup = () => {
        AUTH.createUserWithEmailAndPassword(email, password)
        .then(()=>{
            setcurrentUser(AUTH.currentUser)
            setpassword('')
        })
        .catch(err => console.log(err))
    }
    
    const handleSignin = () => {
        AUTH.signInWithEmailAndPassword(email, password)
        .then(()=>{
            setcurrentUser(AUTH.currentUser)
            setpassword('')
        })
        .catch(err => console.log(err))
    }

    const handleSignout = () => {
        AUTH.signOut()
    }

    useEffect(() => {        
        const unsubscribe = AUTH.onAuthStateChanged(user => {
            if(user) setauthState('user')
            else setauthState('guest')
            setcurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    return (
        <firebaseAuth.Provider value={{
            handleSignup,
            handleSignin,
            handleSignout,
            authState,
            currentUser,
            email,
            setemail,
            password,
            setpassword
        }}>
            {children}
        </firebaseAuth.Provider>
    )
}

export default AuthProvider
export const useAuth = () => useContext(firebaseAuth)