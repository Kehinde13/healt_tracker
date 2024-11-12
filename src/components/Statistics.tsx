import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Select from "./Select";
import DoughnutChart from "./DoughnutChart";
import { BsHeartPulse, BsLungs } from "react-icons/bs";
import { GiDefensiveWall, GiDoctorFace } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { MdMedication } from "react-icons/md";

function Statistics() {
  return (
    <VStack w="full" bg="white" rounded="2xl" minHeight="70vh" color="black">
      <HStack justifyContent="space-between" w="full" p="16px">
        <Text textStyle={{ base: "xl", md: "4xl" }}>Statistics</Text>

        <Select />
      </HStack>

      <HStack justifyContent={"space-between"} w={"100%"} px={"16px"}>
        <VStack display={{ base: "none", md: "flex" }} gap={"32px"}>
          <HStack>
            <Icon boxSize={5}>
              <BsHeartPulse />
            </Icon>
            <VStack gap={"0px"}>
              <Text>Activity</Text>
              <Text>16hrs 30mins</Text>
            </VStack>
          </HStack>

          <HStack>
            <Icon boxSize={5}>
              <GiDoctorFace />
            </Icon>
            <VStack gap={"0px"}>
              <Text>Physiotherapy</Text>
              <Text>16/60 Days</Text>
            </VStack>
          </HStack>

          <HStack>
            <Icon boxSize={5}>
              <TbDental />
            </Icon>
            <VStack gap={"0px"}>
              <Text>Dentist</Text>
              <Text>1/2 Visits</Text>
            </VStack>
          </HStack>
        </VStack>

        <DoughnutChart />

        <VStack display={{ base: "none", md: "flex" }} gap={"32px"}>
          <HStack>
            <Icon boxSize={5}>
              <MdMedication />
            </Icon>
            <VStack gap={"0px"}>
              <Text>Medications</Text>
              <Text>16/24 Days</Text>
            </VStack>
          </HStack>

          <HStack>
            <Icon boxSize={5}>
              <GiDefensiveWall />
            </Icon>
            <VStack gap={"0px"}>
              <Text>Immuinity</Text>
              <Text>23/61 Days</Text>
            </VStack>
          </HStack>

          <HStack>
            <Icon boxSize={5}>
              <BsLungs />
            </Icon>
            <VStack gap={"0px"}>
              <Text>Surveys</Text>
              <Text>1/1 Visits</Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Statistics;
