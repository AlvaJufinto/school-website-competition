import styled from 'styled-components';
import { GlobalMeasurements, GlobalFonts, GlobalColors } from '../globals';
import {
    Link
} from "react-router-dom";

export const StyledLink = styled(Link)`
    color: ${GlobalColors.white};
    /* font-family: ${GlobalFonts.primary}; */
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
        color: white;
    }
`

export const StyledSection = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: ${GlobalMeasurements.containerWidth}px;
    background: ${props => props.backgroundColor ? props.backgroundColor : GlobalColors.lightBack};
    font-family: ${props => props.fontFamily ? props.fontFamily : GlobalFonts.primary};
    color: ${props => props.color ? props.color : GlobalColors.white};
`