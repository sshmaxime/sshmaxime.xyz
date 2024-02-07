import { METADATA } from "@/app/metadata";
import Logo from "@/assets/logo.svg";
import Box from "@/components/system/box";
import Flex from "@/components/system/flex";
import { H6, P } from "@/components/system/typography";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Box className="space-y-4 pb-10 pt-3">
        <Flex full className="justify-between gap-4">
          <Flex full className="flex-col">
            <H6 className="self-start font-extrabold">Maxime A.</H6>
            <div className="flex h-5 items-center gap-2">
              <P className="font-extrabold text-muted-foreground">
                Software Engineer
              </P>
              <Separator orientation="vertical" />
              <P className="font-extrabold">@ Ledger</P>
            </div>
          </Flex>
          <Image height={50} src={Logo} alt="" />
        </Flex>

        <Separator />

        <Flex full className="justify-start space-x-3">
          <P className="font-semibold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.HOME.href}>Home</Link>
          </P>
          <P className="font-semibold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.EDUCATION.href}>Education</Link>
          </P>
          <P className="font-semibold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.WORK.href}>Work</Link>
          </P>
          <P className="font-semibold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.MUSIC.href}>Music</Link>
          </P>
          <P className="font-semibold tracking-tighter underline underline-offset-4">
            <Link href={METADATA.app.NOTES.href}>Notes</Link>
          </P>
        </Flex>

        <Separator />
      </Box>
    </header>
  );
}
