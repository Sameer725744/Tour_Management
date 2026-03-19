import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import './admin.css';
import tourData from '../assets/data/tours';

const AdminDashboard = () => {
  const [tours] = useState(tourData);
  
  // Calculate stats
  const totalTours = tours.length;
  const featuredTours = tours.filter(t => t.featured).length;
  const totalRevenue = tours.reduce((sum, tour) => sum + tour.price, 0);
  const avgRating = (tours.reduce((sum, tour) => sum + tour.avgRating, 0) / totalTours).toFixed(1);

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <section className="admin-header">
        <Container>
          <Row>
            <Col lg="12">
              <div className="admin-header-content">
                <h1>🔐 Admin Panel</h1>
                <p>Manage your tour management system</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Cards */}
      <section className="stats-section">
        <Container>
          <Row>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <h3>{totalTours}</h3>
                  <p>Total Tours</p>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <h3>{featuredTours}</h3>
                  <p>Featured Tours</p>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-content">
                  <h3>${totalRevenue.toLocaleString()}</h3>
                  <p>Total Revenue</p>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">❤️</div>
                <div className="stat-content">
                  <h3>{avgRating}</h3>
                  <p>Avg Rating</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tours Management */}
      <section className="tours-management">
        <Container>
          <Row>
            <Col lg="12">
              <div className="section-header">
                <Subtitle text="Tour Management" />
                <h2>All Tours</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card className="tours-table-card">
                <div className="table-responsive">
                  <Table className="tours-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>City</th>
                        <th>Price</th>
                        <th>Distance</th>
                        <th>Rating</th>
                        <th>Featured</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tours.map((tour) => (
                        <tr key={tour.id}>
                          <td>#{tour.id}</td>
                          <td>
                            <div className="tour-name">
                              <img src={tour.photo} alt={tour.title} className="tour-thumb" />
                              <span>{tour.title}</span>
                            </div>
                          </td>
                          <td>{tour.city}</td>
                          <td>${tour.price}</td>
                          <td>{tour.distance} km</td>
                          <td>
                            <div className="rating-badge">
                              ⭐ {tour.avgRating}
                            </div>
                          </td>
                          <td>
                            {tour.featured ? (
                              <span className="badge badge-featured">Yes</span>
                            ) : (
                              <span className="badge badge-normal">No</span>
                            )}
                          </td>
                          <td>
                            <div className="action-buttons">
                              <Button className="btn-edit">Edit</Button>
                              <Button className="btn-delete">Delete</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <Container>
          <Row>
            <Col lg="12">
              <div className="section-header">
                <Subtitle text="Quick Actions" />
                <h2>Admin Tools</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="4" md="6">
              <Card className="action-card">
                <div className="action-icon">➕</div>
                <h3>Add New Tour</h3>
                <p>Create and publish a new tour package</p>
                <Button className="primary__btn">Add Tour</Button>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="action-card">
                <div className="action-icon">📊</div>
                <h3>View Analytics</h3>
                <p>Check performance and statistics</p>
                <Button className="primary__btn">View Stats</Button>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="action-card">
                <div className="action-icon">⚙️</div>
                <h3>Settings</h3>
                <p>Configure system settings</p>
                <Button className="primary__btn">Settings</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AdminDashboard;
