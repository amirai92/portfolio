import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>My Projects</ServicesH1>
        <ServicesH2>
          All these projects achieved in my free time. You can click on any
          project and read a brief description, check my code in github and in
          several projects watch online demos. thank you for your support!
        </ServicesH2>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon scr={Icon1} />
            <ServicesH2>Bot Browse</ServicesH2>
            <ServicesP>
              In this project I built a Single web page application using React
              Redux and React Form for adding another bot to the list
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon scr={Icon2} />
            <ServicesH2>Bot Browse</ServicesH2>
            <ServicesP>Using Context API as Global state management.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon scr={Icon3} />
            <ServicesH2>Online Store</ServicesH2>
            <ServicesP>Will upload soon</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
