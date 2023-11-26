import { Stack, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Stack cursor="pointer">
      {colorMode === "dark" ? (
        <FaSun size="25px" onClick={toggleColorMode} />
      ) : (
        <FaMoon size="25px" onClick={toggleColorMode} />
      )}
    </Stack>
  );
};

export default ColorModeSwitch;
