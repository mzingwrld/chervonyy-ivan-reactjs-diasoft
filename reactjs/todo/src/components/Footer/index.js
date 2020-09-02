import React from 'react';
import s from './Footer.module.scss';

const Footer = ({children}) => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.box}></div>
                <div className={s.box}></div>
                <div className={s.box}></div>
                <div className={s.box}></div>
            </div>
            <div className={s.author}>Ivan Chervonyy @ ToDo App 2020</div>

            {children}

        </div>
    );
}

export default Footer;