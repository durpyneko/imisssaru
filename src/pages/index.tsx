// Imports
import { Box, Center } from "@chakra-ui/react";

// Components
import TabHeader from "../components/TabHeader";

const IndexPage = () => {
  return (
    <>
      <TabHeader title={"iMissSaru"} />
      <Center>
        <Box
          borderRadius="8px"
          backgroundColor="var(--saru-dark-blue)"
          width="400px"
          height="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="15px"
        >
          HELLO
        </Box>
      </Center>
      <Center>
        <Box
          borderRadius="8px"
          backgroundColor="#2a253aa0"
          borderColor="var(--saru-dark-blue)"
          border="1px solid"
          backdropFilter="blur(4px)"
          width="400px"
          height="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="15px"
        >
          WAH
        </Box>
      </Center>
      <Center>
        <Box className="Footer" position="absolute" bottom="10px" width="99vw">
          <Box
            borderRadius="8px"
            backgroundColor="var(--saru-blurple)"
            padding="8px"
            paddingLeft="16px"
            paddingRight="16px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            TEST AAA WAH
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default IndexPage;
