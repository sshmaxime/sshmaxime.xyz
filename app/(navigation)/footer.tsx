import Flex from "@/components/system/flex";
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Flex className="gap-4 pb-4 pt-14">
        <Link href="https://twitter.com/sshmaxime">
          <SiX />
        </Link>

        <Link href="https://github.com/sshmaxime">
          <SiGithub />
        </Link>

        <Link href="https://linkedin.com/in/maxime-aubanel-4196a3b5">
          <SiLinkedin />
        </Link>

        <Link href="https://t.me/sshmaxime">
          <SiTelegram />
        </Link>
      </Flex>
    </footer>
  );
}
