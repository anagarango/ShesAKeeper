import styled from "styled-components";

export const H1 = styled.h1`
    color: ${props=>props.color || "#16425B"};
    padding:${props=>props.padding || "0px 30px"};
    position:${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin || "0"};
    font-size:${props=>props.fSize || "calc(20px + 3.5vw)"};
    width:${props=>props.width};
    background-color:${props=>props.bgColor};
    border-radius:${props=>props.borderRadius};
    height:fit-content
`
export const H2 = styled.h2`
    color: ${props=>props.color || "#16425B"};
    cursor: ${props=>props.cursor};
    width:${props=>props.width};
    font-size:${props=>props.fSize};
    margin:${props=>props.margin || "0px"};
    text-align:${props=>props.textAlign};
    padding:${props=>props.padding || "0px 30px"};
`
export const H3 = styled.h3`
    color: ${props=>props.color || "#16425B"};
    padding:${props=>props.padding || "0px 20px"};
    cursor: ${props=>props.cursor};
    text-align:${props=>props.textAlign};
    width:${props=>props.width};
`
export const H4 = styled.h4`
    color: ${props=>props.color || "white"};
    padding:0px 20px;
    margin:${props=>props.margin || "0px"};
    text-align:${props=>props.textAlign}
`

export const Text = styled.p`
    width:${props=>props.width};
    height:${props=>props.height};
    text-align:${props=>props.textAlign};
    margin:${props=>props.margin || "0px"};
    padding:${props=>props.padding || "5px 20px 20px 20px"};
    display:flex;
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    color: ${props=>props.color};
`

export const Image = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius:${props=>props.borderRadius};
    padding:${props=>props.padding || "0px"};
`

export const Hero = styled.div`
    width:${props=>props.width || "100vw"};
    height:${props=>props.height || "65vh"};
    background-image: url(${props=>props.src});
    background-size: ${props=>props.bgSize};
    background-repeat: ${props=>props.bgRepeat};
    margin:${props=>props.margin};
    background-position: right bottom;
    padding:${props=>props.padding};
`

export const Box = styled.div`
    width:${props=>props.width || "100vw"};
    height:${props=>props.height || "fit-content"};
    min-height:${props=>props.minHeight};
    background-color:${props=>props.bgColor};
    display:flex;
    justify-content:${props=>props.justCont};
    align-items:${props=>props.aliIt};
    padding:${props=>props.padding || "20px 0px"};
    flex-direction:${props=>props.flexDir};
    margin:${props=>props.margin};
    flex-wrap:${props=>props.flexWrap};
    overflow:${props=>props.overflow};
    border-radius:${props=>props.borderRadius};
    position:${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    bottom:${props=>props.bottom};
    box-shadow:${props=>props.boxShadow}
`
export const PullQuote = styled.blockquote`
    font-size:calc(16px + 0.4vw);
    color:#16425B;
    padding:50px;
    text-align:center
`

export const Container = styled(Box)`
`