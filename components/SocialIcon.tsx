import Link from "next/link";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";
import styled from "styled-components";

type SocialIconProps = {
  icon: ComponentType<IconBaseProps>;
  target: string;
};

const IconContainer = styled.div`
  svg {
    font-size: 24px;
    color: #fdfdfd;
    transition: color 0.2s;

    &:hover {
      color: var(--gray-200);
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
