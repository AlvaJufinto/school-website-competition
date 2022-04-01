import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import useDraggableScroll from 'use-draggable-scroll';
import AOS from "aos";  
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";

const QuoteSection = styled.div`
    padding: 150px 0 0 0;
    font-family: ${GlobalFonts.primary};

    .QuoteSection__Big {
        padding: 0 25%;

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
    
    @media (max-width: 1024px) {
        .QuoteSection__Big {
            padding: 0;

            h1 {
                font-size: 3rem;
            }
        }
    }
`

const SearchSection = styled.div`
    text-align: right;
    margin: 0 0 50px 0;

    p {
        margin: 100px 0 50px 0;
        font-family: ${GlobalFonts.secondary};
        font-size: 2rem;
    }
    .SearchContainer {
        position: relative;
        height: 60px;
        padding: 0;
        position: relative;
        
        input[type="text"] {
            height: 60px;
            font-size: 55px;
            display: inline-block;
            font-family: "Lato";
            font-weight: 100;
            border: none;
            outline: none;
            color: #ffffff;
            padding: 3px;
            padding-right: 60px;
            width: 0px;
            position: absolute;
            top: 0;
            right: 0;
            background: none;
            z-index: 3;
            transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
            cursor: pointer;
        }
        
        input[type="text"]:focus:hover {
            border-bottom: 1px solid #BBB;
        }
    
        input[type="text"]:focus {
            width: 700px;
            z-index: 1;
            border-bottom: 1px solid #BBB;
            cursor: text;
        }
    
        input[type="submit"] {
            height: 67px;
            width: 67px;
            display: inline-block;
            color:red;
            float: right;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD////7+/vz8/Orq6vu7u739/fr6+vk5OT8/PxZWVnQ0NBzc3PAwMAhISHn5+exsbHJyck7Ozva2tqYmJhCQkKMjIyioqIVFRWAgIAoKCgvLy/e3t5SUlJQUFDOzs4lJSUYGBi4uLhsbGxHR0dwcHCJiYlkZGQODg4/Pz9+fn6kpKQ0NDRfX1/LWZqRAAAJpUlEQVR4nO1dh1ryShAFQqihV2nS1Kj4/q93AfUXcGazu1PC+t3zAEwO26ZPocCAdNM+Yjrl+K27wryRTHrNQa0aV4pHVKJqtTZobofJx2ven8aAxrhXPfMCUY+bk2SW9zf6o/3cq6PkLlDZ7vL+VB8chgsbdt/ovR3y/mInpEnTavWuSYazktNJ5EzvjOowzfvbbdDf+tH7RKuf9/dnod+i8DuhO8+bgwmzrfvx+4VSeZM3DxTjEp3fmeM4byYwGjUefics9nmzAdDl43fCe958brFkXMBP1Bp5c7rChJvfCcO8Wf2g3ZQgeNRy7sXOasQyBIvFzipvbmc8SPE74SFvdgWhI/iD/O9UkhZqg27OBHvSBI/KeK4EXS/R0hHOqmsvBILxojV52C1f5+v1+jB6SZ4nvUXVmmIzr1cjfbRj1xs2IG9Te/WwXdgtaF6raGMKVlpJ2/Qbo+HAhuJWi9MVLFTtZmKxvw5Di/2ahwY3zPqoemtp+1tJ9oHWf/qTjC8qbZ00rl3WZq2/SDFBMMow5x+dTdinjL0a6frGU/PnxG8+P/pu/tcG3CSMMKsyXc+/e2Xeqpq3zbPpQ6In/x8um364pGf1j0zv9IAUMnvCA1XFYk1NtzFtJqopMDc5fLQeftNLSPd0Gl0iHwyfn4214Qs43uXUoA3q3KeGezThkWDQB595JBjxhEovMRE0UYwV3n30JqizETT5Rsp8QhDgnjXWcApqetZHnGIgoL5R5j8X3SrSbpsxJviRWdAMjZQLpzRgcmtrbkkvSpvlBtgplFAZMcUiEg2DY6djIiEMU25EhH1hh8iUUTXmiLSq0bdFA6bOCMWksWtNzmdzQKwmMdMUMWLktFPk7HfEMpkaunumUOjA8gS1YcTMkLpr+rC4mmAyGiZSSBwSC/Xyq9kCUcGtfc1ugB9Dqf/zE8giymzTAyxM2McHP1AytymisQkrwvB1WhFJ0oTvNW6b4hfgsyFy+GFHvnhMCH6EJfIX+mBUQT5e8goqUhIHEbbXFOLPYM5/ReCfhdVghWgJ/AwLGKTwRaMQLFmBggVURVDPr2qkZIPBGgFfBnhrq6SBgLunyS5mA16lKkFL8L2osouBXQqiWvc3PiDJEbuYEchQJSoLKsQl9udiqSMGQhv8c9ntfPDB598qEFKQIXt+DZgh1OGWAiIF9TbGSNcnwPQLpRQXMJTArvKDShv/owQCZMheGwU+SkoJyiBD9qcYZKiU/QEyZE/iBxkq5dH/z5AH4F2a5zlkZwh62vK8S9lvGvDFl/UG/4POawEGR2NuKSBS0HBjf/GVTBgIsF7KrrXtISmlNbcYCBuQIXuaImwBq2RDwgET9t42sBdDpQoCDF1U+NMVwACwSv0jqPQLXAGgN1HlQQR9bQIPFZgtqGICg8mCAurUOySnqFBsDYeBBaLAcKGTgsMUDq8J+DHh8EFesae6wOaZgsdBPn4IO2pjidw2ONws3r4KjuqJ7B04gV7cRIT/WJF0E/iqkXZ7I6nCIlsHVvHzyacRyhOGcyFlH304ZiGV44LktYneNUj1jFA6JGgiyuYMIZlmdam2oEjxr2CVNbKECyl5SI6wXHwGfu0Fc3aRVEg5gUiKsID1+w2kAiISqs/F0rwFtQysZEZIJFb0L9leAatcE9mnWJ2laFwWrUUSqA94Q2QJp7hglfj8Cft7rIcEf67QFdDeZezmDFrKKVzsPEXbKTCn0qFV+cJLaGpAx2pk4NXc8olmeN8WxngX3gFEIcEFr8fno2hocaIRKTH0rWCiCLtmz1DJ/sC00xNYzqKhaUQkWD56AVO3S4Yb1dQbRiWfNeMbWsSnv29q96rWe8/YY2hBKknamXoMydapXwHtrHBChdAnytzHT7MrnblHnm+qVEZDYtXmiXAQ4x86Pv631NjoS5thYZXRlrPlXJb4nN1RWpdiVt/EYtepnCax6teqSzGz92Wxa9ssZ5rY9qzXpWjRoPUxsVjIVddhaIsuRZvusVHrwagC7O160N4zxSMW3bc+RHP+0DK97wh0m1/b///12mN3vFuO5pvNfPXyNu72Bh7s9ClOnaZWnVCJY19m+VDcOFPkgCpFy57e3BSn7fZmOp3qDMBini9jh1LluN3juNpZDHpDccdG9tMvjWpZOPlsxzTmiYKm7PikV6T5EBWPLtqAmx7sikzDxwelcWHtMmOpI9SW5wsv9rMcLDE46e1zlyE9JWE/Fe84lvqX63XuNEpRshvfEU+MY7ua/9JJRk4UxVt/es6uvEV86XJaOml50kOwZhw3Tr187djG8hVgDKS94ocW8XGsdH95eMCCJBQ1cafqvkwYUhaVIX/yzmm8UEd+lOls7HnnRBPk/890e11TFG+mfMSu53zplHoJbiq4UYxVJmC2n1oOu7U+GJuPj9sVVlGauTdLtgube6faGmf+6cZIyW9EshrcJQ7Ju9EhE/WGS5snzHUEoSLFI9JlMuz2BotapxrHn4br0XJtbifPT9YHxu0gFlUHmlwg3bTP2Lh7H9Du3ndG0R9uis0ZlbAoIjnmf4giktJuRlAbdebDMKhVzBgShiEKiKJjiCrAVbQZJwkhnLPoqLZdrKLOjCg63MzgK4qBrGLqb1eHslF9D2I4FA2Zu5kIZKNSvOphUDSOlcxCGBuVFBoJYhUpJzEQioTrtBjGRl0TfM2BUHT3ZVwhhI1KzIqIlPyoFBDjsFquYgrM06T/wiqm2YPmQ6foa+0HRLFNpBjAWZwTEyJ1YxpeMM7utkCsEUKlYU1MM5MormdGn7iK0f2vYp+4ijqBcBKcMt4givIZG1T0ibmCAVAcESlWA6BI3KgKqUVUGGuGbSjqVd364pW4UTs6xe8U7IkUFxozx2h4Jaa0Ks2RoYB6FpWGH1AwImo3utV+XqAqcAJT+LhBVeA0Gxl44kBbxfr9a+FUYyqAC7VwoL2LhE4eapiTKCpNk6HhQHJPBZGRQvLAqbX2IWFGuFFLwvPTmdAm3KgBvIknEDZqGNu0UFh7O/wjncJ3OtybPHzj/s39L3iHbe4/lvGNtmd8MZCr5oSp3yoKlxDzwmsVA7ASf5D6xPqDYuhFMSyGPhkbKvPVOOGcAqcwuIoZrqlFWp1RGeFIMQgL8QZuzY/WeX+uD1yqowNwfUMwNTy+QYDH8AxriuKt7MVgm4/KPnpXD3YFYWKzhzSAzgG5xP3nD5lgUcMgPDFDHB9ZTYpCU7p/Y2X2+Pv25r4nrE16eFDGPY4G5tqgNJC/M7xAvo36X9ihP9hPbpypncn9p325YvbyXv7G+Ibef+Snit0AGWwoAAAAAElFTkSuQmCC);
            background-size: cover;                      
            background-repeat: no-repeat;
            background-position: center center;   
            text-indent: -10000px;
            border: none;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
            cursor: pointer;
            opacity: 0.4;
            cursor: pointer;
            transition: opacity .4s ease;
        }
    
        input[type="submit"]:hover {
            opacity: 0.8;
        }
    }


    @media (max-width: 700px) {
        input[type="text"]:focus {
            width: ${props => props.windowWidth - 30}px;
            /* margin: 0 20px 0 0; */
        }
    }
`

const Jobs = () => {
    const [value, setValue] = useState('')
    let filteredJobs = [];
    const { width, height } = useWindowDimensions();
    
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        console.log(width)
    }, [width]);

    const jobs = [
        {
            name: "Frontend Developer",
            place: "Jakarta",
            description: "Frontend developer yang berpengalaman selama 69 tahun",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Backend Developer",
            place: "Jakarta",
            description: "Sseorang Backend Developer yang berpengalaman selama 69 tahun di perusahaan Ogah Rugi",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Psatir Handal",
            place: "Merauke",
            description: "Psatir handal sangat dibutuhkan untuk menstranslate bahasa satir dengan bahasa manusia",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "UI/UX Designer",
            place: "Bogor",
            description: "Ahli UI Design yang telah memiliki pengalaman selama 5 tahun",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            name: "Network Designer",
            place: "Padang",
            description: "Kamg jaringan yang jago merancang SOHO dengan pengalaman magang 1 tahun di PT mencari cinta sejati",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ];
    
    return ( 
        <>
            <StyledSection>
                <Navbar />
                <QuoteSection>
                    <div className="QuoteSection__Big">
                        <p>Jobs</p>
                        <h1 data-aos="fade-up" data-aos-duration="1000">
                            Kami juga menyediakan beberapa jasa yang bergerak di bidang IT 
                        </h1>
                    </div>
                </QuoteSection>
                <SearchSection windowWidth={width}>
                    <p>Cari jasa yang anda butuhkan dengan <span className="underline">klik</span> icon search di bawah!</p>
                    <div className="SearchContainer">
                        <div action="" autocomplete="on">
                            <input id="search" name="search" type="text" value={value} onChange={e => setValue(e.target.value)}   placeholder="What are you looking for ?" />
                            <input id="search_submit" value="Rechercher" type="submit" />
                        </div>
                    </div>
                </SearchSection>

                {jobs.filter(item => {
                    if (!value) return true;
                    if (item.name.toLowerCase().includes(value.toLowerCase())) {
                        return true
                    }
                    })
                    .map(item => {
                        filteredJobs?.push(item);
                    })
                }
                
                {/* <JobCardsContainer>
                    {filteredJobs?.map(jobs => (
                        <div className="JobsCardsContainer__card" >
                            <h2>{jobs?.name}</h2>
                            <p>{jobs?.description}</p>
                        </div>
                    ))}
                </JobCardsContainer> */}
                <Footer />
            </StyledSection>
        </>
     );
}
 
export default Jobs;