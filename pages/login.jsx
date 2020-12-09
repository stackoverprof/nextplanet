import React from 'react'
import Link from 'next/link'
import Styled from '@emotion/styled'
import { useAuth } from '../core/contexts/AuthContext'
import GuestOnlyRoute from '../core/customRoute/GuestOnlyRoute'

const SignUp = () => {
    const { handleSignin, email, password, setemail, setpassword } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSignin()
    }

    return (
        <GuestOnlyRoute redirect="/dashboard">
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Masukan Email"/>
                    </div>
                    <div>
                        <label htmlFor="email">PASSWORD</label>
                        <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} placeholder="Masukan Password"/>
                    </div>
                    <button type="submit">SIGNIN</button>
                    <Link href="/"><button>Back Home</button></Link>
                </form>
            </Wrapper>
        </GuestOnlyRoute>
    )
}

const Wrapper = Styled.div(() =>`
    position: fixed;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 102px;
        
        div{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            margin: 8px 0;

            label{
                margin-bottom: 4px;
            }
        }
    }
`)

export default SignUp