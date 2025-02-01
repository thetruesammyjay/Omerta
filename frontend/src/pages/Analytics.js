import React, { useState, useEffect } from 'react';
import { getAnalytics } from '../services/analytics';
import AnalyticsChart from '../components/AnalyticsChart';
import '../styles/dashboard.css';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAnalytics();
            setAnalyticsData(data);
        };
        fetchData();
    }, []);

    // Prepare data for the chart
    const chartData = {
        labels: analyticsData.map((item) => item.timestamp),
        values: analyticsData.map((item) => 1), // Assuming each event counts as 1
    };

    return (
        <div className="dashboard">
            <h2>Analytics Dashboard</h2>

            {/* Chart Section */}
            <div className="chart-container">
                <AnalyticsChart data={chartData} />
            </div>

            {/* Table Section */}
            <table>
                <thead>
                    <tr>
                        <th>Event Type</th>
                        <th>Timestamp</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {analyticsData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.event_type}</td>
                            <td>{item.timestamp}</td>
                            <td>{item.user ? item.user.username : 'Anonymous'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Analytics;