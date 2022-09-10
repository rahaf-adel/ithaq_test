import React from "react";
import { Button } from "react-bootstrap";
import { useToast } from '@chakra-ui/react'
import SDAIA from "./Assets/Images/SdaiaLogo.png";
import STC from "./Assets/Images/STC.png";
import SFCPD from "./Assets/Images/SAFCSPLogo.png";
import MCIT from "./Assets/Images/MOCITLogo.png";

function JobOfferCards(props) {
  const username =props.jobs.company.name
  let avatar = STC
    if (username=="STC")
          avatar=STC
    else if (username=="SDAIA")
    avatar=SDAIA
    else if(username=="SAFCSP")
    avatar=SFCPD
    else{
      avatar=MCIT
    }
  
  const toast = useToast()
  console.log(props.jobs.img);
  return (
    <>
      <div class="jobOffercard">
        <div className="innerCard">
          <h3 style={{fontSize: "20px"}}>{props.jobs.position}</h3>
          <br/>
          <p>{props.jobs.description}</p>
          <br/>
          <Button href="#"  variant="warning" onClick={() =>
        toast({
          title: 'Sent Succesfully.',
          status: 'success',
          position: "top",
          duration: 9000,
          isClosable: true,
        })
      }>
            Apply
          </Button>{" "}
        </div>
        <div class="cover">
          <div class="coverBack"></div>
          <div class="coverFront">
            <div>
              <h5>{props.jobs.position}</h5>
             
              {<img src={avatar} class="sh_img" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobOfferCards;
