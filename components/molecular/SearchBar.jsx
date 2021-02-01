import React from 'react'
import { css } from '@emotion/react'

const food = ['Pancake', 'Fried Rice', 'Spaghetti', 'Potato Wedges']

const SearchBar = () => {
    // const [suggestion, setSuggestion] = useState('')

    // const typingEffect = (str) => {
    //     const splits = str.split('')

    //     setTimeout(() => {
    //         setSuggestion(suggestion + char)
    //     }, 100)
    // }

    // useEffect(() => {
        
    //     typingEffect(food[0])

    // }, [])

    return (
        <div css={style} className="flex-cc">
            <div className="inner contain-size--m flex-cc">
                <input type="text" placeholder={food[0]}/>
                <button className="btn">Cari</button>
            </div>
        </div>
    )
}

const style = css`
    margin: 24px;

    .inner{
        width: 70%;

        @media (max-width: 450px) {
            flex-direction: column;
        }
    }
    
    input{
        height: 40px;
        padding: 0 24px;
        width: 100%;
        
        background: #FFFFFF;
        border: 1px solid #9CCD62;
        box-sizing: border-box;
        border-radius: 50px;
        margin: 6px;
    }

    button{
        height: 40px;
        padding: 0 40px;
        margin: 6px;
        
        @media (max-width: 450px) {
            width: 100%;
            padding: 0;
        }
    }

`

export default SearchBar