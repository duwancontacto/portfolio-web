import React, {ReactElement} from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import {Container, Content} from "./styles";
import Footer from "@/components/Footer";

export default function Principal({children}: {children: ReactElement}) {
  return (
    <Container>
      <Head>
        <title>Duwan Fortunato | Portfolio</title>
      </Head>
      <Content>
        <Navbar />
        {children}

        <Footer />
      </Content>
    </Container>
  );
}
