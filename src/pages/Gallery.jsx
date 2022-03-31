import { useRef } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import useDraggableScroll from 'use-draggable-scroll';
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
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
        font-weight: 200;
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
    color: white;
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
                color: white;
            }
        }

    }
`

const Gallery = () => {
    const { width, height } = useWindowDimensions();
    const horizontalElement = useRef(null);
    const { onMouseDown } = useDraggableScroll(horizontalElement);
    const link = "";

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

    return ( 
        <>
            <StyledSection>
                <Navbar />
                <QuoteSection>
                    <div className="QuoteSection__Big">
                        <p>Gallery</p>
                        <h1>
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
            <GallerySection>
                <h2>Gallery Kemenangan <span className="underline">SIJA'26</span> </h2>
                <p>Geser bang...</p>
                <div className="GallerySection__photos" ref={horizontalElement} onMouseDown={onMouseDown}>
                    {champImages?.map((champ, i) => (
                        <div className="Champ" >
                            <img  loading="lazy" src={`https://drive.google.com/uc?export=download&id=${champ?.image?.split("/d/")[1]?.split("/")[0]}`} alt="Champ Image" className="GalleryImg" />
                            <p>{i < 10 ? '0' : ''}{i + 1} - {champ?.message}</p>     
                        </div>
                    ))}
                </div>
            </GallerySection>
            <StyledSection>
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Gallery;