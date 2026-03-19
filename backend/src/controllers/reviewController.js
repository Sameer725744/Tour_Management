import Review from "../../models/Review.js";
import Tour from "../../models/Tour.js";

export async function createReview(req, res, next) {
  try {
    const { tourId, reviewText, rating } = req.body || {};

    if (!tourId || !reviewText) {
      return res.status(400).json({ message: "tourId and reviewText are required" });
    }

    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    const review = await Review.create({
      productId: tourId, // kept for compatibility with existing schema
      username: req.user?.username || "anonymous",
      reviewText,
      rating: typeof rating === "number" ? rating : Number(rating || 0),
    });

    tour.reviews.push(review._id);
    await tour.save();

    return res.status(201).json({ data: review });
  } catch (err) {
    return next(err);
  }
}

export async function getReviewsForTour(req, res, next) {
  try {
    const { tourId } = req.params;

    const data = await Review.find({ productId: tourId }).sort({ createdAt: -1 });
    return res.json({ data });
  } catch (err) {
    return next(err);
  }
}
