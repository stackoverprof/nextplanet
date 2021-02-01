import React from 'react'
import { css } from '@emotion/react'

const Navbar = () => {

    return (
        <nav css={style}>
            <img src="/img/recipe-books-logo.svg" alt=""/>
        </nav>
    )
}

const style = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 100;

    background: #3A3C42;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 65%;
        padding-top: 6px;
    }
`

export default Navbar