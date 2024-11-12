import { IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { BiBell, BiClipboard } from "react-icons/bi";
import { BsHospital } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

function Navbar() {
  return (
    <VStack
      bg="black"
      w="8%"
      display={{ base: 'none', md: 'flex' }}
      roundedTopLeft="full"
      roundedTopRight="full"
      roundedBottomRight="full"
      py="28px"
      justifyContent="space-between"
      minHeight='70vh'
    >
      <BsHospital />

      <VStack>
        <IconButton aria-label="Dashboard" colorPalette='pink'>
          <MdDashboard />
        </IconButton>

        <IconButton aria-label="Appointments">
          <BiClipboard />
        </IconButton>

        <IconButton aria-label="Doctor">
          <FaStethoscope />
        </IconButton>

        <IconButton aria-label="Notifications">
          <BiBell />
        </IconButton>

        <IconButton aria-label="Settings">
          <CiSettings />
        </IconButton>
      </VStack>

      <LuLogOut />
    </VStack>
  );
}

export default Navbar;
