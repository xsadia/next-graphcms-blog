import Link from "next/link";
import styled from "styled-components";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

type SocialIconProps = {
  icon: ComponentType<IconBaseProps>;
  target: string;
};

const IconContainer = styled.div`
  cursor: pointer;
  svg {
    font-size: 24px;
    color: #fdfdfd;
    transition: color 0.2s;

    &:hover {
      color: var(--turquoise-500);
    }
  }
`;

const SocialIcon = ({ icon: Icon, target }: SocialIconProps) => {
  return (
    <IconContainer>
      <Link href={target}>
        <Icon />
      </Link>
    </IconContainer>
  );
};

export default SocialIcon;
