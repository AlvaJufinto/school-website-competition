import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import useDraggableScroll from 'use-draggable-scroll';
import AOS from "aos";  
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";


const Jobs = () => {
    const jobs = [
        {
            name: "Frontend Developer",
            place: "Jakarta",
            description: "kami membutuhkan seorang frontend developer yangs berpengalaman selama 69 tahun",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Psatir Handal",
            place: "Merauke",
            description: "Psatir handal sangat dibutuhkan untuk menstranslate bahasa satir dengan bahasa manusia",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
    ]


    return ( 
        <>
            <StyledSection>
                <Navbar />

                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Jobs;