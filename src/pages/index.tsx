import {Inter} from "next/font/google";
import {ReactElement, useEffect} from "react";
import Principal from "@/Layout/Principal";
import Header from "@/components/Portfolio/Header";
import AboutMe from "@/components/Portfolio/AboutMe";
import Skills from "@/components/Portfolio/Skills";
import Projects from "@/components/Portfolio/Projects";
import Contact from "@/components/Portfolio/Contact";
import renderCanvas from "@/components/renderCanvas";
export default function Home() {
  return (
    <div className="bg-dark-blue">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Principal>{page}</Principal>;
};
