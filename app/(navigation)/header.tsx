import Box from "@/components/system/box";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <header>
      <Box className="py-4">
        <Image width={75} src={Logo} alt="" />
      </Box>
    </header>
  );
}
