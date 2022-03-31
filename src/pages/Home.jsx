import { useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';
import AOS from "aos";  
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
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
        font-weight: 200;
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
        font-weight: 200;

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
            width: 2%;
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
                padding: 20px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;

                img {
                    max-width: 100%;
                    width: 500px;
                    object-fit: cover;
                    object-position: center;
                    filter: grayscale(20%);
                    border-right: 5px solid ${GlobalColors.blue};
                }
                
                .description {
                    /* background-color: ${GlobalColors.grey}; */
                    padding: 20px;

                    h3 {
                        font-size: 3rem;
                        margin: 0 0 20px 0;
                    }
    
                    p {
                        font-size: 1.75rem;
                        font-family: ${GlobalFonts.secondary};
                        font-weight: 100;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        h2 {
            text-align: center;
        }

        .ChampsContainer__sections {
            display: block;

            .ChampsContainer__abstract{ 
                display: none;
            }

            .subjects {
                align-items: center;
                width: 100%;

                .subject {
                    display: block;
                    width: 75%;   
                    text-align: center;
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

    useEffect(() => {
        AOS.init();
      }, []);
    
      return ( 
        <>
            <StyledSection>
                <Navbar />
                <HeroContainer>
                    <Parallax translateX={width > 1024 ? [10, 0] : [0,0]}>   
                        <h2>Selamat Datang di SIJA <span className="underline">SMKN 26 Jakarta</span></h2>
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
                            <h2>3</h2>
                            <p>Pendidik</p>
                        </div>
                        <div className="Counter">
                            <h2>200</h2>
                            <p>Peserta Didik</p>
                        </div>
                        <div className="Counter">
                            <h2>9</h2>
                            <p>Mata Pelajaran</p>
                        </div>
                    </div>
                </AboutContainer>
                <ChampsContainer>
                    <Parallax translateX={width > 1024 ? [0, 10] : [0, 0]}>
                        <h2>Lomba yang dimenangkan <span className="underline">SIJA’26</span></h2>
                    </Parallax>   

                    <div className="ChampsContainer__sections">
                        <div className="subjects">
                            <div className="subject" data-aos="fade-right" data-aos-duration="1000" >
                                <img src="https://lh3.googleusercontent.com/fife/AAWUweXZgU_n_j1c2fw8r9ujCNBnJrkZRPiZO8AncKKhxtH30UGGTMf0-ZilQWPUdmfXhSZA1SUi-QR5xMXH2TKsy0pNaToAsxCBt_wlM6IjKOGxErDjFfRctuDU0a0MyvbKJITBN_CLFJ0IGkUyNry-RhxwiuNkaxD793N_ZFkc6JsqYF-rxShGCfyd6sXU2PXcQDKFTUAKYoy31sSlCOBhei9lD6tKjSPe18vaHjuaOByHR2eRV_9SphMnhzY1wzhM3LKwT-WeApDHGp9MjY11GDz9BsRm-NDbnDehOuSkav-kCrwQpu85WKh1nQ9mhpuzk_YGX0VpsQItif_S5TxlChdAoiYOWyQ1SGuDHa8fOpqCN58VEJH6fHxJnEvo0px2OmR5JE7IwwSXRtVjtLtqT7IHXkk4M4HwGTVjkC7Zb82W1LvQns400gLEEAmnBNkyzavVGSw51t6gjihS3ZMZVEGjWRuSkuC7vCpxiMp8-LA0yQv36kI6GeeScBg23d-WCTt2B5H3m7IBNf-1CxXxyBk3TtumDbsm-fEUvo3AVG3kwh6Gwj13CHOxDCqLBIQJ8PqbQgEPsNvV8c10zMS-V1KHrXEkGs1Howd6amCfYWTCYU0JN2g5il8i1mqZakuFsFzehejqecb76X50ZCfWjN7J3QPs5f6_OLGppQaHu0WgETeJIIB9k5aYUtoK-i7SmMAIlSddBDzVryNpqKYbpMNS5XPiNDTEbcxvLDf-3v92Rka-UgLoK0YFMiWwPkoqkZciUX15GNsK2VbOZjN88k2r1CpmWuI2MiLgUR4MlMt-pv2YgyAxTDv11zusd1xW4zqu6UdglooItiuP4QTuBmTWfwufGgM9ksXoG-DVYxLKmKSo1_EahfE467Ag_CM=w1920-h969" alt="" />
                                <div className="description">
                                    <h3>Psatir Handal</h3>
                                    <p>Lomba KKSI</p>
                                    <p>Juara 69</p>
                                    <p>Tahun 2069</p>
                                </div>
                            </div>
                            <div className="subject" data-aos="fade-right" data-aos-duration="1000">
                                <img src="https://lh3.googleusercontent.com/fife/AAWUweV8zsRF8CYZqynqPiGwn233Sf4bLbU1kdzGgxrjDB0eWVeTF5Zghec3bw4beS9nwtbSCVxzvDabf1kcjEM8nXWuEiB3M6eVAsqTKVW-VjUGOEb34wglFz-t5EZ4wn3-L11hPzo9DtIBjK6m6gEq0FtCD2Ix3Lao8tDB2ONqN734IeK78139HhQMGrIYeyE_hkggcPdVtLquVL8wVqAdFMcokXJWLrOYWsRYRI5LvyJkemoaP4yr4hlgIdsC1yIHSKskJKrbEAYm5vWEDYL7qtRXynY6Az7cpWYxdIRWlqCSEnk4WNGNpDcXo7VDSrdVBi-PpIiFOIdl4Z-gkMPjy5rq2hrM-egn09MX6QoAKeslgB8HuZS9OVV0v8R8-OgY-1uaI2kHGOAUE-TNaU-JwEW9oPpmVnQXRzCZoDEXH3czEKDJ_uBKojliGBKuheX8nAAbdn_Ghm_7JWYKHvCKuKWZ_WD4rytqEyhHxxdzcvYR7oAoY_hB55L9RJqGYRY_LyI1Dt7Q_RFfdmFR19DMG7ddStbyFP1nBMt9TKpPYcMGF64J1HxtxbH84kwI4MKszBzKkCbSVyZPLHRYSOsJa8PWX5d0GAcB-7XHZbEDCuEIjBzObPW-iSCU9e-gP6JSbVWFjYWa65XG4SwdY8Nm9poNSk3zO0DtWD9Gil39OglHs4AcRm_R86a9lS4_5OPhSdWRLDr6qDSeiTY_uytI4kBX04_aMmHcpiWRGgjxQtmhzPysfe498n4_5_vDMPYi4up6ilj6VVxJjIewAGwfH_b8xEdmtZxvS42-BkQLGVNby4qKhGdDA0riSjhq-3-gZWRjtLfWNhXm9A4wrujCTmdENuVPC5XhBVnkOSvApQqK05Pd7sM40InSYIo2W5c=w1059-h969" alt="" />
                                <div className="description">
                                    <h3>Psatir Handal</h3>
                                    <p>Lomba KKSI</p>
                                    <p>Juara 69</p>
                                    <p>Tahun 2069</p>
                                </div>
                            </div>
                            <div className="subject" data-aos="fade-right" data-aos-duration="1000">
                                <img src="https://merriam-webster.com/assets/ld/word_of_the_day/images/4671/large.jpg" alt="" />
                                <div className="description">
                                    <h3>Psatir Handal</h3>
                                    <p>Lomba KKSI</p>
                                    <p>Juara 69</p>
                                    <p>Tahun 2069</p>
                                </div>
                            </div>
                        </div>
                        <div className="ChampsContainer__abstract">
                            champions, grind, victory, blood, sweat, tears, pain, devotion, battle, suffer, process, believer, revolution 
                        </div>
                    </div>
                </ChampsContainer>
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Home;