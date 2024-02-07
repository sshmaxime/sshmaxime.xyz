import Box from "@/components/system/box";

export default function Dashboard() {
  return (
    <Box className="prose lg:prose-lg">
      <h1>Hello</h1>

      <p>
        My name is <b>Maxime</b>, I'm a <b>Software Engineer</b> from France,
        usually <s>known</s> unknown as{" "}
        <b>
          <u>sshmaxime</u>
        </b>{" "}
        on the Internet.
      </p>

      <p>
        I <b>code</b>, I <b>make music</b> , I <b>workout</b> and I love the{" "}
        <b>sun</b> 🌞.
      </p>

      <p>
        I've been lucky enough to do a lot of <b>cool</b> stuff throughout my
        life. I mined <b>crypto-currencies</b> ฿, studied abroad in{" "}
        <b>Australia</b> 🦘, code <b>drone</b> softwares 🚁, build{" "}
        <b>websites</b> 🕸️ and even developed <b>smart-contracts</b> on the{" "}
        <b>Ethereum</b> blockchain ⛓️.
      </p>

      <p>
        I speak <b>French</b>, <b>English</b> and <b>Spanish</b> and I'm
        currently learning <b>Dutch</b>.
      </p>

      <blockquote>
        A stranger is just a friend you haven't met yet.
        <br />
        <b>- W. B. Yeats</b>
      </blockquote>
    </Box>
  );
}
