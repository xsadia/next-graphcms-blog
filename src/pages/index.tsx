import Head from "next/head";
import styled from "styled-components";
import Typewriter from "../components/Typewriter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const IntroductionTextContainer = styled.div`
  height: fit-content;
  width: 768px;
  padding: 0.5rem;
  margin-top: 1.5rem;
  text-align: justify;
  hyphens: auto;
  word-spacing: -2px;
  border-bottom: 2px solid var(--turquoise-200);

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const IntroductionText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

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

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Felipe R. | About</title>
        <meta name="description" content="About Felipe Rosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typewriter
        text="Hello, World! I'm Felipe Rosa, a passionate developer."
        pauses={{ "!": 600, ",": 200 }}
      />
      <IntroductionTextContainer>
        <IntroductionText lang="en">
          I&apos;m a developer from Brazil working primarily with{" "}
          <strong>javascript</strong> but I&apos;m also interested in several
          technologies, such as <strong>Go</strong>, <strong>GraphQL</strong>{" "}
          and <strong>functional programming</strong>. I mostly build stuff
          using <strong>node</strong>, <strong>typescript</strong>,{" "}
          <strong>mongodb</strong> and <strong>react</strong>. I&apos;m
          currently studying computer engineering at{" "}
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
