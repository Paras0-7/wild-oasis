/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.active ? " var(--color-brand-600)" : "var(--color-grey-50)")};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export const Pagination = function ({ count }) {
  const [searchParams, setSearchParam] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");

  const pageCount = Math.ceil(count / 10);
  let next = currentPage === pageCount;
  let prev = currentPage === 1;
  const nextPage = function () {
    next = currentPage === pageCount;

    if (next) return;

    const nxtPage = currentPage + 1;
    searchParams.set("page", nxtPage);
    setSearchParam(searchParams);
  };

  const previousPage = function () {
    prev = currentPage === 1;

    if (prev) return;

    const prevPage = currentPage - 1;
    searchParams.set("page", prevPage);
    setSearchParam(searchParams);
  };
  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * 10 + 1}</span> to <span>{currentPage === pageCount ? count : currentPage * 10}</span> of <span>{count}</span> results
      </P>
      <Buttons>
        {!prev && (
          <PaginationButton onClick={previousPage}>
            <HiChevronLeft />
            <span>Previous</span>
          </PaginationButton>
        )}
        {!next && (
          <PaginationButton onClick={nextPage}>
            <span>Next</span>
            <HiChevronRight />
          </PaginationButton>
        )}
      </Buttons>
    </StyledPagination>
  );
};
