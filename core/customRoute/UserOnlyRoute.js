import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'

const UserOnlyRoute = ({children, redirect}) => {
    const { currentUser } = useAuth()
    const router = useRouter()

    const isLoggedIn = currentUser != null

    useEffect(() => {
        if (isLoggedIn) router.push(redirect)
        console.log(isLoggedIn)
    }, [currentUser])

    return (
        <>
           {!isLoggedIn && children} 
        </>
    )
}

export default UserOnlyRoute