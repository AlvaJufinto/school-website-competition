import styled from "styled-components";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "../globals";
import { StyledSection, StyledLink } from "../components/styledComponents";

export const FooterContainer = styled.div`
    width: 90%;
    max-width: ${GlobalMeasurements.containerWidth}px;

    .FooterContainer__Top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 150px;
        border-bottom: 5px solid ${GlobalColors.blue};
        
        .FooterContainer__SocialMedia {
            font-family: ${GlobalFonts.secondary};
            font-weight: 300;
            display: flex;
            gap: 20px;
            font-size: 1.5rem;

        }

        p {
            font-size: 1.5rem;
            text-align: right;
        }
    }   

    .FooterContainer__Bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }   
`

const Footer = () => {
    return (
        <FooterContainer>
            <div className="FooterContainer__Top">
                <div className="FooterContainer__SocialMedia">
                    <div className="instagram">Instagram</div>
                    <div className="twitter">Twitter</div>
                    <div className="youtube">Youtube</div>
                </div>
                <div className="FooterContainer__Quote">
                    <p>SIJA</p>
                    <p>Terbaik</p>
                    <p>Se-Jakarta</p>
                </div>
            </div>
            <div className="FooterContainer__Bottom">
                <p>Made by Alva Jufinto with Chaos</p>
                <p>I'd love to hear from you!</p>
            </div>
        </FooterContainer>
     );
}
 
export default Footer;