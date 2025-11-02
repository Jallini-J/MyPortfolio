import express from "express";
import educationCtrl from "../controllers/education.controller.js";

const router = express.Router();

// CRUD routes
router.route("/api/qualifications").post(educationCtrl.create);
router.route("/api/qualifications").get(educationCtrl.list);

router
  .route("/api/qualifications/:educationId")
  .get(educationCtrl.read)
  .put(educationCtrl.update)
  .delete(educationCtrl.remove);

// Middleware to handle :educationId
router.param("educationId", educationCtrl.educationByID);

export default router;
