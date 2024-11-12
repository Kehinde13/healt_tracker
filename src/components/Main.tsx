import { Box, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import React from "react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";
import Navbar from "./Navbar";
import Statistics from "./Statistics";

function Main() {
  return (
    <Box w={{ base: "100%", lg: "70%" }} bg="gray.300" p="20px">
      <Stack
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        gap={10}
      >
        <HStack gap="10px">
          <Avatar name="Kenny" />
          <Box>
            <Text textStyle="lg" font="bold" color="black">
              Hey, Kenny
            </Text>
            <Text textStyle="sm">Here&apos;s your Health Overview</Text>
          </Box>
        </HStack>

        <HStack>
          <InputGroup
            flex="1"
            startElement={<LuSearch />}
            bg="white"
            borderRadius="3xl"
          >
            <Input placeholder="Search.... " />
          </InputGroup>
        </HStack>
      </Stack>

      <HStack w='100%' mt={{base: "10px", lg: "50px"}} gap='30px'>
        <Navbar />
        <Statistics />
      </HStack>
    </Box>
  );
}

export default Main;
