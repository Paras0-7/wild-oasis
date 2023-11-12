/* eslint-disable no-unused-vars */
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";
import { CabinTable } from "../components/cabins/CabinTable";
import { AddCabin } from "../components/cabins/AddCabin";
import { CabinTableOperations } from "../components/cabins/CabinTableOperations";

export const Cabins = function () {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
