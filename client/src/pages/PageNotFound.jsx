import React from 'react'
import img from "../images/giphy.gif";
import { Box, Container, Image } from '@chakra-ui/react';
import { Link, unstable_HistoryRouter } from 'react-router-dom';



export const PageNotFound = () => {
    return (
        <Link to={"/"}>
            <Box w={"100%"} height={"100px"}>
                <Image width={"100%"} height="100vh" src={img} alt="akash" />
            </Box>
        </Link>


    )
}
