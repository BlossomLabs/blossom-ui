import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  HStack,
  Center,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  TextCopy,
  Blockie,
  TransactionBadge,
  IdentityBadge,
  TokenBadge,
} from ".";

function App() {
  const address = "0x05e5472AEc66eB811329CE0c7698A620b6c5CB35";
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack
      as="main"
      maxWidth={"1280px"}
      margin={"0 auto"}
      padding={"2rem"}
      textAlign={"center"}
    >
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        aria-label={"Change color mode"}
        size={"lg"}
        alignSelf={"flex-end"}
      />
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
      <HStack>
        <IdentityBadge
          label="Olive Oyl"
          address="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
          isAccountConnected
        />
        <IdentityBadge
          label="Popeye"
          address="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
          isAccountConnected
          popoverAction={{
            label: (
              <Center>
                <Text>Add name</Text>
              </Center>
            ),
            onClick: () => console.log("clicked action"),
          }}
        />
        <IdentityBadge
          address="0x7c708ac7db979fa06705f8880f29f82cfc406993"
          isAccountConnected
          shorten={false}
        />
        <IdentityBadge
          address="0xf1bea24376329e01c7c10a00a6a7329591168cf9"
          compact
          isAccountConnected
          networkType="gnosis"
        />
        <IdentityBadge
          label="Badge only"
          address="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
          disabled
        />
        <Box
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 400px;
            margin: 0 auto;
          `}
        >
          {[
            {
              address: "0x0000000000000000000000000000000000000000",
              symbol: "ETH",
              name: "Ethereum",
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
              name: "Aragon",
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
              name: "Aragon very very very very long name",
              width: "120px",
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
              name: "Aragon very very very very long name",
              width: "200px",
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
              name: "Aragon very very very very long name",
              width: "300px",
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
              name: "Aragon badge only",
              width: "250px",
              disabled: true,
            },
            {
              address: "0x960b236A07cf122663c4303350609A66A7B288C0",
              symbol: "ANT",
              name: "Aragon compact and very very very very long name",
              width: "250px",
              compact: true,
            },
          ].map(({ width, ...props }, i) => (
            <Box
              key={i}
              css={`
                display: flex;
                width: ${width || "auto"};
                margin-top: 20px;
              `}
            >
              <TokenBadge {...props} />
            </Box>
          ))}
        </Box>
      </HStack>
    </VStack>
  );
}

export default App;
