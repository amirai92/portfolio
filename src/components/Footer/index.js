import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactHeader,
} from "./FooterElements";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <ContactHeader>Contact Me</ContactHeader>
        <SocialIcons>
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
            <SocialLogo to="/" onClick={toggleHome}>
              Go Up
            </SocialLogo>

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
