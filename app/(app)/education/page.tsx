import Box from "@/components/system/box";

const Education = () => {
  return (
    <Box className="prose lg:prose-lg">
      <h2>Education</h2>

      <div>
        <h4>Royal Melbourne Institute of Technology</h4>

        <figcaption>
          Master's degree in computer science - <i>July 2018 - July 2019</i>
        </figcaption>

        <p>
          The topics studied include <b>cloud</b> computing technologies,{" "}
          <b>peer to peer</b> programming, <b>IoT</b> and{" "}
          <b>artificial intelligence</b>.
        </p>
      </div>

      <div>
        <h4>Epitech Montpellier</h4>

        <figcaption>
          Master's degree in computer science - <i>Sept. 2019 - June 2020</i>
          <br />
          Bachelor's degree in computer science - <i>Sept. 2015 - June 2018</i>
        </figcaption>

        <p>
          The topics studied include programming languages such as <b>C</b>,{" "}
          <b>C++</b> and <b>Python</b>. We also discover the joys of <b>I</b>
          nter <b>P</b>rocessus <b>C</b>ommunications with <b>Semaphore</b> and{" "}
          <b>Mutex</b>. Developed some indie games using <b>3D</b> engines.
          Coded few <b>client/server</b> systems.
        </p>
      </div>

      <div>
        <h4>Lycée Jean Jaures</h4>

        <figcaption>
          High School Diploma in Science - <i>Sept. 2011 - June 2014</i>
        </figcaption>
      </div>
    </Box>
  );
};

export default Education;
