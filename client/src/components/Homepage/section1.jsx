import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import teacher from "../../images/eTutorHub2.jpeg";
import { Link } from "react-router-dom";

const Section1 = () => {
    const token = localStorage.getItem("frontendtoken");
    return (
        <Flex
            pl={{
                sm: "50px",
                md: "100px",
                lg: "170px",
            }}
            mb={70}
            gap={50}
            paddingTop={"100px"}
        >
            <Flex
                direction="column"
                w={{
                    sm: "60%",
                    md: "55%",
                    lg: "50%",
                }}
                gap={30}
            >
                <Text
                    fontSize={{
                        sm: "30px",
                        md: "60px",
                        lg: "80px",
                    }}
                    fontWeight="bold"
                    fontFamily="poppins"
                >
                    Learn without limits
                </Text>
                <Text
                    fontSize={{
                        lg: "18px",
                        md: "16px",
                        sm: "14px",
                    }}
                    fontWeight="semibold"
                >
                    Start, switch, or advance your career with more than 5,800 courses,
                    Professional Certificates, and degrees from world-class universities
                    and companies.
                </Text>
                <Flex
                    gap={30}
                    direction={{
                        sm: "column",
                        md: "row",
                        lg: "row",
                    }}
                >
                    <Button
                        bg="#a435f0"
                        color="white"
                        size="lg"
                        p={{
                            lg: "30px 60px",
                            md: "25px 50px",
                            sm: "20px 40px",
                        }}
                        border="3px solid #a435f0"
                        _hover={{
                            color: "#a435f0",
                            backgroundColor: "white",
                        }}
                    >
                        Join for Free
                    </Button>
                    <Link to={token?"/productSide":"/signin"} >
                    <Button
                        colorScheme="#a435f0"
                        color="#a435f0"
                        variant="outline"
                        size="lg"
                        p={{
                            lg: "30px 60px",
                            md: "25px 50px",
                            sm: "20px 40px",
                        }}
                        border="3px solid #a435f0"
                        _hover={{
                            backgroundColor: "#a435f0",
                            color: "white",
                        }}
                    >
                        Try eTutorHub for Business
                    </Button>
                    </Link>
                </Flex>
            </Flex>
            <Box
                display={{ sm: "none", md: "flex" }}
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={teacher}
                    alt="Your Image"
                    width={{
                        md: "60%",
                        lg: "80%",
                    }}
                    borderRadius={"20px"}
                    objectFit="contain"
                />
            </Box>
        </Flex>
    );
};

export default Section1;