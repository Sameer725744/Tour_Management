import Tour from "../../models/Tour.js";

export async function getTours(req, res, next) {
  try {
    const page = Math.max(0, Number(req.query.page || 0));
    const limit = Math.min(50, Math.max(1, Number(req.query.limit || 8)));

    const [total, data] = await Promise.all([
      Tour.countDocuments(),
      Tour.find().sort({ createdAt: -1 }).skip(page * limit).limit(limit),
    ]);

    return res.json({ total, page, limit, data });
  } catch (err) {
    return next(err);
  }
}

export async function getTourById(req, res, next) {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id).populate("reviews");
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    return res.json({ data: tour });
  } catch (err) {
    return next(err);
  }
}

export async function searchTours(req, res, next) {
  try {
    const { city, distance, maxGroupSize } = req.query;

    const filter = {};
    if (city) {
      filter.city = { $regex: city, $options: "i" };
    }
    if (distance !== undefined && distance !== "") {
      filter.distance = { $lte: Number(distance) };
    }
    if (maxGroupSize !== undefined && maxGroupSize !== "") {
      filter.maxGroupSize = { $gte: Number(maxGroupSize) };
    }

    const data = await Tour.find(filter).sort({ createdAt: -1 });
    return res.json({ data });
  } catch (err) {
    return next(err);
  }
}

export async function getFeaturedTours(req, res, next) {
  try {
    const data = await Tour.find({ featured: true }).sort({ createdAt: -1 }).limit(8);
    return res.json({ data });
  } catch (err) {
    return next(err);
  }
}

export async function createTour(req, res, next) {
  try {
    const payload = req.body || {};

    const required = ["title", "city", "address", "distance", "photo", "desc", "price", "maxGroupSize"];
    for (const key of required) {
      if (payload[key] === undefined || payload[key] === null || payload[key] === "") {
        return res.status(400).json({ message: `${key} is required` });
      }
    }

    const created = await Tour.create(payload);
    return res.status(201).json({ data: created });
  } catch (err) {
    return next(err);
  }
}

export async function updateTour(req, res, next) {
  try {
    const { id } = req.params;
    const updated = await Tour.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Tour not found" });
    return res.json({ data: updated });
  } catch (err) {
    return next(err);
  }
}

export async function deleteTour(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await Tour.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Tour not found" });
    return res.json({ message: "Deleted" });
  } catch (err) {
    return next(err);
  }
}
