import {ThemeProps} from "@/types/themes/theme";
import styled from "@emotion/styled";

export const Container = styled.section`
  background-color: ${(props: ThemeProps) => props.theme?.background};
  color: ${(props: ThemeProps) => props.theme?.textColor};
  min-height: 100vh;
`;

export const Content = styled.section`
  max-width: 1500px;
  position: relative;
  margin: 0 auto;
  padding: 0rem 5%;
`;
