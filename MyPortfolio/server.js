import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./server/routes/project.routes.js";
import educationRoutes from "./server/routes/education.routes.js";
import userRoutes from "./server/routes/user.routes.js";
import contactRoutes from "./server/routes/contact.routes.js";
import authRoutes from "./server/routes/auth.routes.js";



dotenv.config();

const app = express();

app.use(express.json());

app.use("/", authRoutes);
app.use(contactRoutes);   // /api/contacts
app.use(userRoutes);      // /api/users
app.use(projectRoutes);   // /api/projects
app.use(educationRoutes); // /api/qualifications (or /api/education if you named it that)

// Connect to MongoDB with explicit options and better error logging
mongoose.connect(process.env.MONGO_URI, {
  // Mongoose 6+ uses these by default but explicit helps older hosts
  // and allows adjusting the server selection timeout for diagnostics
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // increase timeout to 30s for slow networks
})
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => {
    console.error("MongoDB connection error:", err && err.message ? err.message : err);
    console.error("Check MONGO_URI, network access, and Atlas IP whitelist (if using Atlas).");
    // Keep process alive but log the issue; you can also exit process if desired
  });

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
