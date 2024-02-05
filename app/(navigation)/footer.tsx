import Flex from "@/components/system/flex";
import { H6 } from "@/components/system/typography";
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer>
      <Flex className="gap-4 pb-4">
        <SiGithub />
        <SiX />
        <SiLinkedin />
        <SiTelegram />
      </Flex>
    </footer>
  );
}
