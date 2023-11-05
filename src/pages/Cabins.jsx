/* eslint-disable no-unused-vars */
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";
import { CabinTable } from "../components/cabins/CabinTable";
import { useState } from "react";
import { CreateCabinForm } from "../components/cabins/CreateCabinForm";
import { Button } from "../ui/Button/Button";

export const Cabins = function () {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((val) => !val)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
