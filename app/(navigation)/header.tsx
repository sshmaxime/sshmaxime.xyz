import { METADATA } from "@/app/metadata";
import Logo from "@/assets/logo.svg";
import Box from "@/components/system/box";
import Flex from "@/components/system/flex";
import { H6 } from "@/components/system/typography";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Box className="space-y-6 pb-10 pt-4">
        <Image width={50} src={Logo} alt="" />

        <Flex full className="justify-start space-x-3">
          <H6 className="font-bold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.HOME.href}>Home</Link>
          </H6>
          <H6 className="font-bold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.EDUCATION.href}>Education</Link>
          </H6>
          <H6 className="font-bold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.WORK.href}>Work</Link>
          </H6>
          <H6 className="font-bold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.MUSIC.href}>Music</Link>
          </H6>
          <H6 className="font-bold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.NOTES.href}>Notes</Link>
          </H6>
        </Flex>
      </Box>
    </header>
  );
}
