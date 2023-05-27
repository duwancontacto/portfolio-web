import React from "react";
import {
  CircleSpinner,
  Container,
  ContainerImage,
  ContentS,
  Header,
  SectionS,
} from "./styles";
import Profile from "../../../assets/img/perfil.jpeg";
import Image from "next/image";
import CircleBlur from "@/components/CircleBlur";
export default function AboutMe() {
  return (
    <SectionS id="about">
      <CircleBlur isLeft top={300} />

      <Header>
        About <span>Me</span>
      </Header>

      <Container>
        <ContentS>
          <p>
            Hi there!, My name is Duwan Fortunato. I am a Fullstack web
            developer and Blockchain developer from Venezuela. I have 3 years of
            experience and I am passionate about technology, facing challenges
            and learn new things. I offer applications with good performance and
            an attractive user interface that make your experience an
            unforgettable memory.
          </p>
        </ContentS>
      </Container>
    </SectionS>
  );
}
