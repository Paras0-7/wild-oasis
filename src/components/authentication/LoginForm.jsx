import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/Form/FormRowVertical";
import Input from "../../ui/Input";
import { Button } from "../../ui/Button/Button";
import { useLogin } from "../../hooks/useLogin";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/spinner/SpinnerMini";

export function LoginForm() {
  const [email, setEmail] = useState("parasr937@gmail.com");
  const [password, setPassword] = useState("87654321");

  const { isLoading, loginUser } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return toast.error("Please enter credentials");
    loginUser({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input type="password" disabled={isLoading} id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}
