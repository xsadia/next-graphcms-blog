import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const MainContent = styled.main`
  margin-top: 4rem;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Nav />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
};

export default Layout;
