import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";
import { CabinTable } from "../components/cabins/CabinTable";

export const Cabins = function () {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
