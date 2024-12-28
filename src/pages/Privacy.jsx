import { Box, Flex, Text } from "@chakra-ui/react";
import useWindowSize from "../layout/useWindowSize";

function Privacy() {
  var [w, h] = useWindowSize();
  if (w == 0) {
    w = window.innerWidth;
  }

  return (
    <div className={"mainpage"}>
      <div className={"main-container"}>
        <Box className={"main-sector"} alignItems={"center"}>
          <Flex
            maxW={"1200px"}
            minW={"330px"}
            w={"clamp(330px, 80vw, 1200px)"}
            p={w < 1200 ? "0px 32px" : "0px"}
            h={"100%"}
            flexDir={"column"}
          >
            <Text fontSize={"32px"} fontWeight={"bold"}>
              {"Data Privacy Information"}
            </Text>
            <Text>
              {
                "MirrorView AI is not available yet and only accessible through sensitive beta testing. Therefore, a preview of information about data privacy is not available."
              }
            </Text>
          </Flex>
        </Box>
      </div>
    </div>
  );
}
export default Privacy;
