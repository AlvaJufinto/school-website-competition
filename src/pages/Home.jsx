import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";

import HeroSijaImg from "./../assets/img/hero-sija.png";

export const HeroContainer = styled.div`
    padding: 150px 0 0 0;
    position: relative;

    h2 {
        font-size: 3rem;
    }

    .HeroContainer__ImgHolder {
        margin: 20px 0 0 0;
        width: 900px;
        max-width: 100%;
        overflow: hidden;
        
        img {
            transition: all 0.5s ease;
            width: 100%;
            object-fit: cover;
            
            &:hover {
                transform: scale(1.5);
            }
        }
    }

    .HeroContainer__TextHolder {
        background: ${GlobalColors.grey};
        width: 500px;
        max-width: 100%;
        padding: 30px;
        font-size: 1.5rem;
        border-bottom: 5px solid ${GlobalColors.blue};
        font-family: ${GlobalFonts.secondary};
    }

    @media (max-width: 1024px) {
        .HeroContainer__TextHolder {
            position: relative;
            width: 100%;
        }
    }
`

export const AboutContainer = styled.div`
    margin: 40px 0;
    position: relative;

    h2 {
        font-size: 3rem;
    }
    
    .AboutContainer__TextHolder {
        background: ${GlobalColors.grey};
        /* width: 50px; */
        max-width: 100%;
        padding: 30px;
        font-size: 1.5rem;
        border-bottom: 5px solid ${GlobalColors.blue};
        font-family: ${GlobalFonts.secondary};
    }

    .statistic {
        margin: 50px auto;
        text-align: center;
    }

    .AboutContainer__CounterHolder {
        width: 60%;
        margin: auto;
        display: flex;
        color: white;
        justify-content: space-between;

        .Counter {
            text-align: center; 

            h2 {
                font-size: 3.5rem;
            }

            p {
                font-size: 2rem;
                font-family: ${GlobalFonts.secondary};
            }
        }
    }

    @media (max-width: 1024px) {
        .AboutContainer__CounterHolder {
            flex-direction: column;
            gap: 50px;
        }
    }
` 

const Home = () => {
    const { width, height } = useWindowDimensions();

    return ( 
        <StyledSection>
            <Navbar />
            <HeroContainer>
                <Parallax translateX={[10, 0]}>   
                    <h2>Selamat Datang di <span className="underline">SIJA’26</span></h2>
                </Parallax>
                <div className="HeroContainer__ImgHolder">
                    <img src={HeroSijaImg} alt="Bruh" />
                </div>
                <Parallax translateY={width > 1024 ? [-50, -200] : [0, 0]} translateX={width > 1024 ? [62, 62] : [0, 0]} >
                    <div className="HeroContainer__TextHolder">
                        <div className="TextHolder">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam esse accusantium beatae cupiditate officiis consequatur ipsam dolorem non earum porro temporibus sapiente deleniti inventore quis possimus et, incidunt eum fugit.
                            </p>
                        </div>
                        <div className="TextHolder_Line"></div>
                    </div>
                </Parallax>
            </HeroContainer>
            <AboutContainer>
                <Parallax translateX={[0, 10]}>   
                    <h2>Siapakah <span className="underline">SIJA'26</span>?</h2>
                </Parallax>
                <div className="AboutContainer__TextHolder">
                    <div className="TextHolder">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam esse accusantium beatae cupiditate officiis consequatur ipsam dolorem non earum porro temporibus sapiente deleniti inventore quis possimus et, incidunt eum fugit.
                        </p>
                    </div>
                    <div className="TextHolder_Line"></div>
                </div>

                <Parallax translateX={width > 1024 ? [5, -20] : [0, 0]}>
                    <h2 className="statistic" >Statistik  <span className="underline">SIJA’26</span></h2>
                </Parallax>
                <div className="AboutContainer__CounterHolder">

                    <div className="Counter">
                        <h2>3</h2>
                        <p>Pendidik</p>
                    </div>
                    <div className="Counter">
                        <h2>200</h2>
                        <p>Peserta Didik</p>
                    </div>
                    <div className="Counter">
                        <h2>9</h2>
                        <p>Pelajaran</p>
                    </div>
                </div>
            </AboutContainer>
        </StyledSection>
     );
}
 
export default Home;