import LoginPanel from "../Components/LoginPanel";
import axios from "axios";
import { useState } from "react";

function LoginPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authorizeUser = await () => {
try {
    
} catch (error) {
    console.log(error, "message:Error logging in")
    
}
    }

	return (
		<div>
			<LoginPanel />
		</div>
	);
}

export default LoginPage;
