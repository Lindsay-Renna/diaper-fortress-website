import express from "express";
import cors from "cors";
import "dotenv/config";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
);

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 8080;

app.get("/api", (req, res) => {
	res.send("Welcome to the Diaper Fortress API");
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
