import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {AiOutlineCheck} from "react-icons/ai"
import {TiDeleteOutline} from "react-icons/ti"

function Response() {
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
        <h3 style={{fontSize: "25px"}}>Response</h3>
      {data.map((request) => {
        return (
          <div className="request">
          <Button variant='outline-success'><AiOutlineCheck/></Button>
          <Button variant="outline-danger" ><TiDeleteOutline/></Button>
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{request.company.name}</span>
                <span> has requested your employee: </span>
                <span><b>{request.employee.name}</b></span>
              </div>
                {/* <span>{request.time}</span> */}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Response