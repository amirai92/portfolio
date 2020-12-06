import React from "react";
//import Icon1 from "../../images/bot_browse_project.png";
//import Icon2 from "../../images/svg-1.svg";
//import Icon3 from "../../images/online_store.svg";

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

function Projects() {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>My Projects</ProjectsH1>
        <ProjectsH2Desc>
          All these projects achieved in my free time.Check my code in github
          and in several projects watch online demos. thank you for your
          support!
        </ProjectsH2Desc>
        <ProjectsWrapper>
          <ProjectsCard>
            {/* <ServicesIcon scr={Icon6} alt={"Bot Browse-Redux"} /> */}
            <ProjectsH2>Bot Browse</ProjectsH2>
            <ProjectsP>
              In this project I have built a Single web page application using
              React Redux and React Form for adding another bot to the list
            </ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            {/* <ProjectsIcon scr={Icon2} alt={"Bot Browse-Context API"} /> */}
            <ProjectsH2>Bot Browse</ProjectsH2>
            <ProjectsP>Using Context API as Global state management.</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            {/* <ProjectsIcon scr={Icon3} alt={"online_store"} /> */}
            <ProjectsH2>Online Store</ProjectsH2>
            <ProjectsP>Will upload soon</ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}

export default Projects;
