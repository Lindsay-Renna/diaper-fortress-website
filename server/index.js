import express from "express";
import cors from "cors";
import "dotenv/config";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("MongoDB connected")).catch((err)=>console.error("MongoDB connection error:",err));

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);

const PORT = process.env.PORT || 8080;

app.get("/api", (req, res) => {
	res.send("Welcome to the Mytharra API");
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
