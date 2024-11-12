import Main from "@/components/Main";
import Schedule from "@/components/Schedule";
import { Stack } from "@chakra-ui/react";


export default function Home() {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      gap={0}
      align="stretch"
      w='100%'
      minHeight='100vh'>
      <Main />
      <Schedule />
    </Stack>
  );
}
