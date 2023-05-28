import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const ContainerS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 100;
`;

export const ProjectS = styled.div`
  border-radius: 1rem;
  min-width: 400px;
  margin: 1rem;

  min-height: 500px;
  height: 100%;
  width: 30%;
  position: relative;
  img {
    transition: 0.5s all;
    opacity: 0.9;
    height: 200px;
    border-radius: 10px;
  }

  @media ${devices.tablet} {
    width: 90%;
    min-width: 90%;
    margin: 1rem 0rem;
  }
`;
export const ContentProject = styled.div`
  width: 100%;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    color: ${(props: ThemeProps) => props.theme?.textColor};
    opacity: 0.8;
  }

  .duration {
    opacity: 1;
    color: white;
    font-weight: 500;
  }

  .container-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 2rem;

    .content-icon {
      margin: 1.5rem 0.5rem 0rem 0.5rem;
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      span {
        position: absolute;
        transition: all 0.5s;
        opacity: 0;
        bottom: -20px;
        width: 150px;
        text-align: center;
        font-weight: 500;
        color: ${(props: ThemeProps) => props.theme?.textColor};
      }

      :hover {
        span {
          opacity: 1;
        }
      }
    }
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;

  .social-icon {
    color: ${(props: ThemeProps) => props.theme?.mainColor};
    margin-right: 1rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;
