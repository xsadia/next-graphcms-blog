import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import useTypewriter from "../hooks/useTypeWriter";

type Post = {
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
};

type PageProps = {
  posts: Array<Post>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Introduction = styled.div`
  max-width: 510px;
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

  border-right: 2px solid var(--turquoise-200);

  animation: typing 3.5s steps(30, end), blink-caret 0.8s step-end infinite;

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

const IntroductionTextContainer = styled.div`
  height: 240px;
  width: 768px;
  margin-top: 1.5rem;
  text-align: justify;
`;

const IntroductionText = styled.p`
  color: #fff;
  font-size: 1.5rem;

  a {
    text-decoration: underline;
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
    transition: color 0.2s;

    &:hover {
      color: var(--turquoise-200);
    }
  }

  strong {
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const Home: NextPage<PageProps> = () => {
  const [textTyped, textToType] = useTypewriter(
    "Hello, World! I'm Felipe Rosa, a passionate developer.",
    { "!": 500, ",": 200 }
  );

  return (
    <Container>
      <Head>
        <title>Felipe R.</title>
        <meta name="description" content="Blog do fezin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction>
        <TypeWriter>{textTyped}</TypeWriter>
        <HiddenText>{textToType}</HiddenText>
      </Introduction>
      <IntroductionTextContainer>
        <IntroductionText>
          I'm a developer from Brazil working mostly with{" "}
          <strong>javascript</strong> but, I'm also interested in several
          technologies, such as <strong>Go</strong>, <strong>GraphQL</strong>,{" "}
          <strong>functional programming</strong>, but I mostly build stuff
          using <strong>node</strong>, <strong>typescript</strong>,{" "}
          <strong>mongodb</strong> and <strong>react</strong>. I'm currently
          studying computer engineering at{" "}
          <a href="https://en.wikipedia.org/wiki/Federal_University_of_Santa_Catarina">
            UFSC
          </a>
          . Feel free to contact me on any social media listed on the footer of
          this page 🙂.
        </IntroductionText>
      </IntroductionTextContainer>
    </Container>
  );
};

export default Home;
