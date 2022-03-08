import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading></FooterSubHeading>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper></FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/monametsi.ka@gmail.com">
            <SocialIcon />
            AM
          </SocialLogo>
          <WebsiteRights> &copy; 2021 Made by Andrew M.  All Rights Reserved.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="//www.github.com/kagiso911" target="blank" aria-label="github">
              <FaGithub />
            </SocialIconLink>

            <SocialIconLink href="//www.linkedin.com/in/andrew-monametsi-0240a4220/" target="_blank" aria-label="Linkedin">
              < FaLinkedin/>
            </SocialIconLink>
            <SocialIconLink
              href={
                "//monametsi.ka@gmail.com"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Mail"
            >
              <FaRegEnvelope/>
            </SocialIconLink>
            
            

           


          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
