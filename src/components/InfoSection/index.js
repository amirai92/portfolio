import React from "react";
import {
  InfoSectionH1,
  InfoSectionWrapper,
  InfoSectionCard,
  InfoSectionIcon,
  InfoSectionP,
  InfoSectionContainer,
} from "./InfoElements";
function InfoSection({ imgOne, altOne, imgTwo, altTwo, imgThree, altThree }) {
  return (
    <>
      <InfoSectionContainer id="education">
        <InfoSectionH1>Education</InfoSectionH1>
        <InfoSectionWrapper>
          <InfoSectionCard>
            <InfoSectionIcon src={imgOne} alt={altOne} />
            <InfoSectionP>
              2016-2020 SCE-Shamoon college of engineering
            </InfoSectionP>
          </InfoSectionCard>
          <InfoSectionCard>
            <InfoSectionIcon src={imgTwo} alt={altTwo} />
            <InfoSectionP>
              2020 React & Redux Course (40Hours) by SQLink
            </InfoSectionP>
          </InfoSectionCard>
          <InfoSectionCard>
            <InfoSectionIcon src={imgThree} alt={altThree} />
            <InfoSectionP>
              2020 Udemy Course -The MERN Fullstack Guide.
            </InfoSectionP>
          </InfoSectionCard>
        </InfoSectionWrapper>
      </InfoSectionContainer>
    </>
  );
}
export default InfoSection;
