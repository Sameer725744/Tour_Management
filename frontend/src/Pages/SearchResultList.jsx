import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Link, useSearchParams } from "react-router-dom";

import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";

import tourData from "../assets/data/tours";
import { searchTours } from "../utils/api";
import "../styles/auth.css";

const SearchResultList = () => {
  const [searchParams] = useSearchParams();

  const city = searchParams.get("city") || "";
  const distance = searchParams.get("distance") || "";
  const maxGroupSize = searchParams.get("maxGroupSize") || "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      setError("");
      setLoading(true);

      try {
        // Try backend first
        const data = await searchTours({ city, distance, maxGroupSize });
        // backend returns { data: [...] } OR [...] depending on implementation
        const items = Array.isArray(data) ? data : data?.data || [];
        if (mounted) setResults(items);
      } catch (err) {
        // Fallback to static data so the UI still works without backend
        const filtered = (tourData || []).filter((t) => {
          const okCity = city ? String(t.city).toLowerCase().includes(city.toLowerCase()) : true;
          const okDistance = distance ? Number(t.distance) <= Number(distance) : true;
          const okGroup = maxGroupSize ? Number(t.maxGroupSize) >= Number(maxGroupSize) : true;
          return okCity && okDistance && okGroup;
        });

        if (mounted) {
          setResults(filtered);
          setError(err.message || "Search failed (showing local results)");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();

    return () => {
      mounted = false;
    };
  }, [city, distance, maxGroupSize]);

  return (
    <>
      <CommonSection title="Search Results" />

      <section>
        <Container>
          <Row className="mb-4">
            <Col lg="12">
              <div>
                <strong>Filters:</strong> {city || "Any"} | Distance ≤ {distance || "Any"} | Group ≥ {maxGroupSize || "Any"}
              </div>
              <div>
                <Link to="/tour">Back to all tours</Link>
              </div>
              {error && <div className="auth__error">{error}</div>}
            </Col>
          </Row>

          {loading ? (
            <Row>
              <Col lg="12" className="text-center">
                <Spinner color="primary" />
              </Col>
            </Row>
          ) : (
            <Row>
              {results?.length ? (
                results.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour._id || tour.id}>
                    <TourCard tour={{ ...tour, id: tour._id || tour.id }} />
                  </Col>
                ))
              ) : (
                <Col lg="12">
                  <h5>No tours found.</h5>
                </Col>
              )}
            </Row>
          )}
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default SearchResultList;
