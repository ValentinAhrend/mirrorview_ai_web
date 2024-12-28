import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useWindowSize from "./useWindowSize";

function Footer() {
  var [w, h] = useWindowSize();
  if (w == 0) {
    w = window.innerWidth;
  }

  return (
    <Flex
      w={"100%"}
      background={"linear-gradient(45deg, #8F17ED, #2ECDF0, #13FFF1)"}
      minHeight={"100px"}
      pos={"relative"}
      justifyContent={"center"}
    >
      <Box
        pos={"absolute"}
        w={"100%"}
        minH={"100px"}
        top={"0px"}
        bottom={"0px"}
        left={"0px"}
        right={"0px"}
        zIndex={3}
        background={"rgba(255,255,255,0.9)"}
      ></Box>
      <Wrap
        w={"100%"}
        h={"100%"}
        m={"auto 0px"}
        alignItems={"center"}
        p={"10px 32px"}
        zIndex={19}
        position={"relative"}
        spacing={"auto"}
      >
        <WrapItem>
          <Text
            m={"auto 0px"}
            color={"black"}
            fontSize={"20px"}
            fontFamily={"IBM Plex Sans"}
          >
            {"MirrorView AI"}
          </Text>
        </WrapItem>
        <WrapItem
          w={w > 1200 ? "calc(100% - 180px)" : "calc(100%)"}
          justifyContent={"end"}
        >
          <Flex
            gap={"18px"}
            justifyContent={w > 1200 ? "end" : "start"}
            w={"100%"}
            fontSize={w < 500 ? "14px" : "16px"}
            flexWrap={w > 1200 ? "nowrap" : "wrap"}
          >
            <WrapItem w={"50px"} mt={"0px"}>
              <Link to={"/faq"}>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  m={"auto 0px"}
                  color={"black"}
                  fontSize={w < 500 ? "14px" : "16px"}
                  fontFamily={"IBM Plex Sans"}
                >
                  {"FAQ"}
                </Text>
              </Link>
            </WrapItem>
            <WrapItem w={"170px"} mt={"0px"}>
              <Link to={"/terms"}>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  m={"auto 0px"}
                  color={"black"}
                  fontFamily={"IBM Plex Sans"}
                >
                  {"Terms & Conditions"}
                </Text>
              </Link>
            </WrapItem>
            <WrapItem w={"100px"} mt={"0px"}>
              <Link to={"/privacy"}>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  m={"auto 0px"}
                  color={"black"}
                  fontFamily={"IBM Plex Sans"}
                >
                  {"Data Privacy"}
                </Text>
              </Link>
            </WrapItem>
            <WrapItem w={"50px"} mt={"0px"}>
              <Link to={"/contact"}>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  m={"auto 0px"}
                  color={"black"}
                  fontFamily={"IBM Plex Sans"}
                >
                  {"Contact"}
                </Text>
              </Link>
            </WrapItem>
          </Flex>
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
export default Footer;
