import { SimpleGrid } from '@chakra-ui/react';
import React,{useEffect} from 'react'
import SAFCSP from './Assets/Images/SAFCSPLogo.png'
import STC from './Assets/Images/STCLogo.png'
import MOCITLogo from './Assets/Images/MOCITLogo.png'
import HomeSection3Temp from './HomeSection3Temp';
import Sdaia from './Assets/Images/SdaiaLogo.png'
import Aos from "aos";
import "aos/dist/aos.css";
export default function HomeSection3() {
    const Partners = [
        {
          CompanyName: " Saudi Federation for Cyber Security and Programming",
          CompanyLogo: SAFCSP,
        },
        {
            CompanyName: " STC",
            CompanyLogo: STC,
          },
          {
            CompanyName: " Ministry of Communications and Information technology",
            CompanyLogo: MOCITLogo,
          },
          {
            CompanyName: " Saudi Authority for Data and Artificial Intelligence",
            CompanyLogo: Sdaia,
          },
      ];
      const PartnersList = Partners.map((item) => (
        <HomeSection3Temp partners={item} />
      ));
    
      useEffect(() => {
        Aos.init({ duration: 2000 });
        Aos.refresh();
      }, []);
  return (
    <SimpleGrid
        minChildWidth="240px"
        m={10}
        rounded={15}
        data-aos="fade-up"
        alignContent={'center'}
        // bg={'#92B4EC'}
      >
        {PartnersList}
      </SimpleGrid>
  )
}
