import UpdateSettingsForm from "../components/settings/UpdateSettingsForm";
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

export const Settings = function () {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
};
