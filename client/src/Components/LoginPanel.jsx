import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "./AlertBox";

const SERVER = import.meta.env.VITE_SERVER_URL;

function LoginPanel() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(SERVER+"/auth/login", {
				username,
				password,
			});

			if(res.data.token){
			localStorage.setItem("token", res.data.token);
			navigate("/admin");}


		} catch (err) {
			console.error("Invalid login", err);
			setError("Login attempt failed. Please provide correct credentials.");
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "username") {
		  setUsername(value);
		} else if (name === "password") {
		  setPassword(value);
		}
		setError(""); // Clear the error message
	  };

	return (
		<section className="bg-gray-50 dark:bg-stone-900 grow items-center justify-center">
			<div className="flex flex-col items-center justify-center px-6 py-14 mx-auto">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Please enter your credentials
						</h1>
						<form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
									placeholder="username"
									onChange={handleInputChange}
									value={username}
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
									required
									onChange={handleInputChange}
									value={password}
								/>
							</div>

							<button
								type="submit"
								className="w-full border-gray-300 border-2 text-black bg-primary-600 hover:bg-stone-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-stone-700 dark:focus:ring-primary-800 dark:text-white"
							>
								Sign in
							</button>
						</form>
						{error && (
							<AlertBox error={error}/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default LoginPanel;
