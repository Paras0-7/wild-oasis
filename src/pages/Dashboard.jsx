import DashboardFilter from "../components/dashboard/DashboardFilter";
import { DashboadLayout } from "../components/dashboard/DashboardLayout";
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

export const Dashboard = function () {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboadLayout />
    </>
  );
};
