import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  useEffect(() => {
    new Promise((x) => setTimeout(x, 2000)).then((x) => {
      nav("/");
    });
  }, []);

  return (
    <Box w={"100vw"} h={"90vh"} pos={"relative"}>
      <Box
        m={"auto"}
        pos={"absolute"}
        transform={"translate(-50%, -50%)"}
        top={"50%"}
        left={"50%"}
      >
        {"Not found, redirecting..."}
      </Box>
    </Box>
  );
};
export default NotFound;
