import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  height: 60px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid var(--gray-500);
  box-shadow: 0 2px 10px var(--gray-500);
`;

const NavTitle = styled.h1`
  cursor: pointer;
  color: #fff;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  width: 240px;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: #bfbdbd;
  }
`;

const Nav = () => {
  return (
    <NavContainer className="h-14 flex items-center fixed">
      <Link href="/posts">
        <NavTitle>Fezin blogs</NavTitle>
      </Link>
      <NavLinkContainer>
        <Link href="/posts">
          <NavLink>Blog</NavLink>
        </Link>
        <Link href="/">
          <NavLink>About</NavLink>
        </Link>
        <Link href="#">
          <NavLink>Tags</NavLink>
        </Link>
      </NavLinkContainer>
    </NavContainer>
  );
};

export default Nav;
