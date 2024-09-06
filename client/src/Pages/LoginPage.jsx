import LoginPanel from "../Components/LoginPanel";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function LoginPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {}, []);

	// If the user is logged in, redirect to the admin page
	if (isLoggedIn) {
		return <Navigate to="/admin" />;
	}

	// Otherwise, show the login form
	return (
		<div className="flex flex-col grow">
			<LoginPanel />
		</div>
	);
}

export default LoginPage;
