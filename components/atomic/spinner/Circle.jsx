import React from 'react'
import { css } from '@emotion/react'

const CircleSpinner = () => {

    return (
        <div css={style}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

const style = css`
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        margin: 2px;
        border: 2px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    div:nth-of-type(1) {
        animation-delay: -0.45s;
    }

    div:nth-of-type(2) {
        animation-delay: -0.3s;
    }

    div:nth-of-type(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`

export default CircleSpinner