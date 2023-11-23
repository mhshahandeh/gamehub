import {
  HStack,
  Image,
  Show,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import GenreList from "./GenreList";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Show above="lg">
        <HStack padding="10px">
          <Link to="/">
            <Image src={logo} boxSize="60px" objectFit="cover" />
          </Link>
          <SearchInput />
          <ColorModeSwitch />
        </HStack>
      </Show>
      <Show below="lg">
        <HStack padding="10px">
          <IoMenu size="30px" onClick={onOpen} />
          <Drawer
            onClose={onClose}
            isOpen={isOpen}
            size={"xs"}
            placement="right"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton size="lg" paddingTop={9} />
              <DrawerHeader paddingLeft={4}>
                <Link to="/">
                  <Image src={logo} boxSize="60px" objectFit="cover" />
                </Link>
              </DrawerHeader>
              <DrawerBody>
                <GenreList />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <SearchInput />
          <ColorModeSwitch />
        </HStack>
      </Show>
    </>
  );
};

export default Navbar;
