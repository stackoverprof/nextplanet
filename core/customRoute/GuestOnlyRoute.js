import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'

const GuestOnlyRoute = ({children, redirect}) => {
    const { currentUser } = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        if (currentUser) router.push(redirect)
    }, [currentUser])

    return (
        <div>
           {!currentUser && children}
        </div>
    )
}

export default GuestOnlyRoute