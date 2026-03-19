import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import './admin.css';
import { API_BASE_URL } from '../utils/api';

const AdminDashboard = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTour, setNewTour] = useState({
    title: '',
    city: '',
    address: '',
    distance: '',
    photo: '',
    desc: '',
    price: '',
    maxGroupSize: '',
    featured: false
  });

  // Fetch tours from MongoDB
  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/tours`);
      if (!response.ok) throw new Error('Failed to fetch tours');
      const result = await response.json();
      setTours(result.data || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tours:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Calculate stats
  const totalTours = tours.length;
  const featuredTours = tours.filter(t => t.featured).length;
  const totalRevenue = tours.reduce((sum, tour) => sum + tour.price, 0);
  const avgRating = totalTours > 0 ? (tours.reduce((sum, tour) => sum + (tour.avgRating || 0), 0) / totalTours).toFixed(1) : '0.0';

  // Delete tour
  const handleDelete = async (tourId) => {
    if (!window.confirm('Are you sure you want to delete this tour?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/tours/${tourId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) throw new Error('Failed to delete tour');
      
      // Refresh the list
      fetchTours();
      alert('Tour deleted successfully!');
    } catch (err) {
      alert('Error deleting tour: ' + err.message);
      console.error('Error deleting tour:', err);
    }
  };

  // Add new tour
  const handleAddTour = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/tours`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newTour),
      });
      
      if (!response.ok) throw new Error('Failed to add tour');
      
      // Refresh the list
      fetchTours();
      setShowAddForm(false);
      setNewTour({
        title: '',
        city: '',
        address: '',
        distance: '',
        photo: '',
        desc: '',
        price: '',
        maxGroupSize: '',
        featured: false
      });
      alert('Tour added successfully!');
    } catch (err) {
      alert('Error adding tour: ' + err.message);
      console.error('Error adding tour:', err);
    }
  };

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
                  <h3>{loading ? '...' : totalTours}</h3>
                  <p>Total Tours</p>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <h3>{loading ? '...' : featuredTours}</h3>
                  <p>Featured Tours</p>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-content">
                  <h3>${loading ? '...' : totalRevenue.toLocaleString()}</h3>
                  <p>Total Revenue</p>
                </div>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="stat-card">
                <div className="stat-icon">❤️</div>
                <div className="stat-content">
                  <h3>{loading ? '...' : avgRating}</h3>
                  <p>Avg Rating</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Loading & Error States */}
      {loading && (
        <Container>
          <Row>
            <Col lg="12">
              <Card style={{ padding: '40px', textAlign: 'center' }}>
                <h3>Loading tours from database...</h3>
              </Card>
            </Col>
          </Row>
        </Container>
      )}

      {error && (
        <Container>
          <Row>
            <Col lg="12">
              <Card style={{ padding: '20px', backgroundColor: '#ffe6e6', border: '1px solid #ff0000' }}>
                <h3 style={{ color: '#cc0000' }}>❌ Error: {error}</h3>
                <Button onClick={fetchTours} className="primary__btn">Retry</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      )}

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
                      {loading ? (
                        <tr>
                          <td colSpan="8" style={{ textAlign: 'center', padding: '40px' }}>
                            <h3>Loading...</h3>
                          </td>
                        </tr>
                      ) : error ? (
                        <tr>
                          <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#cc0000' }}>
                            Failed to load tours. Please try again.
                          </td>
                        </tr>
                      ) : tours.length === 0 ? (
                        <tr>
                          <td colSpan="8" style={{ textAlign: 'center', padding: '40px' }}>
                            <h3>No tours found in database</h3>
                            <p>Add your first tour using the "Add New Tour" feature below</p>
                          </td>
                        </tr>
                      ) : (
                        tours.map((tour) => (
                          <tr key={tour._id || tour.id}>
                            <td>#{(tour._id || tour.id).slice(-6)}</td>
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
                                ⭐ {tour.avgRating || 'N/A'}
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
                                <Button className="btn-edit" onClick={() => alert('Edit functionality coming soon')}>Edit</Button>
                                <Button className="btn-delete" onClick={() => handleDelete(tour._id || tour.id)}>Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
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
                <Button className="primary__btn" onClick={() => setShowAddForm(true)}>Add Tour</Button>
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

      {/* Add Tour Modal/Form */}
      {showAddForm && (
        <section className="add-tour-modal">
          <Container>
            <Row>
              <Col lg="8" md="10" className="mx-auto">
                <Card className="add-tour-form">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2>➕ Add New Tour</h2>
                    <Button color="danger" onClick={() => setShowAddForm(false)}>✕ Close</Button>
                  </div>
                  
                  <form onSubmit={handleAddTour}>
                    <Row>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>Title *</label>
                          <input
                            type="text"
                            value={newTour.title}
                            onChange={(e) => setNewTour({...newTour, title: e.target.value})}
                            placeholder="Tour Title"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>City *</label>
                          <input
                            type="text"
                            value={newTour.city}
                            onChange={(e) => setNewTour({...newTour, city: e.target.value})}
                            placeholder="City"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>Address *</label>
                          <input
                            type="text"
                            value={newTour.address}
                            onChange={(e) => setNewTour({...newTour, address: e.target.value})}
                            placeholder="Address"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>Distance (km) *</label>
                          <input
                            type="number"
                            value={newTour.distance}
                            onChange={(e) => setNewTour({...newTour, distance: e.target.value})}
                            placeholder="Distance"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>Photo URL *</label>
                          <input
                            type="url"
                            value={newTour.photo}
                            onChange={(e) => setNewTour({...newTour, photo: e.target.value})}
                            placeholder="https://example.com/image.jpg"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>Price ($) *</label>
                          <input
                            type="number"
                            value={newTour.price}
                            onChange={(e) => setNewTour({...newTour, price: e.target.value})}
                            placeholder="99"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <div className="form-group">
                          <label>Max Group Size *</label>
                          <input
                            type="number"
                            value={newTour.maxGroupSize}
                            onChange={(e) => setNewTour({...newTour, maxGroupSize: e.target.value})}
                            placeholder="10"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="12">
                        <div className="form-group">
                          <label>Description *</label>
                          <textarea
                            value={newTour.desc}
                            onChange={(e) => setNewTour({...newTour, desc: e.target.value})}
                            placeholder="Describe the tour..."
                            rows="4"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg="12">
                        <div className="form-group checkbox-group">
                          <label>
                            <input
                              type="checkbox"
                              checked={newTour.featured}
                              onChange={(e) => setNewTour({...newTour, featured: e.target.checked})}
                            />
                            Mark as Featured Tour
                          </label>
                        </div>
                      </Col>
                    </Row>
                    
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                      <Button type="button" color="secondary" onClick={() => setShowAddForm(false)} style={{ marginRight: '10px' }}>Cancel</Button>
                      <Button type="submit" className="primary__btn">Add Tour</Button>
                    </div>
                  </form>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;
