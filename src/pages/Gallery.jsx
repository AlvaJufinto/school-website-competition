import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import useDraggableScroll from 'use-draggable-scroll';
import AOS from "aos";  
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
import { googleDriveParser } from "../utils";
import { StyledSection } from "../components/styledComponents";

export const QuoteSection = styled.div`
    padding: 150px 0 0 0;
    font-family: ${GlobalFonts.primary};

    .QuoteSection__Big {
        padding: 0 20%;

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

    .QuoteSection__Description {
        font-family: ${GlobalFonts.secondary};
        /* font-weight: 200; */
        display: flex;
        gap: 50px;
        margin: 50px 0 0 0;
        
        .left {
            text-align: right;

            p:nth-child(1) {
                font-weight: bold;
                color: ${GlobalColors.blue};
            }
        }

        .right {
            /* margin: 150px 0 0 0; */
        }

        p {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1024px) {
        .QuoteSection__Big {
            padding: 0;

            h1 {
                font-size: 3rem;
            }
        }

        .QuoteSection__Description {
            gap: 50px;
            flex-direction: column;
            
            .left {
                text-align: left;
            }

            .right {
                margin: 0;
            }
        }
    }

`

export const GallerySection = styled.div`
    color: black;
    margin: 150px 0px;

    h2 {
        text-align: center;
        font-size: 3rem;
        font-family: ${GlobalFonts.primary};
    }
    
    p {
        text-align: center;
        font-size: 2rem;
        margin: 0 0 50px 0;
        font-family: ${GlobalFonts.secondary};
        color: ${GlobalColors.blue};
        font-weight: 500;
    }
    
    .GallerySection__photos {
        width: 100%;
        min-height: 500px;
        display: flex;
        flex-wrap: nowrap;
        gap: 100px;
        overflow-x: auto;
        padding: 0 5%;
        
        ::-webkit-scrollbar {
            display: none;
        }

        .Champ {
            .GalleryImg {
                max-width: 800px;
                min-height: 500px;
                max-height: 200px;
                object-fit: cover;
                object-position: center;
                -moz-user-select: none;
                -webkit-user-select: none;
                pointer-events: none;
                user-select: none;
            }

            p {
                font-size: 1.5rem;
                font-family: ${GlobalFonts.secondary};
                color: black;
            }
        }
    }
`

const Gallery = () => {
    const { width, height } = useWindowDimensions();
    
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true });
    }, []);
    
    const champImages = [
        {
            image: 'https://drive.google.com/file/d/11ZlKum3W4YjeA2R6V7-HoClNppr0zi6f/view',
            message: "Aren't they cool?"
        },
        {
            image: "https://drive.google.com/file/d/1W5muq1dttSKh3n3wdxd2eXCq6ZNqjrmi/view",
            message: "We're the champs!"
        },
        {
            image: "https://drive.google.com/file/d/1O6nvlnbdEgbaY33_vPWN14dnre4_kyg3/view",
            message: "Just leave no doubt to us."
        },
        {
            image: 'https://drive.google.com/file/d/1isRmZHevnqeJgnM3ZqjlwPAug1nm5I93/view',
            message: "Yes, we're amazing."
        },
        {
            image: "https://drive.google.com/file/d/1Sjj6Z6_6KN5DCXP3I1VTuiFxDPVHyv3z/view",
            message: "This is cool, right?"
        },
        {
            image: 'https://drive.google.com/file/d/1s4CCKXTeT7GTEuczPXOdvyh8acevEmZk/view',
            message: "No one can stop us!"
        },
    ]

    const buildingImages = [ 
        {
            image: 'https://drive.google.com/file/d/1BLJQ4k1kkfjn8_vNlMckZ7Qfg2stW0N8/view',
            message: 'What they doin huh?',
        },
        {
            image: 'https://drive.google.com/file/d/1Xj19aD2QGaWExZfx-QWmRjc2G_KHcUwJ/view',
            message: "This is not close up",
        },
        {
            image: 'https://drive.google.com/file/d/1SuXqFkm5UUwD-nGeWQWQF-toj_8RQEY6/view',
            message: "Here's the right side.",
        },
        {
            image: 'https://drive.google.com/file/d/1qfVeU-E1vlzu-QvX7RKqGjWIfxCwhJNb/view',
            message: "I know... It looks like a prison at first sight",
        },
        {
            image: 'https://drive.google.com/file/d/19jiuWMyF1b9hrqD24RUEFU4K2mVpFxzc/view',
            message: "Ay these are from victorious era",
        },
        {
            image: 'https://drive.google.com/file/d/1gnoOsPsq3FTBoKRMotN9yPik5AKBDK5y/view',
            message: "Here's the left side.",
        },
        {
            image: 'https://drive.google.com/file/d/1SuXqFkm5UUwD-nGeWQWQF-toj_8RQEY6/view',
            message: "Here's the right side.",
        },
    ]

    const GalleryComponent = ({ params }) => {
        const horizontalElement = useRef();
        const { onMouseDown } = useDraggableScroll(horizontalElement);

        return (
        <GallerySection>
            <h2 data-aos="fade-up" data-aos-duration="1000">{params?.text} <span className="underline">SIJA'26</span> </h2>
            <Parallax translateX={width > 1024 ? [-5, 0] : [0,0]}>
                <p>Geser bang...</p>
            </Parallax>
            <div className="GallerySection__photos" ref={horizontalElement} onMouseDown={onMouseDown}>
                {params?.data?.map((item, i) => (
                    <div className="Champ" data-aos="fade-up" data-aos-duration="1000" >
                        <img  loading="lazy" src={googleDriveParser(item?.image)} alt="Champ Image" className="GalleryImg" />
                        <p>{i < 10 ? '0' : ''}{i + 1} - {item?.message}</p>     
                    </div>
                ))}
            </div>
        </GallerySection>
        )
    }

    return ( 
        <>
            <StyledSection>
                <Navbar />
                <QuoteSection>
                    <div className="QuoteSection__Big">
                        <p>Gallery</p>
                        <h1 data-aos="fade-up" data-aos-duration="1000">
                            Masih ragu untuk menjadi bagian dari kami? Fakta akan berbicara. 
                        </h1>
                    </div>
                    <div className="QuoteSection__Description">
                        <Parallax translateY={width > 1024 ? [0, 50] : [0,0]}>   
                            <div className="left">
                                <p>Sebelum itu...</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque unde similique, quas expedita ipsa doloribus ipsum illo omnis. Quos, dicta iste? Provident impedit fugiat similique quaerat eum ullam eligendi?</p>
                            </div>
                        </Parallax>
                        <Parallax translateY={width > 1024 ? [100, 0] : [0,0]}>   
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque unde similique, quas expedita ipsa doloribus ipsum illo omnis. Quos, dicta iste? Provident impedit fugiat similique quaerat eum ullam eligendi?</p>
                            </div>
                        </Parallax>
                    </div>
                </QuoteSection>
            </StyledSection>

            <GalleryComponent params={{ 
                data: champImages,
                text: 'Gallery Kemenangan'
             }} />

            <GalleryComponent params={{ 
                data: buildingImages,
                text: 'Gallery Gedung'
             }} />

            <StyledSection>
                <Contact />
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Gallery;