import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";

const Checkout = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleClick = () => {
    if (paymentMethod == "card" && (!name || !number || !cvv)) {
      toast({
        title: "Enter Card Details!!",
        status: "warning",
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Payment Successful!!",
        status: "success",
        isClosable: true,
        position: "top",
      });
      navigate('/')
    }
  };
  let totalPrice = 0;
  cart.forEach((el) => {
    totalPrice += el.price;
  });

  const discountedPrice = totalPrice - totalPrice * 0.2;

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
          <option value="card">Debit Card</option>
        </Select>
        {paymentMethod == "card" && (
          <Box textAlign="left" mt={"20px"} p="20px">
            <Text>Card Holder Name:</Text>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Text>Card Number:</Text>
            <Input
              type="number"
              placeholder="Enter card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Text>CVV:</Text>
            <Input
              type="number"
              placeholder="Enter card CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Box>
        )}
        <Button
          mt={"20px"}
          bg="#9575CD"
          color="white"
          _hover={{
            backgroundColor: "#B39DDB",
          }}
          width="100%"
          height="50px"
          onClick={handleClick}
        >
          Pay Now
        </Button>
      </Box>
    </DIV>
  );
};

export default Checkout;

const DIV = styled.div`
  box-sizing: border-box;
  background-color: #edf4f4;
  width: 35%;
  border-radius: 15px;
  padding: 20px;
  padding-top: 150px;
  margin: auto;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    font-size: 20px;
  }

  input {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
