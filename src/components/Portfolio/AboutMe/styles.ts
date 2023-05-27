import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const SectionS = styled.section`
  text-align: center;
  position: relative;
  padding-top: 3rem;
`;

export const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  span {
    color: ${(props: ThemeProps) => props.theme?.mainColor};
  }

  @media ${devices.laptop} {
    font-size: 3rem;
    margin-top: 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerImage = styled.div`
  position: relative;

  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px
  border-radius: 50%;
  overflow: hidden;
  padding: 1rem;

  img {
    border: 0.2rem solid ${(props: ThemeProps) => props.theme?.mainColor};
    border-radius: 50%;
  }
`;

export const CircleSpinner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: 0.2rem solid ${(props: ThemeProps) => props.theme?.background};
  border-bottom: 0.2rem solid ${(props: ThemeProps) => props.theme?.background};
  border-left: 0.2rem solid ${(props: ThemeProps) => props.theme?.mainColor};
  border-right: 0.2rem solid ${(props: ThemeProps) => props.theme?.mainColor};
`;

export const ContentS = styled.div`
  width: 50%;
  h3 {
    font-size: 2.3rem;
    font-weight: 500;
  }
  p {
    font-size: 1.3rem;
    margin: 2rem 0 3rem;
  }

  @media ${devices.tablet} {
    width: 90%;
  }

  @media ${devices.laptop} {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;
