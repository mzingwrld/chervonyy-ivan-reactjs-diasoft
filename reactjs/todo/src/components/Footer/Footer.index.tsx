import React from 'react';
import s from './Footer.module.scss';
interface IProps {
  children?: any;
}

const {footer, author} = s;

export const Footer = ({children}: IProps) => {
  return (
    <div className={footer}>
      <div className={author}>Ivan Chervony @ React-JS Diasoft 2020</div>
      {children}
    </div>
  );
};
