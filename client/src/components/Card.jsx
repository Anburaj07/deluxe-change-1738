import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import RatingStars from "./RatingComponent/RatingStars";

const Card = ({
  rating,
  title,
  category,
  description,
  _id,
  image,
  total_ratings,
  price,
}) => {
  const miniimg =
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55";
  return (
    <Link to={`/detail/${_id}`}>
      <Flex
        direction={"column"}
        gap={"5px"}
        borderWidth="1px"
        borderRadius="md"
       backgroundColor="#faf5f8"
        boxShadow="xl"
        p={4}
        m={2}
        h={"450px"}
        _hover={{ boxShadow: "2xl", cursor: "pointer" }}
      >
        <Flex h={"40%"}>
          <Image src={image} loading="lazy" alt={title} objectFit="cover" />
        </Flex>
        <Box display="flex" alignItems="center" mb={2}>
          <Image src={miniimg} alt="Logo" boxSize={4} mr={2} />
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="#a7a7a7"
            textTransform={"capitalize"}
          >
            {category}
          </Text>
        </Box>
        <Text
          fontSize="md"
          fontWeight="extrabold"
          mb={2}
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Text
          fontSize="xs"
          fontWeight={"bold"}
          color={"#555555b8"}
          mb={2}
          textTransform={"capitalize"}
        >
          {description.slice(0, 58)}
        </Text>
        <Flex alignItems={"center"} gap={2}>
          <Text fontSize="sm" color={"#b46918"} fontWeight={"bold"}>
            {rating}
          </Text>
          <Flex>
            <RatingStars rating={rating} total_ratings={total_ratings} />
          </Flex>
          <Text fontSize="sm">{` (${total_ratings}) `}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={"bold"}>{`\u20B9 ${price}`}</Text>
        </Flex>
        <Flex color="#a435f0" fontFamily={"poppins"} gap={2}>
          <Flex alignItems={"center"}>
            <FaGraduationCap />
          </Flex>
          <Box>Earn a degree</Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Card;