import { createGlobalStyle } from 'styled-components'


export const GlobalStyle =  createGlobalStyle`
    body{
        display: flex;
        justify-content: center;
    }
    *{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }
    #root{
        width: 80vw;
    }
`;