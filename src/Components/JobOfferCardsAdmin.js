import React from 'react'
import { Button } from "react-bootstrap";
import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'

function JobOfferCardsAdmin(props) {
  return (
    <>
        <div class="jobOffercard">
        <div className='innerCard'>
        <h5>{props.jobs.job}</h5>
        <p>
        {props.jobs.description}
         </p>
         <Button href="#" variant="outline-danger">
         <UilTrashAlt/>
          </Button>{" "}
          <Button href="#" variant="outline-success">
         <UilEdit/>
          </Button>{" "}
         
        </div>
        <div class="cover">
          <div class="coverBack"></div>
          <div class="coverFront">
            <div>
              <h5>{props.jobs.job}</h5>
              <img src={props.jobs.img} class="sh_img" />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default JobOfferCardsAdmin