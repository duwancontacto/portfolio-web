import {Header, SectionS} from "@/components/Section/styles";
import React from "react";

import {ContainerLinks, ContainerS, ContentProject, ProjectS} from "./styles";
import {Project} from "@/types/models/Project";
import Image from "next/image";
import {freelanceProjects, projects} from "./helpers";

const ProjectItem = (project: Project) => {
  return (
    <ProjectS>
      <Image src={project.image} alt={`${project.name}`} height="300" />

      <ContentProject>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p className="duration">{project.duration}</p>

        <div className="container-icons">
          {project.skills?.map(({Icon, color, label}, index) => (
            <div className="content-icon" key={index}>
              <Icon size={30} color={color || "#fff"} />
              <span>{label} </span>
            </div>
          ))}
        </div>
        <ContainerLinks>
          <a className="social-icon" target="_blank" href={project.overview}>
            Preview
          </a>
        </ContainerLinks>
      </ContentProject>
    </ProjectS>
  );
};

export default function Projects() {
  return (
    <SectionS id="experiencie">
      <Header>
        Enterprice <span>Projects</span>
      </Header>

      <ContainerS>
        {projects?.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ContainerS>

      <Header>
        Freelance <span>Projects</span>
      </Header>

      <ContainerS>
        {freelanceProjects?.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ContainerS>
    </SectionS>
  );
}
