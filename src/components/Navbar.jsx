import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "./../globals";

import Logo26 from "./../assets/img/26-logo.png";

export const NavWrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    background: white;
`

export const Nav = styled.div`
    padding: 5px 0px;
    margin: auto;
    width: 90%;
    max-width: ${GlobalMeasurements.containerWidth}px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Nav__Title {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 1s;
        font-size: 1.5rem;
        font-weight: 100;
        color: ${[props => props.isOpen ? 'white' : 'black']};
        font-family: ${GlobalFonts.secondary};
        
        img {
            margin: 0 10px 0 0;
            height: 30px;
        }
    }

    .Nav__Burger {
        height:  50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        width: 50px;
        
        .BurgerTop, .BurgerMid, .BurgerBottom {
            transition: 0.75s;
            background: ${[props => props.isOpen ? 'white' : 'black']};
            height: 2px;
        }

        .BurgerTop{
            width: 100%;
            
            &.active {
                transform: rotate(45deg) translate(5px, 5px);
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
                transform:  rotate(-45deg) translate(7px, -6px);;
            }
        }    
    }
`

export const NavContainer = styled.div`
    transition: all 2s;
    clip-path: ${props => props.isOpen ? "ellipse(200vh 3000vw at 100% -15%)" : 'ellipse(130px 10px at 100% -20%)'};
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
        gap: 50px;
        font-size: 5rem;
        letter-spacing: 10px;
        height: 100%;
        font-family: ${GlobalFonts.secondary};
        
        p {
            cursor: pointer;
            color: white;
            position: relative;
            transition: all 0.5s ease;

            span {
                font-size: 1rem;
                left: -20%;
                top: 0;
                position: absolute;
            }

            &:hover {
                opacity: 0.5;
            }
        }
    }

    @media (max-width: 1200px) {
        .NavContainer__Left {
            display: none;
        }

        .NavContainer__Links {
            width: 100%;
            align-items: center;
            font-size: 3rem;
        }
    }
`

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    let listener = null
    const [scrollState, setScrollState] = useState("top")
    let navigate = useNavigate();

    // useEffect(() => {
    //   listener = document.addEventListener("scroll", e => {
    //     var scrolled = document.scrollingElement.scrollTop
    //     if (scrolled >= 120) {
    //       if (scrollState !== "bottom") {
    //         setScrollState("bottom")
    //         console.log("Bottom")
    //       }
    //     } else {
    //       if (scrollState !== "top") {
    //         setScrollState("top")
    //         console.log("Top")
    //       }
    //     }
    //   })
    //   return () => {
    //     document.removeEventListener("scroll", listener)
    //   }
    // }, [scrollState])


    const navigatePage = (page) => {
        window.scrollTo(0, 0)
        setIsOpen(false);
        
        setTimeout(() => {
            navigate(`/${page}`, { replace: true });
        }, 1800)
    }

    return (
        <>
            <NavWrapper>
                <Nav isOpen={isOpen} isTop={scrollState === "top" ? true : false } >
                    <div className="Nav__Title">
                        <img src={Logo26} alt="" />
                        <h4>SIJA'26</h4>
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
                        <div className="NavContainer__Links">
                            <p onClick={() => navigatePage('')}><span>01</span>Home</p>
                            <p onClick={() => navigatePage('gallery')}><span>02</span>Gallery</p>
                            <p onClick={() => navigatePage('jobs')}><span>03</span>Jobs</p>
                        </div>
                    </section>
                </NavContainer>
            </NavWrapper> 
        </>
        
     );
}
 
export default Navbar;