import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";

export const quoteSection = styled.div`
    
`

const Gallery = () => {
    const { width, height } = useWindowDimensions();

    return ( 
        <>
            <StyledSection>
                <Navbar />
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Gallery;