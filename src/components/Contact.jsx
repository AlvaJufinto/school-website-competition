import { useState, useEffect } from 'react';
import styled from "styled-components";
import { StyledLink } from "./styledComponents";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "./../globals";

const ContactContainer = styled.div`
    
`

const Contact = () => {

    return (
        <>
            <ContactContainer>
                <h2>Hubungi kami</h2>
                <p>Jika Anda merasa ada yang ingin disampaikan, sampaikan saja! Kami akan menghubungi Anda kembali secepat mungkin.</p>
                
                <div className="ContactContainer__wrap">
                    <form action="">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <button>Kirim</button>
                    </form>
                    <div className="ContactMediaContainer">
                        <div className="ContactMedia">  
                            <h2>Kunjungi kami</h2>
                            <p>
                                Jl. Balai Pustaka Baru I No.2, RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220
                            </p>
                        </div>
                        <div className="ContactMedia">  
                            <h2>Berbincang dengan kami</h2>
                            <p>+</p>
                            <p>hello@smkn26jkt.com</p>
                        </div>
                        <div className="SocialMedia">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </ContactContainer>
        </>
     );
}
 
export default Contact;