import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { register } from "../utils/api";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);
      await register({ username, email, password });
      setSuccess("Registration successful. You can now login.");
      setTimeout(() => navigate("/login"), 700);
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="auth__wrapper">
              <h2>Register</h2>

              <Form onSubmit={submitHandler}>
                <FormGroup>
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>

                <div className="auth__actions">
                  <Button className="btn primary_btn" type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create account"}
                  </Button>
                  <span>
                    Already have an account? <Link to="/login">Login</Link>
                  </span>
                </div>

                {error && <div className="auth__error">{error}</div>}
                {success && <div className="auth__success">{success}</div>}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
