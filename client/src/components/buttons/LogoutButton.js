import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BasicButton from "./BasicButton";

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<BasicButton
			onClick={() =>
				logout({
					logoutParams: { returnTo: window.location.origin },
				})
			}
			sx={{
				display: "block",
			}}
			text="Log Out"
			color="primary.verydark"
		/>
	);
};

export default LogoutButton;
