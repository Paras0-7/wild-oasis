/* eslint-disable no-unused-vars */
// Email regex: /\S+@\S+\.\S+/

import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import Form from "../../ui/Form";
import { FormRow } from "../../ui/Form/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "../../hooks/useSignUp";

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { isLoading, signUp } = useSignUp();
  const submitHandler = function (data) {
    const { fullName, email, password } = data;
    signUp({ fullName, email, password }, { onSettled: reset });
  };
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName", { required: "This field is required" })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" {...register("password", { required: "This field is required", minLength: { value: 8, message: "Password must be of minimum 8 characters" } })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", { required: "This field is required", validate: (value) => getValues().password === value || "Password need to match" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
