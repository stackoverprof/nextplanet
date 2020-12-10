import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
import { useAuth } from '../core/contexts/AuthContext'
import UserOnlyRoute from '../core/customRoute/UserOnlyRoute'
    
const Dashboard = () => {
    const { currentUser, handleSignout } = useAuth()

    return (
        <UserOnlyRoute redirect="/login">
            {currentUser && 
                <Wrapper>
                    <div>
                        <Link href="/"><button>BACK HOME</button></Link>
                        <button onClick={handleSignout} className="red">LOGOUT</button>
                    </div>
                    <p>Dashboard of {currentUser.email}</p>
                </Wrapper>
            }
        </UserOnlyRoute>
    )
}

const Wrapper = Styled.div(() =>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        margin-left: 12px;
        text-align: center;
    }
`)
    
export default Dashboard