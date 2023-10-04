import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  InputRightElement,
  Stack,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Button,
  Select,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import background from "../images/background.jpg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const signupSuccess = (msg) => {
    toast({
      title: msg,
      description: "Successfully Registered!",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const emailExist = (msg) => {
    toast({
      title: msg,
      description: "Please Enter New Email or Login!!",
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const fillAllCredential = (msg) => {
    toast({
      title: msg,
      description: "Please Share Required Info!!",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const RequiredPass = (msg) => {
    toast({
      title: msg,
      description:
        "Password Format Should Contain Atleast One UpperCase Character,Number,Special Character and Length Greater Than 8",
      status: "warning",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const handleSubmit = () => {
    const payload = {
      username:name,
      pass:password,
      email
    };
    console.log(payload)
    axios
      .post("https://etutorhub-server.onrender.com/users/register", payload)
      .then((res) => {
        //alert(res.data.msg);
        console.log(res,'res')
        if (res.data.msg === "The new user has been registered") {
          signupSuccess(res.data.msg);
          navigate("/signin");
        }
        if (res.data.msg === "Invalid Password Format!!") {
          RequiredPass(res.data.msg);
        }
        if (res.data.msg === "Please Fill All The Required Credentials") {
          fillAllCredential(res.data.msg);
        }
        if (res.data.msg === "User Already Exists!") {
          emailExist(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    setName("");
    setEmail("");
    setPhone("");
    setGender("");
    setPassword("");
  };
  return (
    <div>
      <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("BlackAlpha.50", "BlackAlpha.50")}
      bgImage={background}
      bgSize={"cover"}
      backgroundRepeat={"no-repeat"}
      pt={{base:"50px", md: "40px", lg: "80px" }}

    >
      <Stack
        spacing={5}
        mx={"auto"}
        w={"1000px"}
        maxW={"lg"}
        py={8}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
          Sign up and start learning
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
              >
                <option value="">Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>

            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"#a435f0"}
                color={"white"}
                _hover={{
                  bg: "#9900ff",
                }}
              >
                Sign up
              </Button>
              <p>By signing up, you agree to our Terms and Policy.</p>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <NavLink style={{ color: "#a435f0" }} to="/signin">
                  Sign In
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}

export default SignUp
