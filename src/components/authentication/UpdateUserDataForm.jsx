/* eslint-disable no-unused-vars */
import { useState } from "react";

import { FormRow } from "../../ui/Form/FormRow";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import { Button } from "../../ui/Button/Button";
import { useUser } from "../../hooks/useUser";
import { useUpdateUser } from "../../hooks/useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { name: currentFullName },
    },
  } = useUser();

  const { updateUser, isLoading } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(avatar);
    if (fullName) {
      updateUser(
        { name: fullName, avatar },
        {
          onSuccess: () => {
            setAvatar(null), e.target.reset();
          },
        }
      );
    }
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  console.log(isLoading);

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} id="fullName" disabled={isLoading} />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput id="avatar" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} disabled={isLoading} />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary" disabled={isLoading} onClick={handleCancel}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
