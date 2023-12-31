import { useAuth0 } from "@auth0/auth0-react";
import { BasicButton } from "../../components"
import { Children } from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    loginWithRedirect({
      scope: "read:users write:users",
    });
  };

  return (
    <BasicButton
      onClick={handleLogin}
      style={{ textAlign: "center" }}
      sx={{
        display: "block",
      }}
      text="Sign In/Sign Up"
      color="primary.verydark"
      size="10"
      marginY='1'
    />

  );
};

export default LoginButton;
