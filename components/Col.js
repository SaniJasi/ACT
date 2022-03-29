import styled from "styled-components";
import { layout, space } from "styled-system";

const Div = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["width"].includes(prop) && defaultValidatorFn(prop),
})`
  ${layout}
  ${space}
  padding: 0 ${(props) => (props.padding ? props.padding : 10)}px;
`;

export const Col = ({ width, children, padding, margin, className }) => {
  return (
    <Div width={width} padding={padding} mb={margin} className={className}>
      {children}
    </Div>
  );
};
