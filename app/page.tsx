"use client";

import Box from "@/components/system/box";
import { H1 } from "@/components/system/typography";

export default function Dashboard() {
  return (
    <Box>
      <div className="prose lg:prose-lg">
        <H1 className="font-bold">Hello 👋🏼</H1>
        <p>
          My name is <b>Maxime</b>, I'm a <b>Software Engineer</b> from France.
          I'm usually <s>known</s> unknown as{" "}
          <b>
            <u>sshmaxime</u>
          </b>{" "}
          on the Internet.
        </p>
        <p>
          I <b>code</b>, I <b>make music</b> , I <b>workout</b> and I like
          something more than anything ... the <b>sun</b> 🌞.
        </p>

        <p>
          I've been lucky enough to do a lot of <b>cool</b> stuff throughout my
          life. I mined <b>crypto-currencies</b> ฿, studied abroad in{" "}
          <b>Australia</b> 🦘, code <b>drone</b> softwares 🚁, build{" "}
          <b>websites</b> 🕸️, developed <b>smart-contracts</b> on the{" "}
          <b>Ethereum</b> blockchain ⛓️.
        </p>

        <p>
          I speak <b>French</b>, <b>English</b> and <b>Spanish</b>.
        </p>

        <p>
          Oh, also, I write down my{" "}
          <b>
            <u>thoughts</u>
          </b>{" "}
          down sometimes.
        </p>
      </div>
    </Box>
  );
}
