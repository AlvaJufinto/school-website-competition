import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { StyledLink } from "./styledComponents";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "./../globals";

const ContactContainer = styled.div`
    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.5rem;
        font-family: ${GlobalFonts.secondary};
        width: 100%;
        max-width: 800px;
    }

    .ContactContainer__wrap {
        margin: 30px 0 0 0;
        display: flex;
        gap: 50px;

        form{
            flex: 1;

            input, select {
                padding: 10px 0px;
                margin: 10px 0;
                border: none;
                border-bottom: 1px solid #BBB;
                font-size: 1.5rem;
                background-color: transparent;
                outline: none;
                font-family: ${GlobalFonts.primary};
                width: 100%;
            }
        
            select {
                color: ${props => props.categoryValue ? 'black' : '#868686'};
                appearance: none;
        
                &::-ms-expand {
                    color: black;
                    display: none;
                }
            }

            button {
                margin: 20px 0;
                cursor: pointer;
                outline: none;
                border: none;
                padding: 30px;
                font-size: 1.5rem;
                font-family: ${GlobalFonts.primary}; 
                width: 100%;
                background-color: ${GlobalColors.blue};
                color: white;
                border: 1px solid ${GlobalColors.blue};
                transition: all 0.5s ease;

                &:hover {
                    color: ${GlobalColors.blue};
                    background-color: white;
                    border: 1px solid ${GlobalColors.blue};
                }
            }
        }

        .ContactMediaContainer {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            
            .ContactMedia, .SocialMedia {
                width: 60%;
                margin: auto;

                p {
                    margin: 10px 0px;
                    font-size: 1.25rem;
                }
            }

            .SocialMedia {
                display: flex;
                justify-content: space-between;

                i {
                    font-size: 3rem;
                    color: ${GlobalColors.grey};
                }
            }
        }
    }
`


const Contact = () => {
    const [category, setCategory] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }   

    return (
        <>
            <ContactContainer categoryValue={category} >
                <h1>Hubungi kami</h1>
                <p>Jika ada yang ingin disampaikan janganlah ragu, kami akan menghubungi Anda kembali <span style={{ color: GlobalColors.blue, fontWeight: 500 }}>secepat</span> mungkin!</p>
                
                <div className="ContactContainer__wrap">
                    <form onSubmit={e => onSubmitHandler(e)}>
                        <input type="text" placeholder='Nama Lengkap'/>
                        <input type="text" placeholder='Email' />
                        <select id="standard-select" value={category} onChange={e => setCategory(e.target.value)}>
                            {!category && <option value={false}>Kategori</option>}
                            <option value="orangtuaMurid">Orangtua Murid</option>
                            <option value="murid">Siswa-siswi</option>
                            <option value="perusahaan">Perusahaan</option>
                            <option value="other">Lain-lain</option>
                        </select>
                        <input type="text" placeholder='Pesan' />
                        <button type='submit'>Kirim</button>
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
                            <p>+62 69420</p>
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