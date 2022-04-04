import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import AOS from "aos";  
import styled from "styled-components";
import { StyledLink } from "./styledComponents";
import { GlobalColors, GlobalFonts, GlobalMeasurements } from "./../globals";

const ContactContainer = styled.div`
    h1 {
        font-size: 2.5rem;
        margin: 0 0 10px 0;
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

        .error {
            color: red;
            font-size: 1.25rem;
        }

        .success {
            color: green;
            font-size: 1.25rem;
        }

        form {
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

    @media (max-width: 1024px) {
        .ContactContainer__wrap {
            flex-direction: column;
            height: 800px;
        }
        
    }
`


const Contact = () => {
    const [category, setCategory] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const { pathname } = useLocation();

    const nama = useRef();
    const email = useRef();
    const pesan = useRef();
    
    useEffect(() => {
        AOS.init({ offset: -600 });
    }, []);

    const onSubmitHandler = async (e) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyp5lM4a5oCT2ArLvYcjdhXSKrjbIIfBkyrG5RPG-puLzPgaxal-_bFwrZ3x2YbaOat/exec';
        e.preventDefault();

        for (var value of new FormData(document.getElementById("my-form")).values()) {
            console.log(value);
         }

        if(category === false) {
            setError("Kolom Kategori harus diganti");
        } else {
            try {   
                setIsLoading(true);
                let res = await fetch(scriptURL, { 
                    method: 'POST', 
                    body: new FormData(document.getElementById("my-form")),
                });
                setSuccess('Pesan berhasil terkirim, kami akan mengubungi anda kembali secepat mungkin!');
                setIsLoading(false);

                nama.current.value = "";
                email.current.value = "";
                pesan.current.value = "";
                
                setCategory(false);
            } catch (err) {
                setError("Ada Kendala, mohon maaf atas gangguan teknis")
                setIsLoading(false);
            }
        }
    }   

    return (
        <>
            <ContactContainer categoryValue={category}>
                <div >   
                    <h1>Hubungi kami</h1>
                    <p>Jika ada yang ingin disampaikan janganlah ragu, kami akan menghubungi Anda kembali <span style={{ color: GlobalColors.blue, fontWeight: 500 }}>secepat</span> mungkin!</p>
                </div>
                
                <div className="ContactContainer__wrap" >
                    <form onSubmit={e => onSubmitHandler(e)} id="my-form" >
                        <input type="text" placeholder='Nama Lengkap' ref={nama} name="nama" required />
                        <input type="email" placeholder='Email' ref={email} name="email" />
                        <select id="standard-select" value={category} onChange={e => setCategory(e.target.value)} name="kategori" required>
                            {!category && <option value={false}>Kategori</option>}
                            <option value="Orangtua murid">Orangtua Murid</option>
                            <option value="Murid">Siswa-siswi</option>
                            <option value="Perusahaan">Perusahaan</option>
                            <option value="Lain-lain">Lain-lain</option>
                        </select>
                        <input type="text" placeholder='Pesan' ref={pesan}  name="pesan" required/>
                        <p className='error' >{error && error}</p>
                        <p className='success' >{success && success}</p>
                        <button type='submit' style={{ padding: isLoading ? '0px' : '30px', opacity: isLoading ? 0.5 : 1 }} disabled={isLoading ? true : false}>
                            {isLoading ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
                                    <path d="M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z" fill="#fff">
                                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.2s" repeatCount="indefinite"/>
                                    </path>
                                    <circle cx="50" cy="50" r="17" fill={GlobalColors.blue}></circle>
                                </svg> :
                                "Kirim"}
                            </button>
                    </form>
                    <div className="ContactMediaContainer" data-aos="fade-left" data-aos-duration="1000">
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