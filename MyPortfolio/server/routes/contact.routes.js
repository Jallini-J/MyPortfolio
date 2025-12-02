import express from "express";
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

// CRUD routes
router.route("/api/contacts").post(contactCtrl.create);
router.route("/api/contacts").get(contactCtrl.list);

router
  .route("/api/contacts/:contactId")
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

// Middleware to handle :contactId
router.param("contactId", contactCtrl.contactByID);

export default router;
