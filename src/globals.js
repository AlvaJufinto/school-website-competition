import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;    
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background: #111;
        overflow-x: hidden;
        
        &:before {
            
            /* text-orientation: mixed; */
            content: "SMKN 26 JAKARTA";
            text-align: center;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10rem;
            font-weight: 700;
            color: transparent;
            -webkit-text-stroke: 2px #555;
        
        }
    }

    @media (max-width: 768px) {
        body {
            &:before {
                writing-mode: vertical-rl;
                content: "SMKN 26 JAKARTA";
            }
        }
    }
`

export const GlobalColors = {
    blue: "#0587FF",
    black: "#202020",
    grey: "#353535",
    white: "#FFF",
}

export const GlobalMeasurements = {
    navbarHeight: 100,
    containerWidth: 1300,
    navbarFontSize: 1.75,
}

export const GlobalFonts = {
    primary: 'Poppins',
}