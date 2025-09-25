import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const CoordinatorDashboard = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'companies', icon: '🏢', label: 'Companies' },
    { id: 'students', icon: '👥', label: 'Students' },
    { id: 'applications', icon: '📋', label: 'Applications' },
    { id: 'reports', icon: '📊', label: 'Reports' },
    { id: 'settings', icon: '⚙️', label: 'Settings' }
  ];

  const stats = [
    { 
      icon: '👥', 
      value: '127', 
      label: 'Active Students',
      bgColor: '#75f909ff',
      iconColor: '#2b6cb0'
    },
    { 
      icon: '🏢', 
      value: '23', 
      label: 'Partner Companies',
      bgColor: '#f0fff4',
      iconColor: '#2f855a'
    },
    { 
      icon: '📝', 
      value: '45', 
      label: 'Pending Applications',
      bgColor: '#fef5e7',
      iconColor: '#d69e2e'
    },
    { 
      icon: '📊', 
      value: '89%', 
      label: 'Placement Rate',
      bgColor: '#e6fffa',
      iconColor: '#38b2ac'
    }
  ];

  const companies = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      industry: 'Technology',
      activeSlots: 5,
      placements: 15,
      rating: 4.9,
      status: 'active'
    },
    {
      id: 2,
      name: 'DataFlow Solutions',
      industry: 'IT Services',
      activeSlots: 3,
      placements: 12,
      rating: 4.7,
      status: 'active'
    }
  ];

  const students = [
    {
      id: 1,
      name: 'John Smith',
      studentId: '2021-12345',
      course: 'Computer Engineering',
      year: '4th Year',
      status: 'Active OJT',
      company: 'TechCorp Inc.',
      progress: 65
    },
    {
      id: 2,
      name: 'Maria Garcia',
      studentId: '2021-23456',
      course: 'Computer Science',
      year: '4th Year',
      status: 'Applying',
      company: '-',
      progress: 0
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'New Applications Received',
      description: '5 students applied for TechCorp positions',
      time: '2 hours ago',
      type: 'application'
    },
    {
      id: 2,
      title: 'Company Partnership Update',
      description: 'DataFlow Solutions posted 3 new positions',
      time: '4 hours ago',
      type: 'company'
    }
  ];

  const renderDashboardContent = () => {
    switch (activeSection) {
      case 'companies':
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">Partner Companies</h1>
              <p className="page-subtitle">Manage company partnerships</p>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Company Directory</h3>
                <button className="btn btn-success">Add New Company</button>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>Industry</th>
                      <th>Active Slots</th>
                      <th>Rating</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companies.map(company => (
                      <tr key={company.id}>
                        <td>{company.name}</td>
                        <td>{company.industry}</td>
                        <td>{company.activeSlots}</td>
                        <td>⭐ {company.rating}</td>
                        <td>
                          <span className={`status status-${company.status}`}>
                            Active
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-secondary" style={{ fontSize: '0.8em', padding: '4px 8px' }}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'students':
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">Student Management</h1>
              <p className="page-subtitle">Monitor student progress</p>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Student Directory</h3>
                <button className="btn btn-secondary">Export Data</button>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Student ID</th>
                      <th>Course</th>
                      <th>Status</th>
                      <th>Company</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.studentId}</td>
                        <td>{student.course}</td>
                        <td>
                          <span className={`status ${
                            student.status === 'Active OJT' ? 'status-active' :
                            student.status === 'Completed' ? 'status-approved' : 'status-pending'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td>{student.company}</td>
                        <td>
                          {student.progress > 0 ? `${student.progress}%` : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'applications':
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">Application Management</h1>
              <p className="page-subtitle">Review student applications</p>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Pending Applications</h3>
                <button className="btn btn-secondary">View All</button>
              </div>
              <div className="card-body">
                <div style={{ padding: '20px', textAlign: 'center', color: '#718096' }}>
                  <p>No pending applications at this time</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">Reports & Analytics</h1>
              <p className="page-subtitle">Generate program reports</p>
            </div>
            
            <div className="stats-grid">
              <div className="card">
                <div className="card-body">
                  <h4 style={{ color: '#2d3748', marginBottom: '15px' }}>Success Rate</h4>
                  <div style={{ fontSize: '2.5em', color: '#38b2ac', fontWeight: 'bold' }}>89%</div>
                  <p style={{ color: '#718096' }}>Students successfully placed</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">System Settings</h1>
              <p className="page-subtitle">Configure OJT program settings</p>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">General Settings</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Minimum OJT Hours</label>
                  <input type="number" className="form-input" defaultValue="400" />
                </div>
                <button className="btn btn-success">Save Settings</button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <div className="page-header">
              <h1 className="page-title">Coordinator Dashboard</h1>
              <p className="page-subtitle">Manage OJT programs and monitor progress.</p>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                  <div className="card-body" style={{ padding: '25px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5em',
                      marginBottom: '15px',
                      background: stat.bgColor,
                      color: stat.iconColor
                    }}>
                      {stat.icon}
                    </div>
                    <div style={{
                      fontSize: '2em',
                      fontWeight: 'bold',
                      color: '#2d3748',
                      marginBottom: '5px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      color: '#718096',
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="content-grid">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recent Activities</h3>
                  <button className="btn btn-secondary">View All</button>
                </div>
                <div className="card-body">
                  {activities.map(activity => (
                    <div key={activity.id} style={{ 
                      marginBottom: '15px', 
                      padding: '15px', 
                      background: '#f7fafc', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ color: '#2d3748', marginBottom: '5px' }}>{activity.title}</h4>
                      <p style={{ color: '#718096', fontSize: '0.9em', marginBottom: '5px' }}>
                        {activity.description}
                      </p>
                      <small style={{ color: '#a0aec0' }}>{activity.time}</small>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Quick Actions</h3>
                </div>
                <div className="card-body">
                  <button 
                    className="btn btn-success" 
                    style={{ width: '100%', marginBottom: '10px' }}
                    onClick={() => setActiveSection('companies')}
                  >
                    Add New Company
                  </button>
                  <button 
                    className="btn btn-secondary" 
                    style={{ width: '100%', marginBottom: '10px' }}
                    onClick={() => setActiveSection('applications')}
                  >
                    Review Applications
                  </button>
                  <button 
                    className="btn btn-secondary" 
                    style={{ width: '100%' }}
                    onClick={() => setActiveSection('reports')}
                  >
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      title="Coordinator Portal"
      user={user}
      onLogout={onLogout}
      sidebarItems={sidebarItems}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      icon="👨‍🏫"
    >
      {renderDashboardContent()}
    </DashboardLayout>
  );
};

export default CoordinatorDashboard;