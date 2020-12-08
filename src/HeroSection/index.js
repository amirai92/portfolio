import React, { useState } from "react";
import Video from "../video/video.mp4";
import { Button } from "../components/ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Amir Aizin</HeroH1>
        <HeroP>
          I'm looking for my first position as a Front End / Full Stack Web
          Developer.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={() => window.open("https://docdro.id/EaJLtyX")}
          >
            Download resume{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
//     to = "signup";
{
  /* <a download="resume.pdf" target="_blank" href="https://docdro.id/8y1pDUA">
  click here to download
</a>; */
}
