import styled from "styled-components";

export const H1 = styled.h1`
    color: #16425B;
    padding:${props=>props.padding || "0px 30px"};
    position:${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin || "0"};
    font-size:6vw
`

export const H2 = styled.h2`
    color: #16425B;
    padding:0px 10px;
    cursor: ${props=>props.cursor}
`
export const H3 = styled.h3`
    color: #16425B;
    padding:0px 20px;
    cursor: ${props=>props.cursor}
`
export const H4 = styled.h4`
    color: white;
    padding:0px 20px
`
export const Image = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius:${props=>props.borderRadius}
`

export const Hero = styled.div`
    width:${props=>props.width || "100vw"};
    height:${props=>props.height || "65vh"};
    background-image: url(${props=>props.src});
    background-size: ${props=>props.bgSize};
    background-repeat: ${props=>props.bgRepeat}
`

export const Box = styled.div`
    width:${props=>props.width || "100vw"};
    height:${props=>props.height || "fit-content"};
`