import express from "express";
import { createReview, getReviewsForTour } from "../controllers/reviewController.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/:tourId", getReviewsForTour);
router.post("/", requireAuth, createReview);

export default router;
