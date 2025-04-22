// Divider.tsx
import styled from "styled-components";

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 1rem 0;
  width: 100%;
`;

export default function Divider() {
  return <StyledDivider />;
}
