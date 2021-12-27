import styled from "styled-components";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import SocialIcon from "./SocialIcon";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 40px;
  width: 100vw;
  background: var(--gray-500);
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinksContainer>
        <SocialIcon target="https://github.com/xsadia" icon={AiOutlineGithub} />
        <SocialIcon
          target="https://www.linkedin.com/in/felipe-arthur-s-b45a5b196/"
          icon={AiFillLinkedin}
        />
        <SocialIcon
          target="https://twitter.com/felps11"
          icon={AiOutlineTwitter}
        />
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
