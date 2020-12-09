import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'

const UserOnlyRoute = ({children, redirect}) => {
    const { currentUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) return router.push(redirect)
    }, [currentUser])

    return (
        <div>
           {
               currentUser ? (
                   <>{children}</>
               ) : <div></div>
           }
        </div>
    )
}

export default UserOnlyRoute