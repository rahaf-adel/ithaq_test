import React from 'react'
import employee1 from "./Assets/Images/employee1.png";
import employee2 from "./Assets/Images/employee2.png";
import employee3 from "./Assets/Images/employee3.png";
import employee4 from "./Assets/Images/employee4.png";
import employee5 from "./Assets/Images/employee5.png";
import employee6 from "./Assets/Images/employee6.png";
import { CardGroup } from "react-bootstrap";
import Cards from "./EmployeeCardsAdmin";

function EmployeeAdmin() {
    const employees = [
        {
          img: employee1,
          name: "Fahad Osama",
          job: "Front End Developer",
          company: "SDAIA",
          linkedin: "https://www.linkedin.com/in/rahaf-alrowithi-87203116a/",
        },
        {
          img: employee2,
          name: "Farah Ahmad",
          job: "Back End Developer",
          company: "STC",
          linkedin: "https://www.linkedin.com/in/rahaf-alrowithi-87203116a/",
        },
        {
          img: employee3,
          name: "Ibrahim Khalid",
          job: "Full Stack Developer",
          company: "SAUDI FEDERATION FOR CYBERSECURITY, PROGRAMMING & DRONES",
          linkedin: "https://www.linkedin.com/in/rahaf-alrowithi-87203116a/",
        },
        {
          img: employee4,
          name: "Raghad Adel",
          job: "Software Engineer",
          company: "Misk",
          linkedin: "https://www.linkedin.com/in/rahaf-alrowithi-87203116a/",
        },
        {
          img: employee5,
          name: "Fatimah Ahmad",
          job: "Data Analyst",
          company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
          linkedin: "https://www.linkedin.com/in/rahaf-alrowithi-87203116a/",
        },
        {
          img: employee6,
          name: "Khalid Ahmad",
          job: "Software Engineer",
          company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
          linkedin: "https://www.linkedin.com/in/rahaf-alrowithi-87203116a/",
        },
      ];
      const employeesList = employees.map((value) => <Cards employees={value} />);
  return (
    <>
        <h1>Our Employees</h1>
      <CardGroup>
          <div className="containerOfStaff">{employeesList}</div>
      </CardGroup>
    </>
  )
}

export default EmployeeAdmin