import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = (e) => {
    e?.preventDefault?.();

    const city = locationRef.current.value?.trim();
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (city === "" || distance === "" || maxGroupSize === "") {
      alert("All fields are required!");
      return;
    }

    const params = new URLSearchParams({ city, distance, maxGroupSize });
    navigate(`/tour/search?${params.toString()}`);
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4" onSubmit={searchHandler}>
          <FormGroup className="d-flex gap-3 form_group form_roup-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={locationRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_roup-last">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m" ref={distanceRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_roup-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <button className="search_icon" type="submit" aria-label="search">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
