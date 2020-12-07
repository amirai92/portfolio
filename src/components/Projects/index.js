import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectsH2Desc,
} from "./ProjectsElements";
function Projects({ imgOne, altOne, imgTwo, altTwo, imgThree, altThree }) {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>My Projects</ProjectsH1>
        <ProjectsH2Desc>
          All these projects achieved in my free time.Check my code in github
          refer in the Contact section.Thank you for your support!
        </ProjectsH2Desc>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={imgOne} alt={altOne} />
            <ProjectsH2>Filter Bot List</ProjectsH2>
            <ProjectsP>
              In this project I have built application using React Redux and
              React Form for adding another bot to the list of bots.
            </ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={imgTwo} alt={altTwo} />
            <ProjectsH2>Create Bot And Filter</ProjectsH2>
            <ProjectsP>
              In this project I have built application Using Context API as
              Global state management.
            </ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={imgThree} alt={altThree} />
            <ProjectsH2>Online Store</ProjectsH2>
            <ProjectsP>Will upload soon</ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}

export default Projects;
