import styled from "styled-components";
import {BaseTitle} from "./componets/typography"

type tColors =
  | "--whiter"
  | "--color-primary"
  | "--color-primary-Focus"
  | "--color-primary-Negative"
  | "--grey-4"
  | "--grey-3"
  | "--grey-2"
  | "--grey-1"
  | "--grey-0";

interface iStyledTitleProps {
  color: string;
  weight?: number;
  size?: number;
  height?: number;
}

export const StyledTitle = styled(BaseTitle)<iStyledTitleProps>`
  color: var(${({ color }) => color});
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  line-height: ${({ height }) => height}px;
`;