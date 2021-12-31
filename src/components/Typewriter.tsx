import styled from "styled-components";
import useTypewriter from "../hooks/useTypeWriter";

type PauseType = {
  [key: string]: number;
};

type TypewriterProps = {
  text: string;
  pauses: PauseType;
};

const Introduction = styled.div`
  max-width: 510px;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 480px) {
    width: 300px;
    text-align: center;
  }
`;

const HiddenText = styled.span`
  opacity: 0;
  user-select: none;
`;

const TypeWriter = styled.span`
  font-size: 2rem;
  color: #fff;
  white-space: pre-wrap;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  border-right: 2px solid var(--turquoise-200);

  animation: blink-caret 0.8s step-end infinite;

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--turquoise-200);
    }
  }
`;

const Typewriter = ({ text, pauses }: TypewriterProps) => {
  const [textTyped, textToType] = useTypewriter(text, pauses);
  return (
    <Introduction>
      <TypeWriter>{textTyped}</TypeWriter>
      <HiddenText>{textToType}</HiddenText>
    </Introduction>
  );
};

export default Typewriter;
