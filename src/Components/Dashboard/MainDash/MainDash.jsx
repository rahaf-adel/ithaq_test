import React from 'react';
import Cards from '../Cards/Cards';
import './maindash.css';
import EmpTable from '../Table/EmpTable';
import JobTable from '../Table/JobTable';

export const MainDash = () => {
  return (
    <div className="main-dash">
        <h1 style={{fontSize: "25px"}}>Dashboard</h1>
        <Cards />
        <EmpTable />
        <JobTable />
    </div>
  )
}
export default MainDash;