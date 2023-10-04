import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Box,
  Input,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  Button,
  Image,
  Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import logo from "../images/eTutorhub.jpeg"
const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const token = localStorage.getItem("frontendtoken");
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    localStorage.removeItem("frontendtoken");
    navigate("/")

  };
  const fontSize = useBreakpointValue({
    base: "10px",
    sm: "12px",
    md: "13px",
    lg: "15px",
    xl: "16px",
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={"4px 3px"}
      bg="white" //white
      // boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      position="fixed"
      width="100%"
      zIndex={5}
    >
      <Flex
        align="center"
        gap={10}
        _hover={{ cursor: "pointer" }}
        width={{
          sm: "25%",
          md: "28%",
          lg: "32%",
        }}
        paddingLeft={"20px"}
      >
        <Link href="/">
          <Image src={logo} width={"15%"} borderRadius={"50%"} /></Link>

      </Flex>


      {!isMobile && (
        <Flex align="center">

          {token ? (
            <>

            {/* <Heading paddingRight={"10px"}> Hi user</Heading> */}
              {/* <Link href="/mylearning"
                textDecoration="none"
                marginRight="10px"
                padding="10px"
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "2px solid black",
                  // textDecoration: "none",
                }}
                borderRadius="5px"
                // fontWeight="bold"
                color="white"
                bg="black"
                display={{ base: "none", md: "block" }}

              >My Courses</Link> */}
                            <Button
                marginRight="10px"
                padding="10px"
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "2px solid black",
                  // textDecoration: "none",
                }}
                borderRadius="5px"
                // fontWeight="bold"
                color="white"
                bg="black"
                display={{ base: "none", md: "block" }}
              >{username}               
              </Button>

              <Button
                marginRight="10px"
                padding="10px"
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "2px solid black",
                  // textDecoration: "none",
                }}
                borderRadius="5px"
                // fontWeight="bold"
                color="white"
                bg="black"
                display={{ base: "none", md: "block" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Box display={"flex"}>
              <Link
                href="/signin"
                textDecoration="none"
                marginRight="10px"
                padding="10px"
                //  height={"100px"}

                width={"150px"} _hover={{
                  bgColor: "white",
                  color: "#9904fc",
                  border: "2px solid #9904fc",
                  // textDecoration: "none",
                }}
                borderRadius="5px"
                // fontWeight="bold"
                color="white"
                bg="green"
                display={{ base: "none", md: "block" }}
              >
                Login
              </Link>
              <Link
                          href="/signup"
                          textDecoration="none"
                          marginRight="10px"
                          padding="10px"
                          //  height={"100px"}
          
                          width={"150px"} _hover={{
                            bgColor: "white",
                            color: "#9904fc",
                            border: "2px solid #9904fc",
                            // textDecoration: "none",
                          }}
                          borderRadius="5px"
                          // fontWeight="bold"
                          color="white"
                          bg="green"
                          display={{ base: "none", md: "block" }}
                        >
                          SignUp
                        </Link>
            </Box>
          )}
        </Flex>
      )}

    </Flex>
  );
}
export default Navbar