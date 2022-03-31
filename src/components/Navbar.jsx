import { useState, useEffect } from 'react';
import styled from "styled-components";
import { StyledLink } from "./styledComponents";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "./../globals";

export const NavWrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    background: ${props => props.isOpen ? GlobalColors.black : 'black'};
`

export const Nav = styled.div`
    transition:  0.7s ease-in;
    padding: 20px 0px;
    margin: auto;
    width: 90%;
    max-width: ${GlobalMeasurements.containerWidth}px;
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
    transition: 2s;
    clip-path: ${props => props.isOpen ? "ellipse(200vh 3000vw at 100% -15%)" : 'ellipse(130px 140px at 100% -20%)'};
    height: 100vh;
    width: 100vw;
    /* padding: 0 5%; */
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    background: ${GlobalColors.black};
    /* background-color: black; */
    
    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin: auto;
        width: 90%;
        max-width: ${GlobalMeasurements.containerWidth}px;
        font-family: ${GlobalFonts.primary};
    }

    .NavContainer__Left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        height: 100%;
        font-weight: bold;
        line-height: 1.2;
        font-size: 7rem;
        color: transparent;
        -webkit-text-stroke: 2px white;
        letter-spacing: 25px;
    }

    .NavContainer__Links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        font-size: 5rem;
        line-height: 1,5;
        letter-spacing: 10px;
        width: 50%;
        height: 100%;
        
        ${StyledLink}:hover {
            transition: all 0.5s ease;
            text-decoration: underline;
            text-decoration-style: "solid";
            text-decoration-color: ${GlobalColors.blue};
            text-decoration-thickness: 10px;
        }
    }

    @media (max-width: 1200px) {
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
    let listener = null
    const [scrollState, setScrollState] = useState("top")
    
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
          if (scrollState !== "bottom") {
            setScrollState("bottom")
            console.log("Bottom")
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top")
            console.log("Top")
          }
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])


    return (
        <>
            <NavWrapper>
                <Nav isOpen={isOpen} isTop={scrollState === "top" ? true : false } >
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
                    <section>
                        <div className="NavContainer__Left">
                            <p>SMKN</p>
                            <p>26</p>
                            <p>JAKARTA</p>
                        </div>
                        <div className="NavContainer__Links" >
                            <StyledLink to="/" >Home</StyledLink>
                            <StyledLink to="/gallery" >Gallery</StyledLink>
                            <StyledLink to="/jobs" >Jobs</StyledLink>
                        </div>
                    </section>
                </NavContainer>
            </NavWrapper> 
        </>
        
     );
}
 
export default Navbar;