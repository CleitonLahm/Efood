import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";


export const Card = styled.div`
    max-width: 472px;
    width: 100%;
    height: 398px;
    position: relative;
`

export const RestaurantBanner = styled.img`
    width: 100%;
    height: 217px;
    display: block;
    object-fit: cover;
`
export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
`

export const ButtonLink = styled(Link)`
    background-color: ${colors.rose};
    padding: 4px 6px;
    color: ${colors.white};
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
`

export const CardContainer = styled.div`
    padding: 7px;
    border: 1px solid ${colors.rose};
    border-top: none;
`

export const TitleContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;

`

export const Tag = styled.span`
    background-color: ${colors.rose};
    color: ${colors.white};
    font-size: 12px;
    line-height: 14px;
    padding: 6px 4px;
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    text-transform: capitalize
`

export const Rate = styled.span`
    margin-right: 8px;
    font-weight: bold;
    font-size: 18px;
`

export const RateDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
