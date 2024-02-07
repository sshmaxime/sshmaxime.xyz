import Box from "@/components/system/box";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

const Education = () => {
  return (
    <Box className="prose lg:prose-lg">
      <h1>Education</h1>

      <div>
        <h4>
          <b>Royal Melbourne Institute of Technology</b>
        </h4>

        <figcaption></figcaption>

        <figcaption>
          Master's degree in computer science
          <br />
          <i>July 2018 - July 2019</i>
        </figcaption>

        <p>
          The topics studied include <b>cloud</b> computing technologies,{" "}
          <b>peer to peer</b> programming, <b>IoT</b> and{" "}
          <b>artificial intelligence</b>.
        </p>
      </div>

      <Separator className="mx-auto w-1/6" />

      <div>
        <h4>
          <b>Epitech Montpellier</b>
        </h4>

        <figcaption>
          Master & Bachelor degree in computer science
          <br />
          <i>Sept. 2015 - June 2020</i>
        </figcaption>

        <p>
          The topics studied include programming languages such as <b>C</b>,{" "}
          <b>C++</b> and <b>Python</b>. We also discover the joys of <b>I</b>
          nter <b>P</b>rocessus <b>C</b>ommunications with <b>Semaphore</b> and{" "}
          <b>Mutex</b>. Developed some indie games using <b>3D</b> engines.
          Coded few <b>client/server</b> systems.
        </p>
      </div>

      <Separator className="mx-auto w-1/6" />

      <div>
        <h4>
          <b>Lycée Jean Jaures</b>
        </h4>

        <figcaption>
          High School Diploma in Science
          <br />
          <i>Sept. 2011 - June 2014</i>
        </figcaption>
      </div>
    </Box>
  );
};

export default Education;
