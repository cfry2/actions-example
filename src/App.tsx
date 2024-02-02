import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Button from "./components/button";
import { useSelector, useDispatch } from "react-redux";
import { sum } from "./reducers/sumSlice";
import type { RootState } from "./store";
import { Box, Heading, Flex } from "@radix-ui/themes";

function App() {
  const dispatch = useDispatch();
  const sumValue = useSelector((state: RootState) => state.sum);
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");

  const sumTwoNumbers = () => {
    dispatch(
      sum({
        one,
        two,
      })
    );
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto 0 auto" }}>
      <Box pb="6">
        <Heading size="9" as="h1">
          Sum two numbers together!
        </Heading>
      </Box>

      <Box pb="6">
        <Flex gap="3" justify="center">
          <Input
            id="one"
            label="one"
            value={one}
            onChange={(value) => setOne(value)}
          />
          <Input
            id="one"
            label="two"
            value={two}
            onChange={(value) => setTwo(value)}
          />
        </Flex>
      </Box>
      <Box pb="6">
        <Button onClick={sumTwoNumbers} />
      </Box>
      <Heading size="8" as="h2">
        {one || 0} + {two || 0} = {sumValue.value}
      </Heading>
    </div>
  );
}

export default App;
