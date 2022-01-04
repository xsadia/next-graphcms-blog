import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  color: var(--turquoise-200);

  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const NotFound = () => {
  return (
    <Container>
      <Message>404 - Page not found :(</Message>
    </Container>
  );
};

export default NotFound;
