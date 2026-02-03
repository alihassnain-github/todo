import dotenv from "dotenv";
import express from "express";

import todoRoutes from "./routes/todo.routes.js";

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/v1/todos", todoRoutes);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
