import React from 'react';
import s from './Header.module.scss';
interface IProps {
  children?: any;
}

const {header} = s;

export const Header = ({children}: IProps) => {
  return <h1 className={header}>{children}</h1>;
};
