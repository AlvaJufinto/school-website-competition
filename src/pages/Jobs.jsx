import { useRef, useEffect, useState } from "react";
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
    const [value, setValue] = useState('')
    let filteredJobs = [];
    
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
                <input 
                type="text"
                value={value} 
                onChange={e => setValue(e.target.value)} 
                style={{ 
                    margin: "200px 0 0 0"
                }} 
                />

            {jobs.filter(item => {
                if (!value) return true;
                if (item.name.toLowerCase().includes(value.toLowerCase())) {
                    return true
                }
                })
                .map(item => {
                    filteredJobs?.push(item)
                    console.log(item)
                })
            }

            {filteredJobs?.map(jobs => (
                <div>
                    <h2>{jobs?.name}</h2>
                    <p>{jobs?.description}</p>
                </div>
            ))}
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Jobs;