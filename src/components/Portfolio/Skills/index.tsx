import React from "react";
import {ContainerTag, ContentTag, Header, SectionS, Tag} from "./styles";
import CircleBlur from "../../CircleBlur/index";
import {knowledge} from "./helper";

export default function Skills() {
  return (
    <SectionS id="skills">
      <CircleBlur top={800} isRight spacing={100} />
      <Header>Skills</Header>

      <ContainerTag>
        {knowledge.map((type) => (
          <ContentTag key={type.type}>
            <h3>{type.type}</h3>
            {type.skills.map(({label, Icon, color}) => (
              <Tag key={label}>
                <Icon size={40} color={color || "#00abf0"} />

                {label}
              </Tag>
            ))}
          </ContentTag>
        ))}
      </ContainerTag>
    </SectionS>
  );
}
