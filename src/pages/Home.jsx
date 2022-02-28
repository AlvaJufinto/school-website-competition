import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Navbar from "../components/Navbar";
import { StyledSection } from "../components/styledComponents";

import HeroSijaImg from "./../assets/img/hero-sija.png";

export const HeroContainer = styled.div`
    
`

const Home = () => {
    return ( 
        <StyledSection>
            <Navbar />
            <HeroContainer>
                <div className="HeroContainer__ImgHolder">
                    <img src={HeroSijaImg} alt="Bruh" />
                </div>
                <div className="HeroContainer__TextHolder">
                    <div className="TextHolder">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam esse accusantium beatae cupiditate officiis consequatur ipsam dolorem non earum porro temporibus sapiente deleniti inventore quis possimus et, incidunt eum fugit.
                        </p>
                    </div>
                    <div className="TextHolder_Line"></div>
                </div>
            </HeroContainer>
        </StyledSection>
     );
}
 
export default Home;