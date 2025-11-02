import express from "express";
import projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

// CRUD routes
router.route("/api/projects").post(projectCtrl.create);
router.route("/api/projects").get(projectCtrl.list);

router
  .route("/api/projects/:projectId")
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

// Middleware to handle :projectId
router.param("projectId", projectCtrl.projectByID);

export default router;
