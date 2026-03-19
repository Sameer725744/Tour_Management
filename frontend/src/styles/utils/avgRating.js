const calculatorAvgRating = (reviews = []) => {
  // Support both shapes:
  // - [{ rating: 4 }, ...] (backend-style)
  // - [4, 5, ...] (current static seed data)
  const normalized = (reviews || []).map((r) => {
    if (typeof r === "number") return r;
    if (r && typeof r.rating === "number") return r.rating;
    return 0;
  });

  const totalRating = normalized.reduce((acc, rating) => acc + rating, 0);
  const avgRating = normalized.length === 0 ? "" : (totalRating / normalized.length).toFixed(1);

  return {
    totalRating,
    avgRating,
  };
};

export default calculatorAvgRating;
