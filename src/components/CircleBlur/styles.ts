import {CircleBubbleProps} from "@/types/models/CircleBubble";
import styled from "@emotion/styled";
import {devices} from "@/utils/devicesSizes";
export const CircleBlurS = styled.div`
  position: absolute;
  left: ${(props: CircleBubbleProps) =>
    props.isLeft ? `${props.spacing || 0}px` : "inherit"};
  right: ${(props: CircleBubbleProps) =>
    props.isRight ? `${props.spacing || 0}px` : "inherit"};
  top: ${(props: CircleBubbleProps) => props.top || 0}px;
  height: ${(props: CircleBubbleProps) => props.height || 300}px;
  width: ${(props: CircleBubbleProps) => props.width || 300}px;
  border-radius: 50%;
  background: ${(props: CircleBubbleProps) => props.customColor || "#2272a9"};
  pointer-events: none;
  opacity: 0.7;

  --tw-blur: blur(64px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
    var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate)
    var(--tw-sepia) var(--tw-drop-shadow);

  @media ${devices.mobileL} {
    display: none;
  }
`;
