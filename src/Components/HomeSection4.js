import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SAFCSP from "./Assets/Images/SAFCSPLogo.png";
import STC from "./Assets/Images/STCLogo.png";
import MOCITLogo from "./Assets/Images/MOCITLogo.png";
import HomeSection3Temp from "./HomeSection3Temp";
import Sdaia from "./Assets/Images/SdaiaLogo.png";
import HomeSection4Temp from "./HomeSection4Temp";
import { MdContactMail } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { GrDocumentTime } from "react-icons/gr";

import Aos from "aos";
import "aos/dist/aos.css";
export default function HomeSection3() {
  const Partners = [
    {
      Title: " Contact Us",
      Icon: MdContactMail,
    },
    {
      Title: " Fill Form",
      Icon: AiOutlineForm,
    },
    {
      Title: "Waiting response",
      Icon: GrDocumentTime,
    },
  ];
  const PartnersList = Partners.map((item) => (
    <HomeSection4Temp rigester={item} />
  ));

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <div>
      <SimpleGrid
        minChildWidth="200px"
        spacing="20px"
        p={5}
        mb={-60}
        data-aos="fade-up"
      >
        {PartnersList}
      </SimpleGrid>
    </div>
  );
}
