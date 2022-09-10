import './requests.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {TiDeleteOutline} from "react-icons/ti"

const Requests = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // setId(localStorage.getItem("id"));
    axios
      .get(`https://projectithaq.herokuapp.com/emp/get_received_req/`,{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log(res.data.employees);
        setData(res.data.req);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="requests">
      <h3 style={{fontSize: "25px"}}>Requests</h3>
      {data.map((request) => {
        return (
          <div className="request">
            <Button variant="outline-danger" ><TiDeleteOutline/></Button>
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span></span>
              <span> You have sent Request for </span>
                <span><b>{request.employee.name}</b> </span>
                <span>from </span>
                <span><b>{request.company.name}</b></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Requests