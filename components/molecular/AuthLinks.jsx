import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import to from '../../core/routepath'
import { useAuth } from '../../core/contexts/AuthContext'

const AuthLinks = () => {
    const { authState } = useAuth()

    return (
        <div css={style}>
            { authState === 'guest' && <Link href={to.login}><button className="btn">Login</button></Link> }
            { authState === 'guest' && <Link href={to.register}><button className="btn">Register</button></Link> }
            { authState === 'user' && <Link href={to.dashboard}><button className="btn">Dashboard</button></Link> }
        </div>
    )
}

const style = css`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default AuthLinks