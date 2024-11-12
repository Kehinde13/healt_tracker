import { Box, Card, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { FaStethoscope } from "react-icons/fa";

function ReminderCard() {
  return (
    <Box px={"10px"}>
      <Card.Root w="100%" borderRadius={"4xl"} borderTopLeftRadius={"unset"}>
        <Card.Header>
          <HStack justifyContent={"space-between"}>
            <Text textStyle={"xs"}>Reminder</Text>
            <Icon boxSize={5}>
              <FaStethoscope />
            </Icon>
          </HStack>
        </Card.Header>
        <Card.Body>
          <Text>Schedule an appointment with a therapist</Text>
        </Card.Body>
        <Card.Footer>
          <HStack justifyContent={"space-between"}>
            <Text textStyle={"sm"}>You can book an appointment here</Text>
            <IconButton aria-label="Book Appointments">
              <BiArrowToRight />
            </IconButton>
          </HStack>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
}

export default ReminderCard;
