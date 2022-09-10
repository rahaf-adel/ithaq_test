import React from 'react'
import SDAIA from "./Assets/Images/SDAIA.png";
import STC from "./Assets/Images/STC.png";
import SFCPD from "./Assets/Images/SFCPD.png";
import MCIT from "./Assets/Images/MCIT.png";
import { CardGroup } from "react-bootstrap";
import Cards from "./JobOfferCardsAdmin";

function JobOffersAdmin() {
    const jobOffers = [
        {
          img: SDAIA,
          company: "SDAIA",
          job: "Front End Developer",
          description: "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
        },
        {
          img: STC,
          company: "STC",
          job: "Back End Developer",
          description: "Responsible for  creates components and features on the server-side, indirectly accessed by a user through a front end application or system. ",
        },
        {
          img: SFCPD,
          company: "SAUDI FEDERATION FOR CYBERSECURITY, PROGRAMMING & DRONES",
          job: "Full Stack Developer",
          description: "responsible for working on both front-end and back-end development processes",
        },
        {
          img: MCIT,
          company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
          job: "Software Engineer",
          description: "Responsible for  designs and builds computer programs that power mobile devices and desktop computers.",
        },
        {
            img: MCIT,
            company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
            job: "Software Engineer",
            description: "Responsible for  designs and builds computer programs that power mobile devices and desktop computers.",
          },
          {
            img: MCIT,
            company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
            job: "Software Engineer",
            description: "Responsible for  designs and builds computer programs that power mobile devices and desktop computers.",
          },
          {
            img: STC,
            company: "STC",
            job: "Back End Developer",
            description: "Responsible for  creates components and features on the server-side, indirectly accessed by a user through a front end application or system. ",
          },
          {
            img: SFCPD,
            company: "SAUDI FEDERATION FOR CYBERSECURITY, PROGRAMMING & DRONES",
            job: "Full Stack Developer",
            description: "responsible for working on both front-end and back-end development processes",
          },
      ];
      const jobOfferList = jobOffers.map((value) => <Cards jobs={value} />);
  return (
    <>
         <h1 className="title">Our Job Offers</h1>
      <CardGroup>
          <div className="containerOfStaff">{jobOfferList}</div>
      </CardGroup>
    </>
  )
}

export default JobOffersAdmin