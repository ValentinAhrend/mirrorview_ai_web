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
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
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

const FAQ = [
  {
    question: "What is MirrorView AI?",
    answer:
      "MirrorView AI is a cutting-edge application designed to help users excel in job interviews and improve their resumes through AI-driven simulations, feedback, and analysis.",
  },
  {
    question: "What features does MirrorView AI offer?",
    answer:
      "MirrorView AI offers three main features: Simulating interviews using AI, Resume Interrogation (Answering questions about your resume), and Feedback & Analysis to help you improve.",
  },
  {
    question: "How does the AI simulate interviews?",
    answer:
      "The AI simulates interviews by asking a variety of questions that you might encounter in a real interview. It then analyzes your responses and provides feedback to help you improve your answers and overall performance.",
  },
  {
    question: "What is Resume Interrogation?",
    answer:
      "Resume Interrogation is a feature where the AI answers questions related to your resume, such as formatting tips, content suggestions, and optimization strategies, helping you create a standout resume.",
  },
  {
    question: "Is MirrorView AI suitable for all job levels?",
    answer:
      "Yes, MirrorView AI is designed to cater to individuals at all job levels, from entry-level positions to executive roles. The AI adapts its questions and feedback to match your experience level and career goals.",
  },
  {
    question: "How do I get started with MirrorView AI?",
    answer:
      "If the mobile app is available you can get started with MirrorView AI by simply creating an account, logging in, and start using the features to prepare for interviews and optimize your resume. You can access the app through our website or the app store direclty.",
  },
  {
    question: "Can MirrorView AI guarantee job placement?",
    answer:
      "While MirrorView AI provides tools and insights to help you improve your interview and resume skills, it does not guarantee job placement. Success ultimately depends on your individual efforts and the job market conditions.",
  },
];

function Faq() {
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
              {"Frequently Asked Questions"}
            </Text>
            <Accordion mt={"24px"} w={"100%"}>
              {FAQ.map((element) => {
                return (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          fontWeight={"bold"}
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {element["question"]}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{element["answer"]}</AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Flex>
        </Box>
      </div>
    </div>
  );
}
export default Faq;
