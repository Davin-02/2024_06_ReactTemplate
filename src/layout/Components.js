import styled from 'styled-components';
import {Link} from "react-router-dom";

/*
* Layout
* */
export const LayoutBackground = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;

    ${props => props.theme.isMobile && `background-color: #ffffff;`}
`;

/*
* Header
* */
export const LayoutHeaderWrapper = styled.header``

export const LayoutHeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.$height};
    background-color: ${props => props.theme.colors.primary || '#0077B6'};
`

export const CenterLayoutHeaderContent = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 22px;
    margin: 0 auto; /* center */
    max-width: 1120px; /* center width */
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between; /* divide left - right */
    color: ${props => props.theme.colors.white};
`

export const FullLayoutHeaderContent = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 22px;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between; /* divide left - right */
    color: ${props => props.theme.colors.white};
`

export const LayoutHeaderContentLeft = styled.div``;

export const LayoutHeaderContentRight = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.$gap ?? 'unset'};
    color: ${props => props.theme.colors.white};
`;

export const LayoutHeaderLink = styled(Link)`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.white || 'inherit'};
    cursor: pointer;
    text-decoration: none;
`;

export const LayoutHeaderText = styled.span`
    font-size: 16px;
    color: ${props => props.theme.colors.white};
    cursor: default;
`;

export const LayoutHeaderButton = styled.button`
    margin: 0;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 4px;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    font-weight: bold;
    background-color: ${props => props.theme.colors.textColorInPrimary || '#0051ff'};
    color: ${props => props.theme.colors.primary || '#0051ff'};
    cursor: pointer;
`;

/*
* Footer
* */
export const LayoutFooterWrapper = styled.footer`
    background-color: ${props => props.theme.colors.primaryVariant5 || '#0051ff'};
    color: ${props => props.theme.colors.primaryVariant || '#0051ff'};
`

export const LayoutCenterFooterContainer = styled.div`
    margin: 0 auto; /* center */
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 4px;
`
export const LayoutCenterFooterContentCol = styled.div`
    padding: 10px;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 4px;
`
export const LayoutCenterFooterContentRow = styled.div`
    max-width: 100%;
`

/*
* Main
* */
export const CenterLayoutMainContainer = styled.div`
    flex: 1;
    margin: 20px auto 0 auto; /* center */
    //max-width: 1120px; /* center width */
    //min-width: 1120px; /* center width */
    width: 1120px; /* center width */

    box-sizing: border-box;
    padding: 20px 20px 20px 20px;
    overflow: auto;

    border-radius: 20px 20px 0 0;
    background-color: ${props => props.theme.colors.background || '#f5f5f5'};

    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`

export const FullLayoutMainContainer = styled.div`
    flex: 1;

    display: flex;
    
    box-sizing: border-box;
    overflow: auto;
`

export const FullLayoutMainContent = styled.div`
    flex: 1;
    box-sizing: border-box;
    padding: 20px 20px 20px 20px;
    overflow: auto;
    background-color: ${props => props.theme.colors.background || '#f5f5f5'};
`