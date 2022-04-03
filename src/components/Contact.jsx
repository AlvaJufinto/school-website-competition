import { useState, useEffect } from 'react';
import styled from "styled-components";
import { StyledLink } from "./styledComponents";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "./../globals";

const ContactContainer = styled.div`
    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.5rem;
    }

    input, select {
        border: none;
        border-bottom: 1px solid #BBB;
        font-size: 1.5rem;
        background-color: transparent;
        outline: none;
        font-family: ${GlobalFonts.primary};
        width: 100%;
    }

    select {
        appearance: none;

        &::-ms-expand {
            display: none;
        }
    }
`

const Contact = () => {
    // const [set, category]

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }   

    return (
        <>
            <ContactContainer>
                <h1>Hubungi kami</h1>
                <p>Jika merasa ada yang ingin Anda sampaikan janganlah ragu, kami akan menghubungi Anda kembali  secepat mungkin.</p>
                
                <div className="ContactContainer__wrap">
                    <form onSubmit={e => onSubmitHandler(e)}>
                        <input type="text" placeholder='Nama Lengkap'/>
                        <input type="text" placeholder='Email' />
                        <select id="standard-select"  >
                            <option value={false}>Kategori</option>
                            <option value="orangtuaMurid">Orangtua Murid</option>
                            <option value="murid">Siswa-siswi</option>
                            <option value="perusahaan">Perusahaan</option>
                            <option value="other">Lain-lain</option>
                        </select>
                        <input type="text" placeholder='Pesan' />
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