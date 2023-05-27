import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const NavbarS = styled.nav`
  @media ${devices.tablet} {
    display: none;
  }
`;
export const HeaderS = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;

  .logo {
    font-size: 2.2rem;
    font-weight: 600;
  }

  .navbar-item {
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 2.3rem;
    transition: 0.3s all;
  }

  .navbar-item:hover,
  .navbar-active {
    color: ${(props: ThemeProps) => props.theme?.mainColor};
  }
`;

export const NavbarMobileS = styled.nav`
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`;
export const NavbarMobileContainerS = styled.div`
  position: absolute;
  margin-top: 2rem;
  left: 0px;
  width: 100%;
  z-index: 100;
  background-color: #08131b;
  height: 0vh;
  display: none;
  animation: incrementalHeight 0.3s ease-in-out forwards;
  border-radius: 1rem;

  @media ${devices.tablet} {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @keyframes incrementalHeight {
    0% {
      height: 0vh;
      opacity: 0;
    }
    100% {
      height: 40vh;
      opacity: 1;
    }
  }
`;
