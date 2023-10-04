import React from 'react'
import Sidebar from '../components/products/Sidebar';
import { Flex } from '@chakra-ui/react';
import Product from '../components/products/product';

export const ProductSide = () => {
    return (
        <Flex >
        <Sidebar/>
        </Flex>
      );
}
