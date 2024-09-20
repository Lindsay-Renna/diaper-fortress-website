import { useState, useEffect } from "react";

function Counter() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	return (
		<div className="flex flex-col justify-center items-center gap-8 p-8 w-full">
			<div className="flex gap-8">
				<button
					onClick={() => setIsRunning(true)}
					className="bg-green-600 rounded-lg p-4"
				>
					START
				</button>
				<button
					onClick={() => setTime(0)}
					className="bg-blue-600 rounded-lg p-4"
				>
					RESET
				</button>
				<button
					onClick={() => setIsRunning(false)}
					className="bg-red-600 rounded-lg p-4"
				>
					STOP
				</button>
			</div>
			<h1>
				{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
				{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
				{("0" + ((time / 10) % 100)).slice(-2)}
			</h1>
		</div>
	);
}

export default Counter;
