import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcart } from "../redux/cart/action";
import { Box, Text, Input, Button, Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartList } from "../components/CartList";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  console.log(cart);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [state, setState] = useState(false);

  const handleApplyCoupon = () => {
    if (couponCode === "KEEPLEARNING20") {
      setDiscount(0.2); // 20% discount
    } else {
      setDiscount(0); // No discount if the coupon is invalid
    }
    setState(true);
  };

  useEffect(() => {
    dispatch(getcart);
  }, []);

  let totalPrice = 0;
  cart.forEach((el) => {
    totalPrice += el.price;
  });

  const discountedPrice = totalPrice - totalPrice * discount;

  return (
    <Box width={["100%", "100%", "87%"]} margin="auto" px={4}>
      <Box>
        <Text
          fontSize={["24px", "40px"]}
          pt={"90px"}
          fontWeight="bold"
          textAlign="left"
        >
          Shopping Cart
        </Text>
        <Text
          fontSize={["14px", "16px"]}
          fontWeight={700}
          textAlign="left"
          pt={["20px", "30px"]}
          fontStyle="normal"
        >
          {cart.length} Course in Cart
        </Text>
      </Box>
      <Flex direction={["column", "column", "row"]} gap={[0, 0, 8]}>
        <Box width={["100%", "100%", "70%"]}>
          {cart?.map((el) => {
            return <CartList key={el._id} {...el} />;
          })}
        </Box>
        <Box width={["100%", "100%", "100%", "30%"]}>
          <Stack>
            <Text
              fontSize={["14px", "16px"]}
              fontWeight={700}
              fontStyle="normal"
              textAlign="left"
              color="#546E7A"
            >
              Total:{" "}
            </Text>
            <Text
              fontSize={["24px", "32px"]}
              fontWeight={700}
              fontStyle="normal"
              textAlign="left"
            >
              ₹{discountedPrice.toFixed(2)}{" "}
            </Text>
          </Stack>
          <Link to="/payment">
            <Button
              bg="#9575CD"
              color="white"
              _hover={{
                backgroundColor: "#B39DDB",
              }}
              width="100%"
              height="50px"
              mt="10px"
            >
              Checkout
            </Button>
          </Link>
          <hr style={{ border: "1px solid #E0E0E0", marginTop: "13px" }} />
          <Text
            fontSize={["14px", "16px"]}
            fontWeight={700}
            fontStyle="normal"
            textAlign="left"
            mt="10px"
          >
            Promotions
          </Text>
          <Text textAlign="left" mt="10px">
            <Box as="span" fontWeight="600">
              ✕{" "}
            </Box>
            <Box
              as="span"
              fontSize={["14px", "16px"]}
              fontWeight="700"
              fontStyle="normal"
              textAlign="left"
              color="#546E7A"
            >
              KEEPLEARNING20{" "}
            </Box>{" "}
            is available
          </Text>
          <Box width="100%" mt="10px" height="47px" pb={"90px"}>
            <Input
              placeholder="Enter Coupon"
              display="inline"
              border="1px solid black"
              borderRadius="none"
              width="70%"
              height="47px"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            {state ? (
              <Button
                borderRadius="none"
                height="47px"
                bg="#9575CD"
                color="white"
                _hover={{
                  backgroundColor: "#B39DDB",
                }}
                mb="6px"
                onClick={handleApplyCoupon}
                disabled
              >
                Apply
              </Button>
            ) : (
              <Button
                borderRadius="none"
                height="47px"
                bg="#9575CD"
                color="white"
                _hover={{
                  backgroundColor: "#B39DDB",
                }}
                mb="6px"
                onClick={handleApplyCoupon}
              >
                Apply
              </Button>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
