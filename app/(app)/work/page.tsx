import Box from "@/components/system/box";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

const Work = () => {
  return (
    <Box className="prose lg:prose-lg">
      <h1>Work</h1>

      <div>
        <h4>
          <b>Software Engineer</b>
        </h4>

        <figcaption>
          <b>@ Ledger</b> - [ Permanent position ]
          <br />
          <i>July 2023 - Present</i>
        </figcaption>

        <p>...</p>
      </div>

      <div>
        <h4>
          <b>Founder / CTO / CEO</b>
        </h4>

        <figcaption>
          <b>@ PremierStudio</b> - [ Self-Employed ]
          <br />
          <i>Jan. 2022 - Apr. 2023 - 1 year & 4 months</i>
        </figcaption>

        <p>
          The company I created intended to be a <b>decentralized system</b>{" "}
          enabling <b>NFT</b> holders to bring their <b>assets</b> to life in
          the <b>real world</b>. I engineered the <b>smart contracts</b> that
          underpinned the <b>ecosystem</b> and create a state of the art{" "}
          <b>Decentralized App</b> in <b>React</b> app to interact with it.
          Despite my efforts, challenges in securing suitable talent for
          amplifying marketing and communication hindered the project's
          anticipated success trajectory.
        </p>
      </div>

      <div>
        <h4>
          <b>Software Engineer</b>
        </h4>

        <figcaption>
          <b>@ Bancor</b> - [ Permanent position ]
          <br />
          <i>Feb. 2021 - Jan. 2022 - 1 year</i>
        </figcaption>

        <p>
          As a <b>blockchain</b> developer, I participated in the development of
          core smart contracts in <b>Solidity</b>. I integrated <b>proxy</b>{" "}
          contracts from <b>OpenZeppelin</b> and <b>Chainlink VRF</b> on some of
          our smart contracts. I successfully migrated our codebase from Truffle
          to <b>Hardhat</b>, transitioning from JavaScript to <b>TypeScript</b>.
          Additionally, I contributed to the internal development of Bancor V3
          by creating some internal TypeScript tools for efficient{" "}
          <b>smart contract</b> deployment.
        </p>
      </div>

      <div>
        <h4>
          <b>Software Engineer</b>
        </h4>

        <figcaption>
          <b>@ Rigi.Tech </b> - [ Internship ]
          <br />
          <i>April 2020 - Dec. 2020 - 9 months</i>
        </figcaption>

        <p>
          I led the initial development of our <b>drone</b> fleet's <b>ROS</b>{" "}
          ecosystem, coding <b>communication layers</b> and nodes in <b>C++</b>{" "}
          and <b>Go</b>. I <b>Dockerized</b> ROS nodes for streamlined
          deployment via <b>GitLab CI/CD</b>. Additionally, I engineered an{" "}
          <b>IP Radio</b> network for ground-node communication and created an
          offline <b>React</b> app for intuitive drone interaction.
        </p>
      </div>

      <div>
        <h4>
          <b>Backend Engineer</b>
        </h4>

        <figcaption>
          <b>@ Adagio.io </b> - [ Part-time ]
          <br />
          <i>Sep. 2019 - Mar. 2020 - 7 months</i>
        </figcaption>

        <p>
          I coded daily fixes and feature additions within our Go codebase.
          Optimizing performance via <b>pprof</b> and <b>profiling</b>. I also
          engineered a versatile <b>benchmarking tool</b> in C++, Python, and Go
          to evaluate our <b>Tensorflow</b> model efficacy. By refining request
          timeouts, substantial <b>CPU workload reductions</b> were achieved.
          Moreover, I helped our Lead DevOps in safe deployment initiatives
          utilizing Canary Deployment, Auto Scaling, and <b>Load Balancing</b>{" "}
          through
          <b>GCP</b>.
        </p>
      </div>

      <div>
        <h4>
          <b>Software Engineer</b>
        </h4>

        <figcaption>
          <b>@ toHero.io </b> - [ Internship ]
          <br />
          <i>Dec. 2017 - Jul. 2018 - 8 months</i>
        </figcaption>

        <p>
          I have developed <b>Blockchain Applications</b> in <b>Go</b> for
          clients using <b>Hyperledger Fabric</b>'s technology. Additionally, I
          created an <b>internal SDK</b> to fasten Hyperledger Fabric
          <b>POC</b> development and authored <b>technical "papers"</b> to aid
          client understanding of blockchain requirements. Furthermore, I
          contributed to an <b>open-source</b> tutorial for deploying your first{" "}
          <b>Hyperledger Fabric</b> application.
        </p>
      </div>
    </Box>
  );
};

export default Work;
