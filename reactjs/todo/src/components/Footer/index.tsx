import React from 'react';
import s from './Footer.module.scss';
interface IProps {
    children?: any;
}

const Footer = ({children} :IProps) => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.box}>Menu 1</div>
                <div className={s.box}>Menu 2</div>
                <div className={s.box}>Menu 3</div>
                <div className={s.box}>Menu 4</div>
            </div>
            <div className={s.author}>Ivan Chervony @ React-marathon 2020</div>

            {children}

        </div>
    );
}

export default Footer;