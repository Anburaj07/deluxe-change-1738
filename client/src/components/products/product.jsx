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
      <Grid templateColumns='repeat(3, 1fr)' >
        {course.map((item) => (
          <Box key={item.id} width={"350"}>
            <Card {...item} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;