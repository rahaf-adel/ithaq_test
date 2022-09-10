import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MainDash from './MainDash/MainDash';
import RightSide from './Rightside/RightSide';
import "./dashboard.css";

const Dashboard = () => {


    return (
        <main>
        <div className="dashboard">
            <div className="dashboard-glass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
        </main>
    )
}

export default Dashboard
