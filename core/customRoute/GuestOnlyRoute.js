import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'

const GuestOnlyRoute = ({children, redirect}) => {
    const { isLoggedIn } = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        if (isLoggedIn) router.push(redirect)
    }, [isLoggedIn])

    return (
        <div>
           {!isLoggedIn && children}
        </div>
    )
}

export default GuestOnlyRoute