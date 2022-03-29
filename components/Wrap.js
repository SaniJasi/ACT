import styled from "styled-components";

const Wrap = styled.div`
  max-width: ${(props) => props.theme.sizes.wrap}px;
  padding: 0 ${(props) => props.theme.sizes.padding}px;
  margin: 0 auto;
`;

export const Wrapper = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
