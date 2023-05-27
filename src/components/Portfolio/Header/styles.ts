import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const SectionS = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  position: relative;

  min-height: calc(100vh - 8rem);

  align-items: center;

  .home {
    position: relative;
    z-index: 5;
    h1 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.3;
    }
  }

  .text-animated {
    position: relative;
    h3 {
      font-size: 3rem;
      font-weight: 700;
      color: transparent;
      -webkit-text-stroke: 0.7px
        ${(props: ThemeProps) => props.theme?.mainColor};
      background-image: ${(props: ThemeProps) =>
        `linear-gradient(${props.theme?.mainColor},${props.theme?.mainColor})`};

      background-repeat: no-repeat;
      -webkit-background-clip: text;
      background-position: -100rem 0;
      animation: homeBgText 6s linear infinite;
      animation-delay: 2s;
    }

    @keyframes homeBgText {
      0%,
      10%,
      100% {
        background-position: -80rem 0;
      }
      65%,
      85% {
        background-position: 0 0;
      }
    }
  }

  .home-content {
    font-size: 1.5rem;
    margin: 2rem 0rem 3rem;
    width: 80%;
  }

  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .home {
      h1 {
        font-size: 2.5rem;
      }
    }

    .text-animated {
      h3 {
        font-size: 2rem;
      }
    }

    .home-content {
      font-size: 1rem;
    }
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 14rem;
    height: 4rem;
    background: ${(props: ThemeProps) => props.theme?.mainColor};
    border-radius: 0.8rem;
    border: 0.2rem solid ${(props: ThemeProps) => props.theme?.mainColor};
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: ${(props: ThemeProps) => props.theme?.background};
    z-index: 1;
    overflow: hidden;
    transition: 0.5s all;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  .btn:nth-child(2) {
    background: transparent;
    color: ${(props: ThemeProps) => props.theme?.mainColor};
  }
  .btn:nth-child(2)::before {
    background: ${(props: ThemeProps) => props.theme?.mainColor};
  }
  .btn:nth-child(2):hover {
    color: ${(props: ThemeProps) => props.theme?.background};
  }
  .btn:hover {
    color: ${(props: ThemeProps) => props.theme?.mainColor};
  }

  .btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    background: ${(props: ThemeProps) => props.theme?.background};
    transition: 0.5s all;
  }
  .btn:hover::before {
    width: 100%;
  }

  @media ${devices.laptop} {
    justify-content: center;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  margin-top: 2rem;

  .social-icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2.5px solid ${(props: ThemeProps) => props.theme?.mainColor};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    z-index: 1;
    margin-right: 1rem;
    overflow: hidden;
    color: red;
    transition: 0.5s all;
  }

  .social-icon::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    z-index: -1;
    background: ${(props: ThemeProps) => props.theme?.mainColor};
    transition: 0.5s all;
    border-radius: 50%;
  }
  .social-icon:hover::before {
    width: 100%;
  }

  .social-icon:hover {
    g,
    path {
      transition: 0.5s all;
      fill: ${(props: ThemeProps) => props.theme?.background};
    }
  }

  @media ${devices.laptop} {
    justify-content: center;
  }
`;

export const ImgBackground = styled.div`
  animation: levitation 2s ease-in-out infinite;
  svg {
    transition: 1s all;
  }

  svg:hover {
    opacity: 0.5;
  }

  @media ${devices.laptop} {
    margin-top: 4rem;
    svg {
      width: 100%;
    }
  }

  @keyframes levitation {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;
