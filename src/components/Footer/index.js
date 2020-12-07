import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactHeader,
} from "./FooterElements";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <ContactHeader>Contact Me</ContactHeader>
        <SocialIcons>
          <SocialIconLink
            onClick={() =>
              window.open("mailto: amiraizin20@gmail.com", "_blank")
            }
          >
            <MdEmail />
          </SocialIconLink>
          <SocialIconLink
            href="//www.facebook.com/amir.aizin/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink
            href="//github.com/amirai92"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="//www.linkedin.com/in/amir-aizin/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Amir Aizin © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
