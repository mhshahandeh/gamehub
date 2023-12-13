import { useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { Box, Button } from "@chakra-ui/react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="3"
        >
          <Button
            size={"sm"}
            colorScheme="yellow"
            variant="solid"
            borderRadius="50%"
          >
            <IoArrowUpOutline />
          </Button>
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;
