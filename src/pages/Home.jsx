import { useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
// import { KeyboardCommandKeyIcon, Person } from '@mui/icons-material';
import AOS from "aos";  
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";

export const HeroContainer = styled.div`
    padding: 150px 0 0 0;
    position: relative;

    h2 {
        font-size: 2rem;
        font-family: ${GlobalFonts.secondary};
        font-weight: 200;
    }

    .HeroContainer__ImgHolder {
        margin: 20px 0 0 0;
        width: 900px;
        max-width: 100%;
        overflow: hidden;
        
        h1 {
            font-size: 5rem;
        }
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
        /* background: ${GlobalColors.grey}; */
        width: 500px;
        max-width: 100%;
        padding: 30px;
        font-size: 1.5rem;
        border-bottom: 5px solid ${GlobalColors.blue};
        font-family: ${GlobalFonts.secondary};
        /* font-weight: 200; */
    }

    @media (max-width: 1024px) {
        .HeroContainer__TextHolder {
            position: relative;
            width: 100%;
        }
    }
`

export const AboutContainer = styled.div`
    margin: 0px 0;
    position: relative;

    h2 {
        font-size: 3rem;
    }
    
    .AboutContainer__TextHolder {
        margin: 40px 0 0 0;
        /* background: ${GlobalColors.grey}; */
        /* width: 50px; */
        max-width: 100%;
        padding: 30px;
        font-size: 1.5rem;
        border-bottom: 5px solid ${GlobalColors.blue};
        font-family: ${GlobalFonts.secondary};
        /* font-weight: 200; */

    }

    .statistic {
        margin: 50px auto;
        text-align: center;
    }

    .AboutContainer__CounterHolder {
        width: 60%;
        margin: 100px auto;
        display: flex;
        color: black;
        justify-content: space-between;

        .Counter {
            text-align: center; 

            i {
                font-size: 3rem;
            }

            h2 {
                margin: 20px 0px;
                font-size: 3rem;
            }

            p {
                font-size: 2rem;
                font-family: ${GlobalFonts.secondary};
                margin: 0 0 20px 0;
            }
        }
    }

    @media (max-width: 1024px) {
        margin: 250px 0px;

        .AboutContainer__CounterHolder {
            flex-direction: column;
            gap: 50px;
        }
    }
`   

export const ChampsContainer = styled.div`
    margin: 300px 0 200px 0;
    
    h2 {
        font-size: 3rem;
    }

    .ChampsContainer__sections {
        margin: 50px 0;
        display: flex;
        justify-content: space-between;
        /* background-color: blue; */

        .ChampsContainer__abstract {
            background-color: ${GlobalColors.grey};
            width: 1.5%;
            font-size: 2rem;
            line-height: 70px;
            letter-spacing: 10px;
            height: 100%;
            opacity: 0.3;
            text-align: left;
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }

        .subjects {
            display: flex;
            flex-direction: column;
            gap: 50px;
            
            .subject {
                background-color: white;
                max-width: 100%;
                min-height: 300px;
                max-height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                font-family: ${GlobalFonts.secondary};
                box-shadow: 0px 1px 45px -1px rgba(153,153,153,0.2);

                .CircleContainer {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    /* background-color: #030203; */
                    height: 100%;

                    .Circle {
                        height: 10px;
                        width: 10px;
                        border-radius: 50%;
                        border: 1px solid ${GlobalColors.blue};
                    }
                }

                img {
                    /* max-width: 500px; */
                    width: 500px;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    filter: grayscale(20%);
                    border-right: 5px solid ${GlobalColors.blue};
                }
                
                .description {
                    padding: 20px;

                    h3 {
                        max-width: 400px;   
                        font-size: 1.5rem;
                        margin: 0 0 20px 0;
                        font-weight: 6800;
                        font-family: ${GlobalFonts.primary};
                    }

                    p {
                        font-size: 1.2rem;
                        margin: 0 0 10px 0;
                    }

                    i {
                        margin: 0 20px 0 0;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
    
    @media (max-width: 1400px) {
        .ChampsContainer__abstract{ 
            display: none;
        }
        
    }

    @media (max-width: 1024px) {
        h2 {
            text-align: center;
        }

        .ChampsContainer__sections {
            .subjects {
                align-items: center;
                flex-direction: column;
                width: 100%;
                
                .subject {
                    flex-direction: column;
                    gap: 0px;   
                    height: 500px;
                    min-height: 550px;
                    margin: auto;
                    
                    img {
                        width: 100%;
                        max-height: 300px;
                    }
                    
                    .description {
                        padding: 20px;
                    
                        h3 {
                            font-size: 1.25rem;
                        }
                    }
                    
                    .CircleContainer {
                        display: none;    
                    }
                }
            }
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
    const champs = [
        {
            img: 'https://drive.google.com/file/d/1EJyCEMpX03rgiE33nV9EnPrNSpn4M_Lr/view',
            name: '4th SOUTHEAST ASIA CREATIVE CAMP : AUGMENTED REALITY ONLINE WOKSHOP',
            maintenance: 'SEAMEO',
            champ: '2',
            year: '2018',
        },
        {
            img: 'https://drive.google.com/file/d/1xekU9lws3FhIQ9clthc56fzJ4XZjiZIR/view',
            name: 'LKS MATA LOMBA IT SOFTWARE SOLUTION FOR BUSINESS',
            maintenance: 'KEMENDIKBUD',
            champ: '2',
            year: '2019',
        },
        {
            img: 'https://drive.google.com/file/d/1Ap9A380MRPtLvP7nUUz75ZMqAn_jz4HA/view',
            name: 'KAMP KREATIF SMK INDONESIA BIDANG PENGEMBANGAN GAME PENDIDIKAN - (JAGAD)',
            maintenance: 'KEMENDIKBUD   ',
            champ: '3',
            year: '2019',
        },
    ]


    useEffect(() => {
        // window.scrollTo(0, 0)
        AOS.init({ once: true });
    }, []);
    
      return ( 
        <>
            <StyledSection>
                <Navbar />
                <HeroContainer>
                    <Parallax translateX={width > 1024 ? [10, 0] : [0,0]}>   
                        <h2>Selamat Datang di SIJA <span style={{ color: GlobalColors.blue, fontWeight: 400 }}>SMKN 26 Jakarta</span></h2>
                    </Parallax>
                    {/* <p className="overlayedText" ></p> */}
                    <div className="HeroContainer__ImgHolder">
                        {/* <img src={HeroSijaImg} alt="Bruh" /> */}
                        <h1>SIJA</h1>
                        <h1><span className="underline">Terbaik</span></h1>
                        <h1>Se-Jakarta</h1>
                    </div>
                    <Parallax translateY={width > 1024 ? [-50, -200] : [0, 0]} translateX={width > 1024 ? [62, 62] : [0, 0]} >
                        <div className="HeroContainer__TextHolder" data-aos="fade-left" data-aos-duration="1000">
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
                    <Parallax translateX={width > 1024 ? [0, 10] : [0,0]}>   
                        <h2>Siapakah <span className="underline">SIJA'26</span>?</h2>
                    </Parallax>
                    <div className="AboutContainer__TextHolder" data-aos="fade-up" data-aos-duration="1000">
                        <div className="TextHolder">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam esse accusantium beatae cupiditate officiis consequatur ipsam dolorem non earum porro temporibus.
                            </p>
                        </div>
                        <div className="TextHolder_Line"></div>
                    </div>

                    <Parallax translateX={width > 1024 ? [5, -20] : [0, 0]}>
                        <h2 className="statistic" >Statistik  <span className="underline">SIJA’26</span></h2>
                    </Parallax>
                    <div className="AboutContainer__CounterHolder">
                        <div className="Counter">
                            <i class="fa-solid fa-chalkboard-user"></i>                            
                            <h2>3</h2>
                            <p style={{ color: GlobalColors.blue }}>Pendidik</p>
                        </div>
                        <div className="Counter">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h2>200</h2>
                            <p style={{ color: GlobalColors.blue }}>Peserta Didik</p>
                        </div>
                        <div className="Counter">
                            <i class="fa-solid fa-book-open"></i>
                            <h2>9</h2>
                            <p style={{ color: GlobalColors.blue }}>Mata Pelajaran</p>
                        </div>
                    </div>
                </AboutContainer>
                <ChampsContainer>
                    <Parallax translateX={width > 1024 ? [0, 10] : [0, 0]}>
                        <h2>Lomba yang dimenangkan <span className="underline">SIJA’26</span></h2>
                    </Parallax>   

                    <div className="ChampsContainer__sections">
                        <div className="subjects">
                            {champs?.map((champ, i) => (    
                                <div className="subject" data-aos="fade-right" data-aos-duration="1000">
                                    <img src={`https://drive.google.com/uc?export=download&id=${champ?.img?.split("/d/")[1]?.split("/")[0]}`} alt="Champ Image" />
                                    <div className="description">
                                        <h3>{champ?.name}</h3>
                                        <p><i class="fa-regular fa-flag"></i>{champ?.maintenance}</p>
                                        <p><i class="fa-solid fa-award"></i>{champ?.champ}</p>
                                        <p><i class="fa-regular fa-calendar"></i>Tahun {champ?.year}</p>
                                    </div>
                                    <div className="CircleContainer">
                                        <div className="Circle"></div>
                                        <div className="Circle"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ChampsContainer__abstract">
                            champions, grind, victory, blood, sweat, tears, pain, devotion, battle, suffer, process, believer, revolution 
                        </div>
                    </div>
                </ChampsContainer>
                <Contact /> 
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Home;