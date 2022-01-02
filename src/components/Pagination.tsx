import { useRouter } from "next/router";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

type PaginationProps = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  queryString: string | string[] | undefined;
};

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  font-family: "Ubuntu Mono", monospace;
  background: none;
  font-size: 1rem;
  border: none;
  color: var(--turquoise-200);
  transition: text-shadow 0.2s;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  svg {
    margin: 0 0.25rem;
  }

  &:disabled {
    color: var(--gray-200);
    cursor: not-allowed;
  }

  &:hover:enabled {
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const Pagination = ({
  hasNextPage,
  hasPreviousPage,
  queryString,
}: PaginationProps) => {
  const router = useRouter();
  return (
    <ButtonContainer>
      <PaginationButton
        disabled={!hasPreviousPage}
        onClick={() => router.push(`/posts?skip=${Number(queryString) - 5}`)}
      >
        <FiArrowLeft />
        Previous
      </PaginationButton>

      <PaginationButton
        disabled={!hasNextPage}
        onClick={() =>
          router.push(
            `/posts?skip=${queryString ? Number(queryString) + 5 : 5}`
          )
        }
      >
        Next
        <FiArrowRight />
      </PaginationButton>
    </ButtonContainer>
  );
};

export default Pagination;
