import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headlineOne,
  headlineTwo,
  darkText,
  description,
  buttonLabel,
  imgOne,
  imgTwo,
  altOne,
  altTwo,
  primary,
  dark,
  dark2,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headlineOne}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgOne} alt={altOne} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headlineTwo}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgTwo} alt={altTwo} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
