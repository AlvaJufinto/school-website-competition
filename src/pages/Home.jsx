import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Navbar from "../components/Navbar";
import { GlobalColors } from "../globals";
import { StyledSection } from "../components/styledComponents";

import HeroSijaImg from "./../assets/img/hero-sija.png";

export const HeroContainer = styled.div`
    padding: 250px 0 0 0;
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
        position: absolute;
        bottom: -50px;
        right: 0;
    }

    @media (max-width: 768px) {
        .HeroContainer__TextHolder {
            position: static;
            width: 100%;
            /* height: auto; */
        }
    }
`

const Home = () => {
    return ( 
        <StyledSection>
            <Navbar />
            <HeroContainer>
                <Parallax translateX={[50, 0]}>   
                    <h2>Selamat Datang di <span className="underline">SIJA’26</span></h2>
                </Parallax>
                <div className="HeroContainer__ImgHolder">
                    <img src={HeroSijaImg} alt="Bruh" />
                </div>
                <Parallax translateX={[0, 10]}>
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
        </StyledSection>
     );
}
 
export default Home;