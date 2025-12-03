import express from "express";
import educationCtrl from "../controllers/education.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import requireAdmin from "../helpers/requireAdmin.js";

const router = express.Router();

// PUBLIC: List all education entries
router.get("/api/education", educationCtrl.list);

// PUBLIC: Get single education entry
router.get("/api/education/:id", educationCtrl.read);

// ADMIN ONLY: Create education
router.post(
  "/api/education",
  authCtrl.requireSignin,
  requireAdmin,
  educationCtrl.create
);

// ADMIN ONLY: Update education
router.put(
  "/api/education/:id",
  authCtrl.requireSignin,
  requireAdmin,
  educationCtrl.update
);

// ADMIN ONLY: Delete education
router.delete(
  "/api/education/:id",
  authCtrl.requireSignin,
  requireAdmin,
  educationCtrl.remove
);

// Middleware to load education by ID (param name 'id')
router.param("id", educationCtrl.educationByID);

export default router;
