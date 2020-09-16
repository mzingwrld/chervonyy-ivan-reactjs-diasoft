import * as React from 'react';
import s from './FlexBoxContainer.module.scss';

interface IProps {
  children?: any;
  directionRow?: boolean;
  directionCol?: boolean;
}
const {container, containerCol, containerRow} = s;

export const FlexBoxContainer: React.FC = ({directionRow = false, directionCol = false, children}: IProps) => {
  if (directionRow) {
    return <div className={`${container} ${containerRow}`}>{children}</div>;
  }
  if (directionCol) {
    return <div className={`${container} ${containerCol}`}>{children}</div>;
  } else {
    return <div className={`${container}`}>{children}</div>;
  }
};
