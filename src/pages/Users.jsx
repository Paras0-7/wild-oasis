import SignupForm from "../components/authentication/SignupForm";
import { Heading } from "../ui/Heading";

export const NewUsers = function () {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
};
