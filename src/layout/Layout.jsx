import { Outlet, useNavigate } from "react-router-dom";
import LOGO from "../data/logo192.png";
import HAM from "../data/hamburger.png";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import useWindowSize from "./useWindowSize";
function Layout(props) {
  const nav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  var [w, h] = useWindowSize();
  if (w == 0) {
    w = window.innerWidth;
  }
  const info = async () => {
    if (window.location.pathname == "/") {
      while (document.getElementById("info-x") == null) {
        await new Promise((x) => setTimeout(x, 100));
      }
      document.getElementById("info-x").scrollIntoView({ behavior: "smooth" });
    } else {
      nav("/");
      new Promise((x) => setTimeout(x, 100)).then(async (x) => {
        while (document.getElementById("info-x") == null) {
          await new Promise((x) => setTimeout(x, 100));
        }

        document.getElementById("info-x").scrollIntoView();
      });
    }
  };
  const price = async () => {
    if (window.location.pathname == "/") {
      while (document.getElementById("price-x") == null) {
        await new Promise((x) => setTimeout(x, 100));
      }
      document.getElementById("price-x").scrollIntoView({ behavior: "smooth" });
    } else {
      nav("/");
      new Promise((x) => setTimeout(x, 100)).then(async (x) => {
        while (document.getElementById("price-x") == null) {
          await new Promise((x) => setTimeout(x, 100));
        }

        document.getElementById("price-x").scrollIntoView();
      });
    }
  };
  return (
    <div class={"layout"}>
      <div class={"topbar"}>
        <div
          class={"title"}
          onClick={() => {
            if (window.location.pathname == "/") {
              document.getElementsByClassName("layout")[0].scrollTo({
                top: 0,

                behavior: "smooth",
              });
            }
            nav("/");
          }}
        >
          <img src={LOGO}></img>
          <p>{"MirrorView AI"}</p>
        </div>
        <div class={"tools"} style={{ display: w < 800 ? "none" : "inherit" }}>
          <div
            class={"tool"}
            onClick={() => {
              info();
            }}
          >
            {"Info"}
          </div>
          <div
            class={"tool"}
            onClick={() => {
              price();
            }}
          >
            {"Pricing"}
          </div>
          <div
            class={"tool"}
            onClick={() => {
              nav("/faq");
            }}
          >
            {"FAQ"}
          </div>
          <div
            onClick={() => {
              nav("/contact");
            }}
            class={"tool"}
          >
            {"Contact"}
          </div>
        </div>
        <div
          style={{ display: w >= 800 ? "none" : "inherit" }}
          onClick={() => {
            onOpen();
          }}
        >
          <img src={HAM} width={24} height={24}></img>
        </div>
      </div>
      <Outlet></Outlet>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Welcome to MirrorView AI</DrawerHeader>

          <DrawerBody>
            <Flex flexDirection={"column"} gap={"8px"}>
              <NavButton
                title={"Info"}
                onClick={() => {
                  info();
                }}
              ></NavButton>
              <NavButton
                title={"Pricing"}
                onClick={() => {
                  price();
                }}
              ></NavButton>
              <NavButton
                title={"FAQ"}
                onClick={() => {
                  nav("/faq");
                }}
              ></NavButton>
              <NavButton
                title={"Data Privacy"}
                onClick={() => {
                  nav("/privacy");
                }}
              ></NavButton>
              <NavButton
                title={"Terms of Use"}
                onClick={() => {
                  nav("/terms");
                }}
              ></NavButton>
              <NavButton
                title={"Contact"}
                onClick={() => {
                  nav("/contact");
                }}
              ></NavButton>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
const NavButton = (props) => {
  return (
    <Flex
      border={"1px solid grey"}
      justifyContent={"space-between"}
      flexDirection={"row-reverse"}
      alignItems={"center"}
      p={"4px 12px"}
      _hover={{ background: "lightgray" }}
      transition={"0.33333s"}
      borderRadius={"12px"}
      onClick={() => {
        props.onClick();
      }}
    >
      <Box
        h={"10px"}
        w={"10px"}
        borderRadius={"100%"}
        bg={"linear-gradient(45deg, #8F17ED, #2ECDF0, #13FFF1)"}
      ></Box>
      <Text fontSize={"18px"} color={"black"}>
        {props.title}
      </Text>
    </Flex>
  );
};
export default Layout;
