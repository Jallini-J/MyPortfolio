import express from "express";
import educationCtrl from "../controllers/education.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import requireAdmin from "../helpers/requireAdmin.js";

const router = express.Router();

// PUBLIC: List all qualifications
router.get("/api/qualifications", educationCtrl.list);

// PUBLIC: Get single qualification
router.get("/api/qualifications/:educationId", educationCtrl.read);

// ADMIN ONLY: Create qualification
router.post(
  "/api/qualifications",
  authCtrl.requireSignin,
  requireAdmin,
  educationCtrl.create
);

// ADMIN ONLY: Update qualification
router.put(
  "/api/qualifications/:educationId",
  authCtrl.requireSignin,
  requireAdmin,
  educationCtrl.update
);

// ADMIN ONLY: Delete qualification
router.delete(
  "/api/qualifications/:educationId",
  authCtrl.requireSignin,
  requireAdmin,
  educationCtrl.remove
);

// Middleware to load education by ID
router.param("educationId", educationCtrl.educationByID);

export default router;
