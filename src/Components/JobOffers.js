import React , {useState,useEffect} from "react";
import SDAIA from "./Assets/Images/SdaiaLogo.png";
import STC from "./Assets/Images/STC.png";
import SFCPD from "./Assets/Images/SAFCSPLogo.png";
import MCIT from "./Assets/Images/MOCITLogo.png";
import { CardGroup } from "react-bootstrap";
import Cards from "./JobOfferCards";
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

function JobOffers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://projectithaq.herokuapp.com/job/get_jobs",{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log(res.data.jobs);
        setData(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const jobOffersList = data.map((value) => <Cards jobs={value} />);
  return (
    <>
    <Header/>
      <CardGroup>
          <div className="containerOfStaff">{jobOffersList}</div>
      </CardGroup>
      <Footer/>
    </>
  );
}

export default JobOffers;
