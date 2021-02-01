import React from 'react'
import { css } from '@emotion/react'
import useResize from 'use-resizing'

const Hero = () => {
    const screen = useResize().width

    return (
        <section css={style({screen})} className="flex-cc">
            <div className="hero-image contain-size--m flex-cc">
                <div className="content flex-cc">
                    <h1>Temukan Resep Manca Negara Terbaik Disini!</h1>
                </div>
            </div>
        </section>
    )
}

const style = ({screen}) => css`
    width: 100%;
    
    h1{
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: ${screen > 820 ? '60px' : screen > 540 ? '48px' : '34px'};
        text-align: center;

        color: #F7F8E2;
        margin: 32px;
    }
    
    .hero-image{
        height: 320px;
        width: 100%;
        border-radius: 0 0 24px 24px;
        overflow: hidden;
        margin: 0 32px;
        
        background: url('/img/hero-image.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        
        .content{
            height: 100%;
            width: 100%;
            background: #0006;
        }
    }
`

export default Hero