import styled from "styled-components";
import { flexbox } from "styled-system";

const Flex = styled.div`
  display: flex;
  margin: 0 -${(props) => props.margin}px;
  ${flexbox};
`;

export const Row = ({
  children,
  alignItems,
  justifyContent,
  margin = 10,
  className,
}) => {
  return (
    <Flex
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap="wrap"
      margin={margin}
      className={className}
    >
      {children}
    </Flex>
  );
};
