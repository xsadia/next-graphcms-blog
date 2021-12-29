import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  height: 60px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(21, 32, 43, 0.75);
  backdrop-filter: blur(5px);
  padding: 0 2rem;
  border-bottom: 1px solid var(--gray-500);
  box-shadow: 0 2px 10px var(--gray-500);
`;

const NavTitle = styled.h1`
  cursor: pointer;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;

  @media (max-width: 480px) {
    width: 35%;
  }

  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--turquoise-200);
  }
`;

const Nav = () => {
  return (
    <NavContainer className="h-14 flex items-center fixed">
      <Link href="/posts">
        <NavTitle>Felipe R.</NavTitle>
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
