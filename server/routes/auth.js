import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// Login Route
router.post("/login", (req, res) => {
	const { username, password } = req.body;

	// Check if the username and password match the environment variables
	if (
		username === process.env.ADMIN_USERNAME &&
		password === process.env.ADMIN_PASSWORD
	) {
		// Generate a JWT token
		const token = jwt.sign({ username }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		return res.json({ token });
	} else {
		// If the credentials are wrong
		return res.status(401).json({ message: "Invalid credentials" });
	}
});

// Middleware to authenticate JWT
export const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) return res.sendStatus(401); // If no token is found

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.sendStatus(403); // If token is invalid
		req.user = user; // Attach user info to the request
		next(); // Pass to the next middleware/route
	});
};

export default router;
