import express from "express";
import {
  createTour,
  deleteTour,
  getFeaturedTours,
  getTourById,
  getTours,
  searchTours,
  updateTour,
} from "../controllers/tourController.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getTours);
router.get("/featured", getFeaturedTours);
router.get("/search", searchTours);
router.get("/:id", getTourById);

// Admin-only writes (optional)
router.post("/", requireAuth, requireRole("admin"), createTour);
router.put("/:id", requireAuth, requireRole("admin"), updateTour);
router.delete("/:id", requireAuth, requireRole("admin"), deleteTour);

export default router;
