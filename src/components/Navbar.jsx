import { useState } from "react";
import styled from "styled-components";
import { StyledLink } from "./styledComponents";
import { GlobalColors, GlobalMeasurements } from "./../globals";

export const Nav = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    padding: 20px 50px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Nav__Title {
        font-size: 2rem;
    }

    .Nav__Burger {
        height:  50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        width: 50px;
        
        .BurgerTop, .BurgerMid, .BurgerBottom {
            transition: 0.5s;
            background: white;
            height: 2px;
        }

        .BurgerTop{
            width: 100%;
            
            &.active {
                transform: rotate(-30deg) translateY(13px);
            }
        }
    
        .BurgerMid {
            width: 60%;
            
            &.active {
                width: 0%;
            }
        }
        
        .BurgerBottom {
            width: 30%;

            &.active {
                width: 100%;
                transform: rotate(30deg) translateY(-20px);
            }
        }    
    }
`

export const NavContainer = styled.div`
    /* clip-path: ; */
    transition: 1s;
    clip-path: ${props => props.isOpen ? "ellipse(200vh 3000vw at 100% -15%)" : 'ellipse(130px 140px at 100% -20%)'};
    height: 100vh;
    width: 100vw;
    padding: 100px 50px;
    position: fixed;
    top: 0;
    right: 0;
    background: ${GlobalColors.grey};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .NavContainer__Left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;
        font-weight: bold;
        line-height: 1.2;
        font-size: 8rem;
        color: transparent;
        -webkit-text-stroke: 2px white;
    }

    .NavContainer__Links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        font-size: 7rem;
        width: 50%;
        height: 100%;
    }

    @media (max-width: 1024px) {
        .NavContainer__Left {
            display: none;
        }

        .NavContainer__Links {
            width: 100%;
            align-items: center;
        }
    }
`

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Nav>
                <div className="Nav__Title">
                    <h3>SIJA'26</h3>
                </div>
                <div className="Nav__Burger" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} >
                    <div className={`BurgerTop ${isOpen ? 'active' : ""}`}></div>
                    <div className={`BurgerMid ${isOpen ? 'active' : ""}`} isOpen={isOpen}></div>
                    <div className={`BurgerBottom ${isOpen ? 'active' : ""}`} isOpen={isOpen}></div>
                </div>
            </Nav>
            <NavContainer isOpen={isOpen}>
                <div className="NavContainer__Left">
                    <p>SMKN</p>
                    <p>26</p>
                    <p>JAKARTA</p>
                </div>
                <div className="NavContainer__Links" >
                    <StyledLink to="/" >Home</StyledLink>
                    <StyledLink to="/sija" >SIJA</StyledLink>
                    <StyledLink to="/news" >News</StyledLink>
                </div>
            </NavContainer>
        </> 
     );
}
 
export default Navbar;