import React from 'react';

import './Dashboard.css';
import ChatGPTComponents from '../../components/chatgpt';

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
    <ChatGPTComponents/> /* */
  </header>);
};

export default Dashboard;
