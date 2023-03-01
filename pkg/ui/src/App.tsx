import { Box, VStack, HStack } from "@chakra-ui/react";
import { TextCopy, Blockie, TransactionBadge } from ".";

function App() {
  const address = "0x05e5472AEc66eB811329CE0c7698A620b6c5CB35";
  return (
    <VStack
      as="main"
      maxWidth={"1280px"}
      margin={"0 auto"}
      padding={"2rem"}
      textAlign={"center"}
    >
      <Box w={"200px"}>
        <TextCopy value={address} />
      </Box>
      <HStack>
        <Blockie address={address} />
        <Blockie address={address} radius={"md"} scale={2} opacity={0.5} />
      </HStack>
      <HStack>
        <TransactionBadge
          transaction="0xbffb1572c2b820ffd1ce420382a242b8df030fb8a206908703ca39e36ec78646"
          networkType="gnosis"
        />
        <TransactionBadge
          transaction="0x8aa6c8ecae2cef6236a194cf2f285036fa2d822aef098b2d97f5405b2b04bca0"
          shorten={false}
        />
      </HStack>
    </VStack>
  );
}

export default App;
