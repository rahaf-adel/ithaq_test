import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SimpleGrid } from "@chakra-ui/react";
import HomeStatisticTemp from "./HomeSection2Temp";

export default function HomeStatisticInfo() {
  const Statistics = [
    {
      title: " Companies",
      number: 97,
    },
    {
      title: " Employees",
      number: 97,
    },
    {
      title: " Job Offers",
      number: 80,
    },
  ];
  const StatisticList = Statistics.map((item) => (
    <HomeStatisticTemp state={item} />
  ));

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <div>
      <SimpleGrid
      bg={'white'}
        minChildWidth="200px"
        mr={16}
        ml={16}
        mt={-60}
        rounded={15}
        boxShadow={"base"}
        data-aos="fade-up"
      >
        {StatisticList}
      </SimpleGrid>
    </div>
  );
}
