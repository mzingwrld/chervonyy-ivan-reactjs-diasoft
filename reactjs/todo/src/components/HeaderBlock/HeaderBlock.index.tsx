import React from 'react';
import s from './HeaderBlock.module.scss';
interface IProps {
  children?: any;
  hideBackground?: boolean;
  spaceBackground?: boolean;
}
/**
 *
 * {title && <h1 className={s.header}>{title}</h1>}
 * is equivalent to
 * {title ? <h1 className={s.header}>{title}</h1> : null}
 */
const {coverSpace, cover, wrap} = s;

export const HeaderBlock = ({hideBackground = false, children, spaceBackground = false}: IProps) => {
  const styleCover = hideBackground ? {backgroundImage: 'none'} : {};

  return (
    <div className={spaceBackground ? coverSpace : cover} style={styleCover}>
      <div className={wrap}>{children}</div>
    </div>
  );
};
