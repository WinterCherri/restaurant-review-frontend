import React from 'react';

import './Dashboard.css';

const Dashboard = props => {
  return (<header className="main-dashboard">
    <div className='padded-box'>
        <h1 className='reviews-number'>
          36 
          {/* this data will be brought in through props */}
        </h1>
        <p>
          reviews in the queue
        </p>
    </div>
  </header>);
};

export default Dashboard;
