import React from 'react';
import s from './Header.module.scss';
interface IProps {
    children?: any;
}

const Header = ({children} : IProps) => {
    return (
        <h1 className={s.header}>
            {children}
        </h1>
    );
}

export default Header;