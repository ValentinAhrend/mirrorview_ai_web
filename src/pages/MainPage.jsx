import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AppStore from "../data/appstore.svg";
import GooglePlay from "../data/googleplay.png";
import Mockup from "../data/mockup.png";
import {
  Flex,
  Box,
  Text,
  Wrap,
  WrapItem,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import {
  amethyst,
  celadon,
  chrysler_blue,
  honeydew,
  tea_green,
} from "../style/theme";
import useWindowSize from "../layout/useWindowSize";
import Footer from "../layout/Footer";

const RT_DATA_API_FUNCTION =
  "https://loadrealtimedata-37xuw3cqrq-uc.a.run.app/";
const P_DATA_API_FUNCTION = "https://loadPricingData-37xuw3cqrq-uc.a.run.app/";

const MainPage = () => {
  const [rData, setRData] = useState({});
  const [pData, setPData] = useState({});
  const [anim, setAnim] = useState(false);

  const [colors, setColors] = useState([
    "#00BCD4",
    "rgba(66, 167, 239, 1.0)",
    "rgba(85, 131, 239, 1.0)",
    "#636AEE",
  ]);

  const animateColors = async () => {
    await new Promise((res) => setTimeout(res, 200));
    /// change colors
    const colors_x = [...colors];
    colors_x.splice(0, 0, colors[colors.length - 1]);
    colors_x.pop();
    console.log(colors_x);

    setColors(colors_x);
  };

  const loadRealtimeData = () => {
    fetch(RT_DATA_API_FUNCTION, {
      method: "GET",
    })
      .then((data) => {
        data.json().then((jsData) => {
          setRData(jsData);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const loadPricingData = () => {
    fetch(P_DATA_API_FUNCTION, {
      method: "GET",
    })
      .then((data) => {
        data.json().then((jsData) => {
          setPData(jsData);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loadRealtimeData();
    loadPricingData();
  }, []);

  var [w, h] = useWindowSize();
  if (w == 0) {
    w = window.innerWidth;
  }
  console.log("??");

  useEffect(() => {
    console.log("?");
    if (anim) {
      animateColors();
    }
  }, [colors]);

  return (
    <div className={"mainpage"}>
      <div className={"main-container"}>
        <div style={{ minHeight: "90vh" }}>
          <div
            className={"main-sector"}
            style={{
              background: "#FFFFFF33",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
            }}
          >
            <p style={{ fontSize: w < 600 ? "38px" : "48px" }}>
              {"Master any interview with the help of artifical intelligence"}
            </p>
            <div
              style={{
                marginLeft: "2px",
                fontFamily: "Arial",
                fontSize: "16px",
                color: "#AAA",
              }}
            >
              <span>
                <span>{"Powered by "}</span>
                <span
                  onClick={() => {
                    window.open("https://gemini.google.com", "-blank");
                  }}
                  style={{
                    color: "gray",
                    textDecoration: "underline",
                    fontFamily: "Arial",
                    cursor: "pointer",
                  }}
                >
                  {"Google Gemini"}
                </span>
                <span>{" and "}</span>
                <span
                  style={{
                    color: "gray",
                    textDecoration: "underline",
                    fontFamily: "Arial",
                    cursor: "pointer",
                  }}
                >
                  {"Real-life interview data"}
                </span>
              </span>
            </div>
            <div
              className={"xxz"}
              style={{
                borderRadius: "45px",
                marginTop: "8px",
                height: w < 600 ? "fit-content" : "72px",
                width: "100%",
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 2px 5px 0px " + tea_green,
                padding: w < 600 ? "8px 4px" : "8px 32px",
                flexDirection: w < 600 ? "column" : "row",
              }}
            >
              <p style={{ fontSize: "26px", fontFamily: "Arial" }}>
                {"Available soon in "}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: w < 600 ? "column" : "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <img width={160} src={AppStore}></img>
                <img width={160} src={GooglePlay}></img>
              </div>
            </div>
          </div>
        </div>
        <div className={"stats"}>
          {[
            [
              "interviews" in rData ? rData["interview"] : "...",
              "Interviews Simulated",
            ],
            [],
            ["reviews" in rData ? rData["reviews"] : "...", "Reviews Given"],
            [],
            ["words" in rData ? rData["words"] : "...", "Words Exchanged"],
          ].map((element) => {
            if (element.length == 0) {
              return (
                <div
                  className={"divider"}
                  style={{
                    background: "black",
                    opactiy: "0.5",
                    margin: "0px 32px",
                  }}
                ></div>
              );
            }
            return (
              <div className={"stat-data"}>
                <p>{element[0]}</p>
                <div>{element[1]}</div>
              </div>
            );
          })}
        </div>
        <Box
          w={"100%"}
          background={"linear-gradient(45deg, #8F17ED, #2ECDF0, #13FFF1)"}
          minHeight={"90vh"}
          pos={"relative"}
        >
          <Box
            pos={"absolute"}
            w={"100%"}
            minHeight={"90vh"}
            top={"0px"}
            bottom={"0px"}
            left={"0px"}
            right={"0px"}
            zIndex={3}
            background={"rgba(255,255,255,0.9)"}
          ></Box>
          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"clamp(200px, 10vh, 64px) 32px"}
            zIndex={19}
            position={"relative"}
            id="info-x"
          >
            <Wrap>
              <WrapItem>
                <Image src={Mockup} h={"60vh"}></Image>
              </WrapItem>
              <WrapItem>
                <Flex flexDir={"column"} gap={"12px"}>
                  <Flex flexDir={"column"} gap={"4px"} maxW={"800px"}>
                    <Text
                      fontSize={"36px"}
                      color={"black"}
                      fontFamily={"Arial"}
                      fontWeight={"bold"}
                    >
                      {"MirrorView AI"}
                    </Text>
                    <Text
                      fontSize={"18px"}
                      color={"gblack"}
                      fontFamily={"Arial"}
                    >
                      {
                        "Master your interview. The mobile app trains your ability to answer difficult interview questions or speak in a formal style. Especially to non-native speakers international interviews can be difficult and exhausting."
                      }
                    </Text>
                  </Flex>

                  <hr></hr>
                  <Flex
                    w={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text
                      fontSize={"15px"}
                      color={"grey"}
                      letterSpacing={"10px"}
                      fontWeight={"bold"}
                    >
                      {"F E A T U R E S"}
                    </Text>
                  </Flex>

                  <Flex mt={"24px"} gap={"8px"} flexDir={"column"}>
                    {[
                      [
                        <span>{"Simulate real-data interviews"}</span>,
                        <span>
                          <span>{"Fetch data from "}</span>
                          <span className={"extra"}>
                            {"job offerings on the internet"}
                          </span>
                          <span>{" and generate a "}</span>
                          <span className={"extra"}>
                            {"real-data interview profile"}
                          </span>
                          <span>
                            {". Add custom data segments and information or "}
                          </span>
                          <span className={"extra"}>
                            {"let the AI do it for you."}
                          </span>
                        </span>,
                      ],
                      [
                        "Resumé Interrogation",
                        <span>
                          <span>{"Upload your "}</span>
                          <span className={"extra"}>{"resumé"}</span>
                          <span>
                            {
                              " and receive questions about your previous career, studies or experience."
                            }
                          </span>
                        </span>,
                      ],
                      [
                        "Open Question Dataset",
                        <span>
                          <span>
                            {
                              "Feel free to test your speaking and thinking skills on "
                            }
                          </span>
                          <span className={"extra"}>
                            {"100 real-life interview questions"}
                          </span>
                          <span>{" from 10 different categories."}</span>
                        </span>,
                      ],
                      [
                        "Feedback & Analysis",
                        <span>
                          <span>{"MirrorView AI creates a "}</span>
                          <span className={"extra"}>{"custom feedback"}</span>
                          <span>
                            {
                              " for every interview held. You can also request feedback on specific answers individually. MirrorView AI rates the language and content and gives a clear description on possible weaknesses."
                            }
                          </span>
                        </span>,
                      ],
                    ].map((element, x) => {
                      return (
                        <Flex
                          padding={"3px"}
                          borderRadius={"15px"}
                          background={colors[x]}
                          onMouseOver={(e) => {
                            console.log(e);

                            setAnim(true);
                            animateColors();
                          }}
                          onMouseLeave={() => {
                            setAnim(false);
                          }}
                        >
                          <Flex
                            flexDir={"column"}
                            borderRadius={"12px"}
                            w={"100%"}
                            background={"white"}
                            p={"8px 14px"}
                            gap={"8px"}
                            maxW={"800px"}
                          >
                            <Text fontSize={"24px"}>{element[0]}</Text>
                            <Text fontSize={"15px"}>{element[1]}</Text>
                          </Flex>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Box>
        <Box
          w={"100%"}
          background={"white"}
          minHeight={"90vh"}
          pos={"relative"}
        >
          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"clamp(200px, 10vh, 64px) 32px"}
            zIndex={19}
            position={"relative"}
            flexDir={"column"}
            id={"price-x"}
          >
            <Flex
              w={"100%"}
              h={"fit-content"}
              justifyContent={"center"}
              pos={"relative"}
            >
              <Box
                p={"0px 64px"}
                background={"white"}
                pos={"absolute"}
                transform={"translate(-50%, -50%)"}
                left={"50%"}
                top={"50%"}
              >
                <Text fontSize={"48px"} fontWeight={"bold"}>
                  {"Pricing"}
                </Text>
              </Box>
              <Box p={"8px"} background={"white"} w={"100%"}>
                <hr></hr>
              </Box>
            </Flex>

            <Text
              textAlign={"center"}
              wordBreak={"break-all"}
              whiteSpace={"pre-wrap"}
              mt={"50px"}
            >
              {
                "As an utility tool, we don't want to be too expensive. Nevertheless, the app is using artifical intelligence and server infrastructure.\nWe try our best to keep your costs low."
              }
            </Text>

            <Wrap mt={"20px"} spacing={"20px"}>
              <WrapItem>
                <Flex
                  borderRadius={"12px"}
                  bg={"#FCFCFC"}
                  border={"1px solid black"}
                  p={"16px 18px"}
                  flexDir={"column"}
                  cursor={"pointer"}
                >
                  <Text fontWeight={"bold"} fontSize={"28px"}>
                    {"Standard Plan"}
                  </Text>
                  <Text mb={"8px"} fontSize={"16px"}>
                    <span>{"for "}</span>
                    <span style={{ fontStyle: "italic" }}>
                      {"0€ per month"}
                    </span>
                  </Text>
                  <hr></hr>
                  <Text mt={"8px"}>{"This plan includes:"}</Text>
                  <UnorderedList mb={"8px"}>
                    <ListItem>{"1 million free characters"}</ListItem>
                    <ListItem>{"100 feedbacks"}</ListItem>
                    <ListItem>{"Unlimited interviews"}</ListItem>
                    <ListItem>{"Resumé interrogation"}</ListItem>
                    <ListItem>{"Access to question dataset"}</ListItem>
                  </UnorderedList>
                  <hr></hr>
                  <Text mt={"8px"} maxW={"230px"} fontSize={"13px"}>
                    {
                      "If you are currently using MirrorView AI this is your plan."
                    }
                  </Text>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex
                  h={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text fontSize={"16px"}>{"or"}</Text>
                </Flex>
              </WrapItem>
              {Object.keys(pData).length > 0 ? (
                <WrapItem>
                  <Flex
                    borderRadius={"12px"}
                    bg={"#FCFCFC"}
                    border={"1px solid black"}
                    p={"16px 18px"}
                    flexDir={"column"}
                    cursor={"pointer"}
                  >
                    <Text fontWeight={"bold"} fontSize={"28px"}>
                      {pData["plan_name"]}
                    </Text>
                    <Text mb={"8px"} fontSize={"16px"}>
                      <span>{"for "}</span>
                      <span style={{ fontStyle: "italic" }}>
                        {pData["price"] + " per month"}
                      </span>
                    </Text>
                    <hr></hr>
                    <Text mt={"8px"}>{"This plan includes:"}</Text>
                    <UnorderedList mb={"8px"}>
                      {pData["plan_description"].split(", ").map((e) => {
                        return <ListItem>{e}</ListItem>;
                      })}
                    </UnorderedList>
                    <hr></hr>
                    <Text mt={"8px"} maxW={"230px"} fontSize={"13px"}>
                      {"This plan is currently not available."}
                    </Text>
                  </Flex>
                </WrapItem>
              ) : (
                <WrapItem>
                  <Flex
                    borderRadius={"12px"}
                    w={"230px"}
                    h={"100%"}
                    bg={"#FCFCFC"}
                    border={"1px solid black"}
                    p={"16px 18px"}
                    flexDir={"column"}
                    cursor={"pointer"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text color={"grey"} fontSize={"90px"}>
                      {"..."}
                    </Text>
                  </Flex>
                </WrapItem>
              )}
            </Wrap>
          </Flex>
        </Box>
      </div>
      <Footer></Footer>
    </div>
  );
};
const NavButton = (props) => {
  return (
    <Flex
      border={"1px solid grey"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"4px 12px"}
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
export default MainPage;
