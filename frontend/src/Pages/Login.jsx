import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { login } from "../utils/api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const data = await login({ email, password });

      // backend returns: { token, user }
      if (data?.token) localStorage.setItem("tm_token", data.token);
      if (data?.user) localStorage.setItem("tm_user", JSON.stringify(data.user));

      navigate("/home");
    } catch (err) {
      setError(err.message || "Login failed");
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
              <h2>Login</h2>

              <Form onSubmit={submitHandler}>
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
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                  <span>
                    Don’t have an account? <Link to="/register">Register</Link>
                  </span>
                </div>

                {error && <div className="auth__error">{error}</div>}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
