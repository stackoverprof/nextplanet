import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Styled from '@emotion/styled'
import { useAuth } from '../core/contexts/AuthContext'
import GuestOnlyRoute from '../core/customRoute/GuestOnlyRoute'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const { authMethods, errorCode, seterrorCode } = useAuth()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        seterrorCode('')
        authMethods.handleSignin(email, password).catch(setpassword(''))
    }
    
    useEffect(() => {
        return seterrorCode('')
    }, [])

    return (
        <GuestOnlyRoute redirect="/dashboard">
            <Wrapper>
                {errorCode != '' && <p className="error-message">{errorCode}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Masukan Email"/>
                    </div>
                    <div>
                        <label htmlFor="email">PASSWORD</label>
                        <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} placeholder="Masukan Password"/>
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
                <div className="links">
                    <Link href="/register">Register Instead</Link>
                    |
                    <Link href="/">Back Home</Link>
                </div>
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
    flex-direction: column;

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

    .links{
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            margin: 12px;
        }
    }
`)

export default Login