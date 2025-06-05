import React from 'react';
import LeftSideLinks from './LeftSideLinks';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-6 gap-10'>
          <div className='col-span-2'> 
            <LeftSideLinks/>
          </div>
          <div className='col-span-4'> Right side</div>
        </div>
    );
};

export default Dashboard;