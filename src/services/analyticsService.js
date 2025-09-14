// social-media-dashboard/src/services/analyticsService.js

const fetchKeyMetrics = async () => {
  // Simulate API call delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        totalReach: '12.5K',
        engagementRate: '3.2%',
        followerGrowth: '+500',
        postsScheduled: '15',
      });
    }, 500);
  });
};

const fetchRecentPostPerformance = async () => {
  // Simulate API call delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1', likes: '1.2K', comments: '50', shares: '20' },
        { id: 2, title: 'Post 2', likes: '800', comments: '30', shares: '10' },
        { id: 3, title: 'Post 3', likes: '2.1K', comments: '120', shares: '45' },
      ]);
    }, 700);
  });
};

export { fetchKeyMetrics, fetchRecentPostPerformance };