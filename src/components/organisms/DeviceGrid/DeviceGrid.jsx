import PropTypes from "prop-types";

import { Paper, Title } from "@atoms";
import { StyledGrid } from "./DeviceGrid.styles";

export const DeviceGrid = ({ title, children }) => {
  return (
    <Paper>
      <Title as="h3" align="left">
        {title}
      </Title>
      <StyledGrid>{children}</StyledGrid>
    </Paper>
  );
};

DeviceGrid.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
