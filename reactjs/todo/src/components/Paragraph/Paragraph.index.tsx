import React from 'react';
import s from './Paragraph.module.scss';
interface IProps {
  children?: any;
}

const {paragraph} = s;

export const Paragraph = ({children}: IProps) => {
  return <p className={paragraph}>{children}</p>;
};
