import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import ImmuinityCard from "./ImmuinityCard";
import PhysioCard from "./PhysioCard";
import Sessions from "./Sessions";
import ReminderCard from "./ReminderCard";

function Schedule() {
  return (
    <Box w={{ base: "100%", lg: "30%" }} bg="white">
      <Stack
        w={"100%"}
        p={"10px"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: "30px", md: "10px" }}
      >
        <ImmuinityCard />
        <PhysioCard />
      </Stack>
      <Sessions />
      <ReminderCard />
    </Box>
  );
}

export default Schedule;
