import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { GridConsumer } from "./context";

import { keyGenerator } from "../../utils";
import withContext from "../withContext";

import componentShape from "../shapes/componentShape";

import {
  CENTER,
  SPACE_BETWEEN,
  ROW,
  COLUMN,
  DISPLAY_FLEX,
  STRETCH
} from "./constants";

function location(from, to) {
  if (from !== null && to !== null) {
    return `${from} / ${to}`;
  }
  return `${from}`;
}

const propTypes = {
  component: componentShape,

  row: PropTypes.number,
  toRow: PropTypes.number,

  col: PropTypes.number,
  toCol: PropTypes.number,
  isCenter: PropTypes.bool,

  style: PropTypes.objectOf(PropTypes.string),

  autoPositionCell: PropTypes.func.isRequired,

  isHorizontal: PropTypes.bool,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  component: "div",

  row: null,
  toRow: null,

  col: 0,
  toCol: null,
  isCenter: false,

  style: {},

  isHorizontal: true
};

/**
 * Used only when the Cell type is list
 * render option as defautl
 */
class GridItem extends PureComponent {
  state = {
    key: keyGenerator("gridItem")
  };

  render() {
    const {
      component: CellComponent,

      row,
      toRow,

      col,
      toCol,

      isCenter,
      isHorizontal,

      style: {
        display = DISPLAY_FLEX,

        flexDirection: fDirection,
        alignItems: aItems,
        ...otherStyle
      },

      autoPositionCell,

      children
    } = this.props;

    const { key } = this.state;

    // console.log('GridItem updated');
    const autoPosition = autoPositionCell({ key, row, toRow });

    const container = {
      display,

      ...(isHorizontal
        ? {
            flexDirection: fDirection || ROW,
            alignItems: aItems || CENTER
          }
        : {
            flexDirection: fDirection || COLUMN,
            alignItems: aItems || STRETCH
          }),

      justifyContent: isCenter ? CENTER : SPACE_BETWEEN,

      gridRow: location(autoPosition, toRow),
      gridColumn: location(col, toCol),

      ...otherStyle
    };

    return <CellComponent style={container}>{children}</CellComponent>;
  }
}

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

export { GridItem as PureGridItem };

export default withContext({
  Component: GridItem,
  Consumer: GridConsumer,
  contextProps: ["autoPositionCell"]
});
