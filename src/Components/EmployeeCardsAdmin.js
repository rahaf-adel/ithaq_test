import React from 'react'
import { Button } from "react-bootstrap";
import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'

function EmployeeCardsAdmin(props) {
  return (
    <>
        <div className="cardOfStaff">
      <div className="imageBox">
        <img src={props.employees.img} width="260" height="260" />
      </div>
      <div className="contentStaff">
        <h2> {props.employees.name}</h2>
        <h5> {props.employees.job}</h5>
        <br />
        <h6> {props.employees.company}</h6>
        <br />
        <p>
        <Button href="#" variant="outline-danger">
         <UilTrashAlt/>
          </Button>{" "}
          <Button href="#" variant="outline-success">
         <UilEdit/>
          </Button>{" "}
        </p>
      </div>
    </div>
    </>
  )
}

export default EmployeeCardsAdmin