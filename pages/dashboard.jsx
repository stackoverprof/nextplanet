import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
import { useAuth } from '../core/contexts/AuthContext'
    
const Dashboard = () => {
    const { currentUser } = useAuth()

    return (
        <Wrapper>
            <Link href="/"><button>Back Home</button></Link>
            <p>Dashboard of {currentUser.email}</p>
        </Wrapper>
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