import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
import { useAuth } from '../core/contexts/AuthContext'
import UserOnlyRoute from '../core/customRoute/UserOnlyRoute'
    
const Dashboard = () => {
    const { currentUser, isLoggedIn, handleSignout } = useAuth()

    return (
        <UserOnlyRoute redirect="/login">
            <div>
                {isLoggedIn && 
                    <Wrapper>
                        <Link href="/"><button>Back Home</button></Link>
                        <button onClick={handleSignout}>LOGOUT</button>
                        <p>Dashboard of {currentUser.email}</p>
                    </Wrapper>
                }
            </div>
        </UserOnlyRoute>
    )
}
    
const Wrapper = Styled.div(() =>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        margin-left: 12px;
    }
`)
    
export default Dashboard