import { React } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const COLORS_XX = ["lightblue", "blue", "purple"];

function Contact(params) {
  return (
    <div className={"mainpage"}>
      <div className={"main-container"}>
        <Box
          className={"main-sector"}
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
          alignItems={"center"}
          p={"0px"}
        >
          <Text fontSize={"32px"}>{"Contact"}</Text>
          <Text
            as={"div"}
            textAlign={"center"}
            fontSize={"18px"}
            maxW={"400px"}
            mt={"8px"}
          >
            {
              "The mobile app and this website are programmed and maintained by Valentin Ahrend."
            }
          </Text>
          <Flex gap={"12px"}>
            {[
              ["E-Mail", "mailto:reach@valentinahrend.com"],
              ["Website", "https://valentinahrend.com"],
              ["Github", "https://github.com/ValentinAhrend"],
            ].map((element, i) => {
              return (
                <Flex
                  mt={"12px"}
                  p={"6px 12px"}
                  cursor={"pointer"}
                  onClick={() => {
                    window.open(element[1], "_blank");
                  }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"8px"}
                  bg={COLORS_XX[i]}
                  color={"white"}
                  fontSize={"18px"}
                >
                  <Text>{element[0]}</Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </div>
    </div>
  );
}
export default Contact;
