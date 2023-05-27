import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const SectionS = styled.section`
  text-align: center;
  position: relative;
`;

export const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 5rem;
  text-align: center;
  font-weight: 700;
  padding-top: 4rem;
  span {
    color: ${(props: ThemeProps) => props.theme?.mainColor};
  }

  @media ${devices.laptop} {
    font-size: 3rem;
    margin-top: 5rem;
  }
`;
