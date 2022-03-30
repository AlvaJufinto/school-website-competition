import { useRef } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import useDraggableScroll from 'use-draggable-scroll';
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";

export const QuoteSection = styled.div`
    padding: 150px 0 0 0;
    font-family: ${GlobalFonts.primary};

    .QuoteSection__Big {
        padding: 0 20%;

        p {
            font-size: 1.5rem;
            color: ${GlobalColors.blue};
        }

        h1 {
            font-size: 5rem;
            max-width: 600px;
            width: 100%;
        }
    }

    .QuoteSection__Description {
        font-family: ${GlobalFonts.secondary};
        font-weight: 200;
        display: flex;
        gap: 50px;
        margin: 50px 0 0 0;
        
        .left {
            text-align: right;

            p:nth-child(1) {
                font-weight: bold;
                color: ${GlobalColors.blue};
            }
        }

        .right {
            margin: 150px 0 0 0;
        }

        p {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1024px) {
        .QuoteSection__Big {
            padding: 0;

            h1 {
                font-size: 3rem;
            }
        }

        .QuoteSection__Description {
            gap: 50px;
            flex-direction: column;
            
            .left {
                text-align: left;
            }

            .right {
                margin: 0;
            }
        }
    }

`

export const GallerySection = styled.div`
    color: white;
    margin: 150px 0px;

    h2 {
        text-align: center;
        font-size: 3rem;
        font-family: ${GlobalFonts.primary};
        margin: 0 0 50px 0;
    }

    .GalleryImg {
        -moz-user-select: none;
        -webkit-user-select: none;
        pointer-events: none;
user-select: none;
    }

    .GallerySection__photos {
        background-color: blue;
        width: 100%;
        height: 500px;
        display: flex;
        flex-wrap: nowrap;
        gap: 50px;
        overflow-x: auto;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

const Gallery = () => {
    const { width, height } = useWindowDimensions();
    const horizontalElement = useRef(null);
    const { onMouseDown } = useDraggableScroll(horizontalElement);


    return ( 
        <>
            <StyledSection>
                <Navbar />
                <QuoteSection>
                    <div className="QuoteSection__Big">
                        <p>Gallery</p>
                        <h1>
                            Masih ragu untuk menjadi bagian dari kami? Fakta akan berbicara. 
                        </h1>
                    </div>
                    <div className="QuoteSection__Description">
                        <div className="left">
                            <p>Sebelum itu...</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque unde similique, quas expedita ipsa doloribus ipsum illo omnis. Quos, dicta iste? Provident impedit fugiat similique quaerat eum ullam eligendi?</p>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque unde similique, quas expedita ipsa doloribus ipsum illo omnis. Quos, dicta iste? Provident impedit fugiat similique quaerat eum ullam eligendi?</p>
                        </div>
                    </div>
                </QuoteSection>
            </StyledSection>
            <GallerySection>
                <h2>Gallery Kemenangan <span className="underline">SIJA'26</span> </h2>
                <div className="GallerySection__photos" ref={horizontalElement} onMouseDown={onMouseDown}>
                    <div>
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweV8zsRF8CYZqynqPiGwn233Sf4bLbU1kdzGgxrjDB0eWVeTF5Zghec3bw4beS9nwtbSCVxzvDabf1kcjEM8nXWuEiB3M6eVAsqTKVW-VjUGOEb34wglFz-t5EZ4wn3-L11hPzo9DtIBjK6m6gEq0FtCD2Ix3Lao8tDB2ONqN734IeK78139HhQMGrIYeyE_hkggcPdVtLquVL8wVqAdFMcokXJWLrOYWsRYRI5LvyJkemoaP4yr4hlgIdsC1yIHSKskJKrbEAYm5vWEDYL7qtRXynY6Az7cpWYxdIRWlqCSEnk4WNGNpDcXo7VDSrdVBi-PpIiFOIdl4Z-gkMPjy5rq2hrM-egn09MX6QoAKeslgB8HuZS9OVV0v8R8-OgY-1uaI2kHGOAUE-TNaU-JwEW9oPpmVnQXRzCZoDEXH3czEKDJ_uBKojliGBKuheX8nAAbdn_Ghm_7JWYKHvCKuKWZ_WD4rytqEyhHxxdzcvYR7oAoY_hB55L9RJqGYRY_LyI1Dt7Q_RFfdmFR19DMG7ddStbyFP1nBMt9TKpPYcMGF64J1HxtxbH84kwI4MKszBzKkCbSVyZPLHRYSOsJa8PWX5d0GAcB-7XHZbEDCuEIjBzObPW-iSCU9e-gP6JSbVWFjYWa65XG4SwdY8Nm9poNSk3zO0DtWD9Gil39OglHs4AcRm_R86a9lS4_5OPhSdWRLDr6qDSeiTY_uytI4kBX04_aMmHcpiWRGgjxQtmhzPysfe498n4_5_vDMPYi4up6ilj6VVxJjIewAGwfH_b8xEdmtZxvS42-BkQLGVNby4qKhGdDA0riSjhq-3-gZWRjtLfWNhXm9A4wrujCTmdENuVPC5XhBVnkOSvApQqK05Pd7sM40InSYIo2W5c=w1059-h969" alt="" className="GalleryImg" />
                        <p>01 - This is cool right?</p>
                    </div>
                    <div>
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweV8zsRF8CYZqynqPiGwn233Sf4bLbU1kdzGgxrjDB0eWVeTF5Zghec3bw4beS9nwtbSCVxzvDabf1kcjEM8nXWuEiB3M6eVAsqTKVW-VjUGOEb34wglFz-t5EZ4wn3-L11hPzo9DtIBjK6m6gEq0FtCD2Ix3Lao8tDB2ONqN734IeK78139HhQMGrIYeyE_hkggcPdVtLquVL8wVqAdFMcokXJWLrOYWsRYRI5LvyJkemoaP4yr4hlgIdsC1yIHSKskJKrbEAYm5vWEDYL7qtRXynY6Az7cpWYxdIRWlqCSEnk4WNGNpDcXo7VDSrdVBi-PpIiFOIdl4Z-gkMPjy5rq2hrM-egn09MX6QoAKeslgB8HuZS9OVV0v8R8-OgY-1uaI2kHGOAUE-TNaU-JwEW9oPpmVnQXRzCZoDEXH3czEKDJ_uBKojliGBKuheX8nAAbdn_Ghm_7JWYKHvCKuKWZ_WD4rytqEyhHxxdzcvYR7oAoY_hB55L9RJqGYRY_LyI1Dt7Q_RFfdmFR19DMG7ddStbyFP1nBMt9TKpPYcMGF64J1HxtxbH84kwI4MKszBzKkCbSVyZPLHRYSOsJa8PWX5d0GAcB-7XHZbEDCuEIjBzObPW-iSCU9e-gP6JSbVWFjYWa65XG4SwdY8Nm9poNSk3zO0DtWD9Gil39OglHs4AcRm_R86a9lS4_5OPhSdWRLDr6qDSeiTY_uytI4kBX04_aMmHcpiWRGgjxQtmhzPysfe498n4_5_vDMPYi4up6ilj6VVxJjIewAGwfH_b8xEdmtZxvS42-BkQLGVNby4qKhGdDA0riSjhq-3-gZWRjtLfWNhXm9A4wrujCTmdENuVPC5XhBVnkOSvApQqK05Pd7sM40InSYIo2W5c=w1059-h969" alt="" className="GalleryImg" />
                        <p>01 - This is cool right?</p>
                    </div><div>
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweV8zsRF8CYZqynqPiGwn233Sf4bLbU1kdzGgxrjDB0eWVeTF5Zghec3bw4beS9nwtbSCVxzvDabf1kcjEM8nXWuEiB3M6eVAsqTKVW-VjUGOEb34wglFz-t5EZ4wn3-L11hPzo9DtIBjK6m6gEq0FtCD2Ix3Lao8tDB2ONqN734IeK78139HhQMGrIYeyE_hkggcPdVtLquVL8wVqAdFMcokXJWLrOYWsRYRI5LvyJkemoaP4yr4hlgIdsC1yIHSKskJKrbEAYm5vWEDYL7qtRXynY6Az7cpWYxdIRWlqCSEnk4WNGNpDcXo7VDSrdVBi-PpIiFOIdl4Z-gkMPjy5rq2hrM-egn09MX6QoAKeslgB8HuZS9OVV0v8R8-OgY-1uaI2kHGOAUE-TNaU-JwEW9oPpmVnQXRzCZoDEXH3czEKDJ_uBKojliGBKuheX8nAAbdn_Ghm_7JWYKHvCKuKWZ_WD4rytqEyhHxxdzcvYR7oAoY_hB55L9RJqGYRY_LyI1Dt7Q_RFfdmFR19DMG7ddStbyFP1nBMt9TKpPYcMGF64J1HxtxbH84kwI4MKszBzKkCbSVyZPLHRYSOsJa8PWX5d0GAcB-7XHZbEDCuEIjBzObPW-iSCU9e-gP6JSbVWFjYWa65XG4SwdY8Nm9poNSk3zO0DtWD9Gil39OglHs4AcRm_R86a9lS4_5OPhSdWRLDr6qDSeiTY_uytI4kBX04_aMmHcpiWRGgjxQtmhzPysfe498n4_5_vDMPYi4up6ilj6VVxJjIewAGwfH_b8xEdmtZxvS42-BkQLGVNby4qKhGdDA0riSjhq-3-gZWRjtLfWNhXm9A4wrujCTmdENuVPC5XhBVnkOSvApQqK05Pd7sM40InSYIo2W5c=w1059-h969" alt="" className="GalleryImg" />
                        <p>01 - This is cool right?</p>
                    </div><div>
                        <img src="https://lh3.googleusercontent.com/fife/AAWUweV8zsRF8CYZqynqPiGwn233Sf4bLbU1kdzGgxrjDB0eWVeTF5Zghec3bw4beS9nwtbSCVxzvDabf1kcjEM8nXWuEiB3M6eVAsqTKVW-VjUGOEb34wglFz-t5EZ4wn3-L11hPzo9DtIBjK6m6gEq0FtCD2Ix3Lao8tDB2ONqN734IeK78139HhQMGrIYeyE_hkggcPdVtLquVL8wVqAdFMcokXJWLrOYWsRYRI5LvyJkemoaP4yr4hlgIdsC1yIHSKskJKrbEAYm5vWEDYL7qtRXynY6Az7cpWYxdIRWlqCSEnk4WNGNpDcXo7VDSrdVBi-PpIiFOIdl4Z-gkMPjy5rq2hrM-egn09MX6QoAKeslgB8HuZS9OVV0v8R8-OgY-1uaI2kHGOAUE-TNaU-JwEW9oPpmVnQXRzCZoDEXH3czEKDJ_uBKojliGBKuheX8nAAbdn_Ghm_7JWYKHvCKuKWZ_WD4rytqEyhHxxdzcvYR7oAoY_hB55L9RJqGYRY_LyI1Dt7Q_RFfdmFR19DMG7ddStbyFP1nBMt9TKpPYcMGF64J1HxtxbH84kwI4MKszBzKkCbSVyZPLHRYSOsJa8PWX5d0GAcB-7XHZbEDCuEIjBzObPW-iSCU9e-gP6JSbVWFjYWa65XG4SwdY8Nm9poNSk3zO0DtWD9Gil39OglHs4AcRm_R86a9lS4_5OPhSdWRLDr6qDSeiTY_uytI4kBX04_aMmHcpiWRGgjxQtmhzPysfe498n4_5_vDMPYi4up6ilj6VVxJjIewAGwfH_b8xEdmtZxvS42-BkQLGVNby4qKhGdDA0riSjhq-3-gZWRjtLfWNhXm9A4wrujCTmdENuVPC5XhBVnkOSvApQqK05Pd7sM40InSYIo2W5c=w1059-h969" alt="" className="GalleryImg" />
                        <p>01 - This is cool right?</p>
                    </div>
                </div>
            </GallerySection>
            <StyledSection>
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Gallery;