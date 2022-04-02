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

const QuoteSection = styled.div`
    padding: 150px 0 0 0;
    font-family: ${GlobalFonts.primary};

    .QuoteSection__Big {
        padding: 0 25%;

        p {
            font-size: 1.5rem;
            color: ${GlobalColors.blue};
        }

        h1 {
            font-size: 5rem;
            max-width: 600px;
            width: 100%;
        }
    }
    
    @media (max-width: 1024px) {
        .QuoteSection__Big {
            padding: 0;
            h1 {
                font-size: 3rem;
            }
        }
    }
`

const SearchSection = styled.div`
    text-align: right;
    margin: 0 0 50px 0;

    p {
        margin: 100px 0 50px 0;
        font-family: ${GlobalFonts.secondary};
        font-size: 2rem;
        font-weight: 600;
    }
    .SearchContainer {
        position: relative;
        height: 60px;
        padding: 0;
        position: relative;
        
        input[type="text"] {
            height: 60px;
            font-size: 55px;
            display: inline-block;
            font-family: ${GlobalFonts.primary};
            /* font-weight: 100; */
            border: none;
            outline: none;
            color: black;
            padding: 3px;
            padding-right: 60px;
            width: 0px;
            position: absolute;
            top: 0;
            right: 0;
            background: none;
            z-index: 3;
            transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
            cursor: pointer;
        }
        
        input[type="text"]:focus:hover {
            border-bottom: 1px solid #BBB;
        }
    
        input[type="text"]:focus {
            width: 800px;
            z-index: 1;
            border-bottom: 1px solid #BBB;
            cursor: text;
        }
    
        input[type="submit"] {
            height: 67px;
            width: 67px;
            display: inline-block;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=);
            background-size: cover;                      
            background-repeat: no-repeat;
            background-position: center center;   
            text-indent: -10000px;
            border: none;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            cursor: pointer;
            opacity: 0.4;
            cursor: pointer;
            transition: opacity .4s ease;
        }
    
        input[type="submit"]:hover {
            opacity: 0.8;
        }
    }


    @media (max-width: 800px) {
        input[type="text"]:focus {
            width: ${props => props.windowWidth - 30}px;
            /* margin: 0 20px 0 0; */
        }
    }
`

const JobCardsContainer = styled.div`
    
`

const Jobs = () => {
    const [value, setValue] = useState('')
    let filteredJobs = [];
    const { width, height } = useWindowDimensions();
    
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [width]);

    const jobs = [
        {
            name: "Frontend Developer",
            place: "Jakarta",
            company: "PT Mencari Cinta Sejati",
            description: "Frontend developer yang berpengalaman selama 69 tahun",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Backend Developer",
            place: "Jakarta",
            company: "PT Mencari Cinta Sejati",
            description: "Sseorang Backend Developer yang berpengalaman selama 69 tahun di perusahaan Ogah Rugi",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Psatir Handal",
            place: "Merauke",
            company: "PsaTir",
            description: "Psatir handal sangat dibutuhkan untuk menstranslate bahasa satir dengan bahasa manusia",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "UI/UX Designer",
            place: "Bogor",
            company: "PT Bogay",
            description: "Ahli UI Design yang telah memiliki pengalaman selama 5 tahun",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Network Designer",
            place: "Padang",
            company: "PT kang Jaringan",
            description: "Kamg jaringan yang jago merancang SOHO dengan pengalaman magang 1 tahun di PT mencari cinta sejati",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ];
    
    return ( 
        <>
            <StyledSection>
                <Navbar />
                <QuoteSection>
                    <div className="QuoteSection__Big">
                        <p>Jobs</p>
                        <h1 data-aos="fade-up" data-aos-duration="1000">
                            Kami juga menyediakan beberapa jasa yang bergerak di bidang IT 
                        </h1>
                    </div>
                </QuoteSection>
                <SearchSection windowWidth={width}>
                    <p>Cari jasa yang Anda butuhkan dengan <span style={{ color: GlobalColors.blue, fontWeight: 800 }}>klik</span> icon search di bawah!</p>
                    <div className="SearchContainer">
                        <div>
                            <input id="search_submit" autocomplete="off" value="Rechercher" type="submit" />
                            <input autocomplete="off" id="search" name="search" type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="What are you looking for ?" />
                        </div>
                    </div>
                </SearchSection>

                {jobs.filter(item => {
                    if (!value) return true;
                    if (item.name.toLowerCase().includes(value.toLowerCase())) {
                        return true
                    }})
                    .map(item => {
                        filteredJobs?.push(item);
                    })
                }
                
                <JobCardsContainer>
                    {filteredJobs?.map(jobs => (
                        <div className="JobsCardsContainer__card" >
                            <div className="Top">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                            <div className="informationContainer">
                                <div className="jobTitle">
                                    <h1>{jobs?.name}</h1>
                                </div>
                                <p>{jobs?.description}</p>
                                <p></p>
                                <a rel="stylesheet" href={jobs?.link}>More</a>
                            </div>
                            <div className="Bottom">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    ))}
                </JobCardsContainer>
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Jobs;