import Box from "@/components/system/box";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Flex from "@/components/system/flex";
import { H4, H5, H6 } from "@/components/system/typography";

export default function Header() {
  return (
    <header>
      <Box className="py-4">
        <Image width={60} src={Logo} alt="" />

        <Flex>
          <H6>Home</H6>
          <H6>Home</H6>
          <H6>Home</H6>
          <H6>Home</H6>
          <H6>Home</H6>
        </Flex>
      </Box>
    </header>
  );
}
