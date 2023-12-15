import styled from "styled-components";
import { colors } from "../../styles";


export const Card = styled.div`
    padding: 8px;
    background-color: ${colors.rose};
    width: 320px;
    max-height: 100%;
`
export const ProductImg = styled.img`
    width: 304px;
    height: 167px;
`
export const Title = styled.h3`
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
    margin-top: 4px;
    color: ${colors.beige};
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
    margin-bottom: 8px;
`

export const AddCart = styled.button`
    background-color: ${colors.beige};
    color: ${colors.rose};
    cursor: pointer;
    width: 100%;
    border: none;
    padding: 4px;
    font-weight: 700;
    line-height: 16px;
    font-size: 14px;
`