import { Card, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaShieldHeart } from "react-icons/fa6";
import {
  ProgressBar,
  ProgressLabel,
  ProgressRoot,
  ProgressValueText,
} from "./ui/progress";

function ImmuinityCard() {
  return (
    <Card.Root w={{base: "100%", md: "50%"}} borderRadius={'4xl'} borderTopLeftRadius={'unset'}>
      <Card.Header>
        <HStack justifyContent={"space-between"}>
          <Text textStyle={"xs"}>Program</Text>
          <Icon boxSize={5}>
            <FaShieldHeart />
          </Icon>
        </HStack>
      </Card.Header>
      <Card.Body>
        <Text>Immuinity</Text>
      </Card.Body>
      <Card.Footer>
        <ProgressRoot width="100%" colorScheme="green" >
          <ProgressBar />
          <HStack justifyContent={"space-between"} mt={'5px'}>
            <ProgressLabel textStyle={"xs"}>2 months</ProgressLabel>
            <ProgressValueText textStyle={"xs"}>1/2</ProgressValueText>
          </HStack>
        </ProgressRoot>
      </Card.Footer>
    </Card.Root>
  );
}

export default ImmuinityCard;
