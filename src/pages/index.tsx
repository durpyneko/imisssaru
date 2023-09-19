// Imports
import { Box, Center, Link } from "@chakra-ui/react";

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
        <Box className="Footer" position="absolute" bottom="10px">
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
            <Link
              href="https://www.twitch.tv/saruei"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              _hover={{ color: "inherit", textDecoration: "underline" }}
            >
              https://www.twitch.tv/saruei
            </Link>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default IndexPage;
