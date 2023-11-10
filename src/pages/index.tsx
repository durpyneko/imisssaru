// Imports
import { useState, useEffect } from "react";
import { Box, Center, Link, Text } from "@chakra-ui/react";
import axios from "axios";

// Components
import TabHeader from "../components/TabHeader";

const IndexPage = () => {
  const [twitchStatus, setTwitchStatus] = useState("Loading...");

  useEffect(() => {
    const socket = new WebSocket(
      "wss://imisssaru.vercel.app/api/twitch-monitor"
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Handle the WebSocket event data here
      switch (data.event) {
        case "connect":
          console.log("Connected!", data.data);
          if (data.data.streaming === "false") {
            setTwitchStatus("SARUEI IS OFFLINE SOB");
          }
          break;
        case "stream-up":
          console.log("Stream Is Up!", data.data);
          setTwitchStatus("SARUEI IS ONLINE SOB");
          break;
        case "stream-down":
          console.log("Stream Is Down!", data.data);
          setTwitchStatus("SARUEI IS OFFLINE SOB");
          break;
        case "viewcount":
          console.log("Viewer Update!", data.data);
          break;
        default:
          break;
      }
    };

    socket.onclose = (event) => {
      console.log("WebSocket closed:", event);
    };
  }, []);
  return (
    <>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="I MISS SARUEI"></meta>
      <meta property="og:description" content="my face when"></meta>
      <meta property="og:image" content="/imagesets/sarueiCry.webp"></meta>
      <meta property="og:url" content="https://imisssaru.vercel.app"></meta>

      <TabHeader title={"I MISS SARUEI"} />
      <Center>
        <Box
          className="TopBoxes"
          borderRadius="8px"
          backgroundColor="var(--saru-dark-blue)"
          width="400px"
          height="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="15px"
        >
          HELLO WAH
        </Box>
      </Center>
      <Center>
        <Box
          className="TopBoxes"
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
          {twitchStatus}
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
            flexDirection={"column"}
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
            <Box>
              <Text fontSize={10}>
                Check this project out at{" "}
                <Link
                  href="https://github.com/durpyneko/imisssaru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  _hover={{ color: "inherit", textDecoration: "underline" }}
                >
                  https://github.com/durpyneko/imisssaru/
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          className="imageSourceBox"
          position="absolute"
          bottom={8}
          right={8}
        >
          <Link
            href={"https://www.pixiv.net/en/artworks/96322562"}
            target="_blank"
            rel="noopener noreferrer"
            className="imageSource1"
            color="inherit"
            _hover={{ color: "inherit", textDecoration: "underline" }}
          >
            https://www.pixiv.net/en/artworks/96322562
          </Link>
          <Link
            href={"https://www.pixiv.net/en/artworks/97896105"}
            target="_blank"
            rel="noopener noreferrer"
            className="imageSource2"
            color="inherit"
            _hover={{ color: "inherit", textDecoration: "underline" }}
          >
            https://www.pixiv.net/en/artworks/97896105
          </Link>
        </Box>
      </Center>
    </>
  );
};

export default IndexPage;
