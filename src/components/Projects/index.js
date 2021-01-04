import React from "react";
import { Button } from "../ButtonElements";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectsH2Desc,
  SkillsWrap,
  BtnWrap,
} from "./ProjectsElements";
function Projects({
  imgOne,
  altOne,
  imgTwo,
  altTwo,
  imgThree,
  altThree,
  buttonLabelOne,
  buttonLabelTwo,
  buttonLabelThree,
  buttonLabelFour,
  buttonLabelFive,
  buttonLabelSix,
  buttonLabelSeven,
  buttonLabelEight,
  buttonLabelNine,
}) {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>My Projects</ProjectsH1>
        <ProjectsH2Desc>
          All these projects achieved in my free time. <br></br>Check my code in
          github refer in the Contact section.<br></br>Thank you for your
          support!
        </ProjectsH2Desc>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={imgOne} alt={altOne} />
            <ProjectsH2>Filter Bot List</ProjectsH2>
            <ProjectsP>
              In this project I have built application using React Redux and
              React Form for adding another bot to the list of bots.
            </ProjectsP>
            <a href="https://botbrowseit.netlify.app" class="button">
              Click me to refer to the project
            </a>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={imgTwo} alt={altTwo} />
            <ProjectsH2>Your Places</ProjectsH2>
            <ProjectsP>
              Client - React-JS includes React Hooks
              <br></br>Server - Node-JS with Express, MongoDB.
            </ProjectsP>
            <a href="https://mern-amir.herokuapp.com/" class="button">
              Click me to refer to the project
            </a>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={imgThree} alt={altThree} />
            <ProjectsH2>COVID-19</ProjectsH2>
            <ProjectsP>
              UNDER CONSTRUCTION
              <br></br>A Chart that will display Infected, Recoverd And Deaths
              from COVID-19 all over the world
            </ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>

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
      </ProjectsContainer>
    </>
  );
}

export default Projects;
