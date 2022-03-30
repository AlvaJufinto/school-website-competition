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

    
    .GallerySection__photos {
        background-color: blue;
        width: 100%;
        height: 600px;
        display: flex;
        flex-wrap: nowrap;
        gap: 50px;
        overflow-x: auto;
        
        ::-webkit-scrollbar {
            display: none;
        }
        
        .GalleryImg {
            -moz-user-select: none;
            -webkit-user-select: none;
            pointer-events: none;
            user-select: none;
            height: 500px;
        }
    }
`

const Gallery = () => {
    const { width, height } = useWindowDimensions();
    const horizontalElement = useRef(null);
    const { onMouseDown } = useDraggableScroll(horizontalElement);

    const images = [
        {
            image: "https://lh3.googleusercontent.com/fife/AAWUweV8zsRF8CYZqynqPiGwn233Sf4bLbU1kdzGgxrjDB0eWVeTF5Zghec3bw4beS9nwtbSCVxzvDabf1kcjEM8nXWuEiB3M6eVAsqTKVW-VjUGOEb34wglFz-t5EZ4wn3-L11hPzo9DtIBjK6m6gEq0FtCD2Ix3Lao8tDB2ONqN734IeK78139HhQMGrIYeyE_hkggcPdVtLquVL8wVqAdFMcokXJWLrOYWsRYRI5LvyJkemoaP4yr4hlgIdsC1yIHSKskJKrbEAYm5vWEDYL7qtRXynY6Az7cpWYxdIRWlqCSEnk4WNGNpDcXo7VDSrdVBi-PpIiFOIdl4Z-gkMPjy5rq2hrM-egn09MX6QoAKeslgB8HuZS9OVV0v8R8-OgY-1uaI2kHGOAUE-TNaU-JwEW9oPpmVnQXRzCZoDEXH3czEKDJ_uBKojliGBKuheX8nAAbdn_Ghm_7JWYKHvCKuKWZ_WD4rytqEyhHxxdzcvYR7oAoY_hB55L9RJqGYRY_LyI1Dt7Q_RFfdmFR19DMG7ddStbyFP1nBMt9TKpPYcMGF64J1HxtxbH84kwI4MKszBzKkCbSVyZPLHRYSOsJa8PWX5d0GAcB-7XHZbEDCuEIjBzObPW-iSCU9e-gP6JSbVWFjYWa65XG4SwdY8Nm9poNSk3zO0DtWD9Gil39OglHs4AcRm_R86a9lS4_5OPhSdWRLDr6qDSeiTY_uytI4kBX04_aMmHcpiWRGgjxQtmhzPysfe498n4_5_vDMPYi4up6ilj6VVxJjIewAGwfH_b8xEdmtZxvS42-BkQLGVNby4qKhGdDA0riSjhq-3-gZWRjtLfWNhXm9A4wrujCTmdENuVPC5XhBVnkOSvApQqK05Pd7sM40InSYIo2W5c=w1059-h969",
            text: "This is cool, right?"
        },
        {
            image: 'https://lh3.googleusercontent.com/fife/AAWUweWWL7H733Vpl6nLC_IjmPYGCjvzX_w_clTveCHCHck6ib7guuOjBGVi_IvqTgUadvHOXv_a1rUGFiOuPbzyamVYSMmaRunPXiso8XTwVCyEuJtjDGfkTiHT9IzrWQwte7sX-_J-wtlmWUnnG2OPibjjrk2o-qjzCxAxZ9cBJ45PcMtxcEvl9CiVAMoFRz7OICJJJ75Z33bnwc7dboO6UAqyOM1-9d90w_wO2OX7huLxb0WvYrqIYsQgb0Y3AM_QDcy8IQ2liE7rCwtRcN81YoosIWTb_UmVfkvEYdC5SmgVbddbR2zd3jOmyXBaS4yq07A4XU8u7bWPVQ_z7mIBCZNfqg74QRl417ZkXnwb0VG_4xuJ7YBK21Zj7-44dPlqOXg-1aKIIhxANCoFelOwgxq0s5zjYIRk6gQFzN6Y_3nNMCdmsb__yHfyHuyrt-Akrs6pNBQ1MIHjTV5NIlHN9ny7Yx52sL-iiYM24vA-eB_RDU-2xubfWnig3sPZVMN1BJEzAKv9m2cD70h5XNJSi_lEWBoMU1AuU3Ma7fRuf-xONwj2emlRArRP7zC6oPHkcpGMoybj1aayvbagaCvBpEmhWW0qVgQRLfKf5FS5_4T858Cimg_RiNHhuu0JS-40jIpZH9NbzrpC_TitDr2fuhrd-rUBvz66cYmVNkK6Oe3xnCH-qI-x3R1pP-1266MA1d_Kj08IAiPQTab-DiZDkPh6JdcK7RKPB9zHOZq6euVKZYphEXMQilK5TYz5OTn8K3U4Ibx4SSMSZWWKkOE5pPluCFTdi7vl7t_Ff_QQ_2b1tuKRp-CQJpVXHtLe65_OJ289y_kxmb77h82AUJm4aD8hGbWCBGDohQRZOp43_gUIkAUADGflPjq2mnKnyfY=w958-h943',
            text: "Yes, we're amazing."
        },
        {
            image: 'https://lh3.googleusercontent.com/fife/AAWUweWF7mEFvttbDAQNKMQuHdlbed69nH4lDZvsmIEtN8mzE8x-sP8SJ2ldWR_gltZIB8a0Q4gjo1qSswyEUcupAXchYsijIOJiD44eZsGuaFPawkr58zEet5lF8b0qx_b6v75ZlBaxytoFxTJIuek7ndaEnaeqPrUB3W_ipIVCU47vPwACVr6IYqPO6sY6gTYeq695_v9cuJseobWNz_MTCphtnf3_-QZjxJQQzUz3HMr3F8aNWm0voi0-zXYAhc0tjlGy2Is9dDkWfQV-U5BgoTa1KZacmb0AXM0IPQw71GxxgQdfu81XDvVZKB_8BFtWY7DUpluxk_gFR9xpsiRkjd7kkqmgG67p3VBB6wxV9LTTArRxCEHqxEDbkeSqsFXplVz1d259LOMODQK_vI-gEW65liieeoNOPgKhGdFSWaMZ36lJv4KeDHvVLzZrc-HdBoV6GA11b5mF-t1xlhJ1J0bs-Beh3FVXXezV3YghDAdmWls2wC8UDBOOCBu_9G6IRl1IW-_ovO7dgRPCoImbdajBGgkiL8hfh2-ptnRfcVdQ1RCYf30WCkRX7t6TwWx2B-QjGwfSgQHcH4O86fRuTcz94ogju37CFaaGQm1dFb-fcPLxiQKmoRGCUNL7Es9wfNzb5aLX9uD79_JuVe5GQtmOSY89nkQ9X-KpoAryCY5pJtmG_h5Vq4KOKx4zaAR9NF4aU14qUlG6q2DUoDqMiE3XaO-RSxYE0MWlvrsYk24ZD6UuaxBbLw3cgxOMMz9RUfYr7LffsxpjFVvIGxVTdHQjYkAc9VM2FJTKpAsTWW1MR6-VacDzgxvGcN8jWLRLcHcuo3yTbKPdhpa3dH24_naiFk0c4hz1wFMrx19dQB0q1hmYRMPKCNdqq6tuOfw=w707-h959',
            text: "No one can stop us!"
        },
        {
            image: 'https://lh3.googleusercontent.com/fife/AAWUweVmtl1fCkDqJb-QN_HRAeeIOrw-W7s_ZNMHqy_e28jao8QkgfOi3JK6HQsjkv79_DVen4KqDwshbACqHTtd4y8W5KDR592pqimBelywKKpaTCW9ruVvMvRde3HqCu7yk6xvqUkycpRQdZiwOrH8-6PXZZKQlReLOqj1FASs70zIwaOsf2l5-S6Jx2LgWqqH-Y3ncnn6J9DZK7EpYEmOlE1NcqvwArepwgq32KipERdehHUB_d6mr2fFwpWdQ1bVqqNg0QfhrnskVcoGNgwtDdE8LwNMJTXpcXbSrMsnKkON1yyrhXqCK8W_nqcmVXPBvdQ8vd6WAfYXwjjYxAZj6A4vUtnVUoGoVjP41Xa7zShdkRNFHneibjY94Ju0bDoz6kvbI_9nVWmEDUvg5t7yz_XUTALdKhWM3_YSXsQEH5fEeVmwI_pLxB6iruUMVA8-RCZXs6FcArwzVjsEQUkI4QOkww-bVp9dBzT_G7Vg0MwwvMXDhBHMDVfWFiw8Bb5sJJIX8MWeqt7MqdpNQlGFxEGd11alM6YRTISONa-Cb5laRY7Yeo-vYtyAQVhkL5xVzLfIiLI2eqeYsZXgro42TiFfrAS5Gb2CO9mPeejVBqjuCIwP6yNHKoTWOmqLnV3zyumwhnEwDRvYOzVTHPnR_JTQkKGsV_MmJJ4YbO4fD0MpVqASWASfzHp5i_1z80LfRohATJbkc7pr3uBaoG9GSlrO2Li2i6Xi4k-rU67ZH5mVOG5YyYU_AdwJz5GB8pN4Drmb3Ib9fe_sOTZwawsWE8TIWf4T-rVGi9MsM4g8X-6bequCdlpRnNBpxXcX_81uZZs1RvFJh6ZyPi_fObB95RiGvvS9fciyVxHFPwFL3PmTsaMBMPOfqsNd5HG_AVg=w866-h943',
            text: "Aren't they cool?"
        }
    ]

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