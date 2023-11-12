/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import { Spinner } from "../../ui/spinner/Spinner";
import { CabinRow } from "./CabinRow";
import { Menus } from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

export const CabinTable = function () {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  const sortBy = searchParams.get("sortBy") || "";
  const [field, order] = sortBy.split("-");
  const modifier = order === "asc" ? 1 : -1;
  let filteredCabins = cabins;

  if (order) {
    filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);
  }
  return (
    <Menus>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {filteredCabins.map((cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
      </Table>
    </Menus>
  );
};
