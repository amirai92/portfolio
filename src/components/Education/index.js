import React from "react";
import {
  EducationH1,
  EducationWrapper,
  EducationCard,
  EducationIcon,
  EducationP,
  EducationContainer,
} from "./EducationElements";
function EducationSection({
  imgOne,
  altOne,
  imgTwo,
  altTwo,
  imgThree,
  altThree,
}) {
  return (
    <>
      <EducationContainer id="education">
        <EducationH1>Education</EducationH1>
        <EducationWrapper>
          <EducationCard>
            <EducationIcon src={imgOne} alt={altOne} />
            <EducationP>
              2016-2020 SCE-Shamoon college of engineering
            </EducationP>
          </EducationCard>
          <EducationCard>
            <EducationIcon src={imgTwo} alt={altTwo} />
            <EducationP>
              2020 React & Redux Course (40Hours) by SQLink
            </EducationP>
          </EducationCard>
          <EducationCard>
            <EducationIcon src={imgThree} alt={altThree} />
            <EducationP>
              2020 Udemy Course -The MERN Fullstack Guide.
            </EducationP>
          </EducationCard>
        </EducationWrapper>
      </EducationContainer>
    </>
  );
}
export default EducationSection;
