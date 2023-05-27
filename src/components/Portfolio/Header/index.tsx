import React from "react";
import {ContainerBtn, ContainerSocial, ImgBackground, SectionS} from "./styles";
import GithubSvg from "@/assets/HeaderIcons/GithubSvg";
import LinkedinSvg from "@/assets/HeaderIcons/LinkedinSvg";

import HexagonSvg from "@/assets/HeaderIcons/HexagonSvg";
import CircleBlur from "../../CircleBlur/index";

export default function Header() {
  return (
    <SectionS id="home">
      <CircleBlur isLeft />
      <CircleBlur top={600} isRight spacing={100} />
      <div className="home">
        <h1>
          Hi, I&apos;m <span>Duwan Fortunato</span>
        </h1>
        <div className="text-animated">
          <h3>Fullstack Web Developer</h3>
        </div>
        <p className="home-content">
          Fullstack developer committed to code quality, testing, and continuous
          delivery of scalable and efficient software solutions.
        </p>

        <ContainerBtn>
          <a className="btn" href="#contact">
            Contact me
          </a>
          <a className="btn" href="./CV.pdf" target="_blank">
            Download CV
          </a>
        </ContainerBtn>

        <ContainerSocial>
          <a
            className="social-icon"
            target="_blank"
            href="https://github.com/duwan2112"
          >
            <GithubSvg />
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/duwan-pe%C3%B1a-309453172/"
          >
            <LinkedinSvg />
          </a>
        </ContainerSocial>
      </div>

      {/* <ImgBackground>
        <HexagonSvg />
      </ImgBackground> */}
    </SectionS>
  );
}
