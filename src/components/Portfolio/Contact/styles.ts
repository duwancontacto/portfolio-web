import {ThemeProps} from "@/types/themes/theme";
import {devices} from "@/utils/devicesSizes";
import styled from "@emotion/styled";

export const ContainerForm = styled.form`
  display: flex;
  position: relative;
  z-index: 100;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 750px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;

  input {
    width: 49%;
  }

  input,
  textarea {
    border: 2px solid #4b9ee6;
    border-radius: 10px;
    margin-bottom: 2rem;
    height: 50px;
    background: transparent;
    padding: 1rem;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #4b9ee6;
  }

  textarea {
    width: 100%;
    height: auto;
  }

  button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: #4b9ee6;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;

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
  }
`;
