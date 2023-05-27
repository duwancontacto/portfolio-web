import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const SectionS = styled.section`
  text-align: center;
  position: relative;
  padding: 5rem 0px;
  margin-top: 5rem;
`;

export const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  span {
    color: ${(props: ThemeProps) => props.theme?.mainColor};
  }

  @media ${devices.laptop} {
    font-size: 3rem;
  }
`;

export const Tag = styled.span`
  color: ${(props: ThemeProps) => props.theme?.textColor};
  font-weight: 600;
  padding: 0.3rem 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.5s all;
  :hover {
    transform: scale(1.2);
  }
`;
export const ContainerTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 100;
  justify-content: space-between;

  @media ${devices.tablet} {
    justify-content: center;
  }
`;
export const ContentTag = styled.div`
  border-radius: 5px;
  padding: 1rem;
  width: 30%;
  min-width: 350px;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 300px;
  align-content: flex-start;

  h3 {
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  @media ${devices.tablet} {
    width: 100%;
    min-height: 200px;
    margin-top: 2.5rem;
  }
`;
