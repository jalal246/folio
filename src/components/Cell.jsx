/* eslint no-underscore-dangle: ["error", { "allow": ["_nameRef", "_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

import InputSelect from './baseComponents/CellInput';
import ButtonSelect from './baseComponents/CellButton';
import CellSelect from './baseComponents/CellSelect';
import { ValuesConsumer } from '../context';

import { CHECKBOX, RADIO, SELECT, LIST } from '../constants';

function recognizeCellType(type) {
  let CallComponent;
  let isBtn = false;

  if (type === SELECT || type === LIST) {
    CallComponent = CellSelect;
  } else if (type === CHECKBOX || type === RADIO) {
    CallComponent = ButtonSelect;
    isBtn = true;
  } else {
    CallComponent = InputSelect;
  }
  return { CallComponent, isBtn };
}

function Cell({
  component,

  type,
  nameRef,
  groupName,

  // is there better solution for this
  value,
  checked,

  children,

  ...attr
}) {
  console.log('cell render');
  const { CallComponent, isBtn } = recognizeCellType(type);

  let initValue = value || checked;
  if (initValue === undefined) {
    initValue = isBtn ? false : '';
  }

  return (
    <ValuesConsumer>
      {({ registerCell, updateCellValue, values }) => {
        registerCell(nameRef, initValue, groupName);

        const valProps = {
          initValue,
          ...(isBtn && { bindingValue: values[nameRef] })
        };

        return (
          <CallComponent
            component={component}
            type={type}
            {...valProps}
            nameRef={nameRef}
            groupName={groupName}
            attr={attr}
            updateCellValue={updateCellValue}
          >
            {children}
          </CallComponent>
        );
      }}
    </ValuesConsumer>
  );
}

Cell.propTypes = {
  // col: PropTypes.number,
  // row: PropTypes.number,

  component: PropTypes.node
};
Cell.defaultProps = {
  // col: 0,
  // row: 0,

  component: undefined
};

Cell.displayName = 'Cell';

export default Cell;