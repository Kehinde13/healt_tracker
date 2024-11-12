import { Text, VStack, HStack} from "@chakra-ui/react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";

function Sessions() {
  const sessions = [
    {
      doc: "Dr Emily Adebanjo",
      name: "Physiotherapist",
      status: false,
    },
    {
      doc: "Dr Chinedu Johnson",
      name: "Dentist",
      status: true,
    },
    {
      doc: "Dr Bode Johnson",
      name: "Optician",
      status: true,
    },
  ];

  return (
    <VStack w={"100%"} color={"black"} textAlign={"left"} my={"10px"}>
      <Text textStyle={'2xl'} fontWeight={"bold"}>Book a Session</Text>

      {sessions.map((session, index) => (
        <HStack
          key={index}
          w={"full"}
          p={"10px"}
          justifyContent={"space-between"}
        >
          <HStack>
            <Avatar name={session.doc} />
            <VStack gap={"0px"} textStyle={"sm"}>
              <Text>{session.doc}</Text>
              <Text>{session.name}</Text>
            </VStack>
          </HStack>

          <Button bg={session.status ? "green.500" : "red.500"} color="white" px={'10px'}>
            {session.status ? "Book" : "Busy"}
          </Button>
        </HStack>
      ))}
    </VStack>
  );
}

export default Sessions;
