import { Box, Button, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  const [paymentMethod, setPaymentMethod] = useState("");
  console.log('paymentMethod:', paymentMethod)
  console.log("cart:", cart);
  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  let totalPrice = 0;
  cart.forEach((el) => {
    totalPrice += el.price;
  });

  const discountedPrice = totalPrice - totalPrice * 0.2;
  console.log("discountedPrice:", discountedPrice);
  return (
    <DIV>
      <Heading>Payment</Heading>
      <Flex p={"20px"} justifyContent={"space-between"}>
        <Text>Total price</Text>
        <Text>${discountedPrice}</Text>
      </Flex>
      <Box textAlign="center">
        <Text>Payment Option:</Text>
        <Select onChange={handleChange}>
          <option value="cash">Cash</option>
          <option value="card">DebitCard</option>
        </Select>
        {paymentMethod=='card'&&<div>
            <Text>Card Holder Name:</Text>
            <Input></Input>
            
            </div>}
        <Button
          mt={"20px"}
          bg="#9575CD"
          color="white"
          _hover={{
            backgroundColor: "#B39DDB",
          }}
          width="100%"
          height="50px"
        >
          Book Now
        </Button>
      </Box>
    </DIV>
  );
};

export default Checkout;

const DIV = styled.div`
  /* margin-top: 200px; */
  box-sizing: border-box;
  width: 30%;
  padding: 20px;
  padding-top: 150px;
  height: 500px;
  margin: auto;
  /* margin-top: 50px; */
  margin-bottom: 50px;
  border: 1px solid red;
  p {
    font-size: 20px;
  }

  button {
  }
`;
