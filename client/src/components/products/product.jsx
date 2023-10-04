import React, { useEffect, useRef, useState } from "react";
import { Flex, IconButton, Box, Grid } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Card from "../Card"

const Product = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const url = `https://etutorhub-server.onrender.com/course`;

    fetch(url,
      {
        method: "GET",
        headers: {

          "Authorization": localStorage.getItem('frontendtoken')
        },
      })
      .then((res) => {

        if (res.ok) {

          return res.json();
        } else {

          throw new Error("Error: " + res.status);
        }
      })
      .then((data) => {
        setCourse(data.Course);

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(course)

  return (
    <Box>
      <Grid templateColumns={{
        base: "repeat(1, 1fr)", // For the base screen size (extra small)
        sm: "repeat(2, 1fr)", // For the small screen size (two columns)
        md: "repeat(2, 1fr)", // For the medium screen size (three columns)
        lg: "repeat(2, 1fr)", // For the large screen size (three columns)
        xl: "repeat(3, 1fr)", // For extra large screen size (three columns)
      }} >
       {course.map((item) => (
          <Box key={item._id}>
            <Card {...item} />
          </Box>
        ))}
        
      </Grid>
    </Box>
  );
};

export default Product;