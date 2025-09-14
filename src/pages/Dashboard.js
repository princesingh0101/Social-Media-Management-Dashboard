import React, { useState, useEffect } from 'react';
import { fetchKeyMetrics, fetchRecentPostPerformance } from '../services/analyticsService';

const Dashboard = () => {
  const [keyMetrics, setKeyMetrics] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnalyticsData = async () => {
      try {
        const metrics = await fetchKeyMetrics();
        const posts = await fetchRecentPostPerformance();
        setKeyMetrics(metrics);
        setRecentPosts(posts);
      } catch (err) {
        setError('Failed to load analytics data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAnalyticsData();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading analytics...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  return (
    <div className="dashboard-page">
      <h2>Dashboard Overview</h2>
      <p>Welcome to your social media dashboard! Here's a quick look at your performance.</p>

      <section className="key-metrics mb-4">
        <h3>Key Metrics at a Glance</h3>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Reach</h5>
                <p className="card-text display-4">{keyMetrics.totalReach}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Engagement Rate</h5>
                <p className="card-text display-4">{keyMetrics.engagementRate}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Follower Growth</h5>
                <p className="card-text display-4">{keyMetrics.followerGrowth}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Posts Scheduled</h5>
                <p className="card-text display-4">{keyMetrics.postsScheduled}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-analytics">
        <h3>Detailed Post Analytics</h3>
        <p>Here you will find detailed analytics for individual posts.</p>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recent Post Performance</h5>
            <ul className="list-group list-group-flush">
              {recentPosts.map(post => (
                <li key={post.id} className="list-group-item">
                  {post.title}: Likes ({post.likes}), Comments ({post.comments}), Shares ({post.shares})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;