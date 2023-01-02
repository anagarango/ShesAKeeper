import styled from 'styled-components'
import { Image, H4, Text } from './global'
import { useState } from 'react';

const CardBox = styled.div`
  width:${props=>props.width};
  height:${props=>props.height};
  border-radius:${props=>props.borRadius};
  background-color:${props=>props.bgColor};
  box-shadow:${props=>props.bxShadow};
  display:flex;
  flex-direction:column;
  max-width:${props=>props.maxWidth};
  min-width:${props=>props.minWidth};
  min-height:${props=>props.minHeight};
  justify-content:center;
  background-image: url(${props=>props.bgImage});
  background-size: ${props=>props.bgSize};
  background-repeat: ${props=>props.bgRepeat};
`

export default function Card({
    width="25vw",
    height="fit-content",
    borRadius="10px",
    bgColor="white",
    bxShadow="0px 5px 7px #16425B",
    widthImg="100%",
    heightImg="150",
    heading="heading",
    paragraph="paragraph",
    headingColor="black",
    src="http://placekitten.com/160/150",
    paddingImg="20px 20px 5px 20px",
    textAlign="center",
    maxWidth="300px",
    minWidth="150px",
    minHeight="300px",
    classs="cardBox",
    bgSize,
    bgImage,
    bgRepeat


}) {

  return (
    <CardBox className={classs} maxWidth={maxWidth}  minWidth={minWidth} minHeight={minHeight} width={width} height={height} bgColor={bgColor} borRadius={borRadius} bxShadow={bxShadow} bgImage={bgImage} bgSize={bgSize} bgRepeat={bgRepeat}>
        <Image padding={paddingImg} width={widthImg} height={heightImg} src={src}></Image>
        <H4 color={headingColor} margin="0 0 7px 0" textAlign={textAlign}>{heading}</H4>
        <Text textAlign={textAlign}>{paragraph}</Text>
    </CardBox>
  )
}
