import {
  Box,
  chakra,
  Container,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Avatar,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import IthaqLogo from "./Assets/Images/IthaqLogo.png";
const Logo = (props: any) => {
  return <Avatar size={"lg"} src={IthaqLogo} bg={"white"} />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("white", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box bg={useColorModeValue("#1B668E")} color={useColorModeValue("white")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"} color="white" _hover={{ color: "white" }}>
            Privacy policy
          </Link>
          <p className="line" style={{color:"white"}}> | </p>
          <Link href={"#"} color="white" _hover={{ color: "white" }}>
            Terms of use
          </Link>
          <p className="line" style={{color:"white"}}> | </p>
          <Link href={"/CountactUs"} color="white" _hover={{ color: "white" }}>
            Contact us
          </Link>
        </Stack>
      </Container>

      <Box color={"gray.600"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color={"white"}>Copyright © 2022 Ithaq group </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
