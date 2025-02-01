
import React, { useState, useEffect } from 'react';
import { getAnalytics } from '../services/analytics';

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnalytics();
      setAnalyticsData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <ul>
        {analyticsData.map((item, index) => (
          <li key={index}>
            {item.event_type} - {item.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsDashboard;