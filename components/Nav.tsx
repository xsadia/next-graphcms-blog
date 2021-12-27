import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  height: 60px;
  width: 100vw;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid var(--gray-500);
  box-shadow: 0 2px 10px var(--gray-500);

  /* background: var(--gray-500); */
`;

// const TitleContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-height: 100%;
//   width: 200px;

//   /* svg {
//     font-size: 1.5rem;
//     color: #fff;
//   } */
// `;

const NavTitle = styled.a`
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const Nav = () => {
  return (
    <NavContainer className="h-14 flex items-center fixed">
      <Link href="/">
        <NavTitle>Fezin blogs</NavTitle>
      </Link>
    </NavContainer>
  );
};

export default Nav;
