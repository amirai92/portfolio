/*import React from "react";
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
  SkillsWrap,
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
  buttonLabelOne,
  buttonLabelTwo,
  buttonLabelThree,
  buttonLabelFour,
  buttonLabelFive,
  buttonLabelSix,
  buttonLabelSeven,
  buttonLabelEight,
  buttonLabelNine,
  imgOne,
  imgTwo,
  altOne,
  altTwo,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id="education">
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
          <SkillsWrap>
            <BtnWrap>
              <Button>{buttonLabelOne}</Button>
              <Button>{buttonLabelTwo}</Button>
              <Button>{buttonLabelThree}</Button>
              <Button>{buttonLabelFour}</Button>
              <Button>{buttonLabelFive}</Button>
              <Button>{buttonLabelSix}</Button>
              <Button>{buttonLabelSeven}</Button>
              <Button>{buttonLabelEight}</Button>
              <Button>{buttonLabelNine}</Button>
            </BtnWrap>
          </SkillsWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;

*/

import {
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsP,
  ProjectsContainer,
} from "./InfoElements";
function InfoSection({ imgOne, altOne, imgTwo, altTwo, imgThree, altThree }) {
  return (
    <>
      <ProjectsContainer id="education">
        <ProjectsH1>Education</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={imgOne} alt={altOne} />
            <ProjectsP>2016-2020 SCE-Shamoon college of engineering</ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={imgTwo} alt={altTwo} />
            <ProjectsP>2020 React & Redux Course (40Hours) by SQLink</ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={imgThree} alt={altThree} />
            <ProjectsP>2020 Udemy Course -The MERN Fullstack Guide.</ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}
export default InfoSection;
