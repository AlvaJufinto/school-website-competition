import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";

import Navbar from "../components/Navbar";
import { GlobalColors } from "../globals";
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
    }

    @media (max-width: 1024px) {
        .HeroContainer__TextHolder {
            position: relative;
            width: 100%;

        }
    }
`

export const CounterContainer = styled.div`
    
    h2 {
        text-align: center;
        font-size: 3rem;
    }
`

const Home = () => {
    const { width, height } = useWindowDimensions();

    return ( 
        <>
        
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
                <CounterContainer>
                    <h2>Jumlah Guru dan Murid</h2>
                    <div className="Counter__Box">
                        <p>50</p>
                        <p>Guru dan siswa</p>
                    </div>
                </CounterContainer>
            </StyledSection>
        </>
     );
}
 
export default Home;