import React from 'react';
import s from './Paragraph.module.scss';
interface IProps {
    children: any;
}

const Paragraph = ({children} :IProps) => {
    return (
        <p className={s.paragraph}>
            {children}
        </p>
    );
}

export default Paragraph;