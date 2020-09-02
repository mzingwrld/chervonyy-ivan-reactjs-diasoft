import React from 'react';
import s from './HeaderBlock.module.scss';
interface IProps {
    children?: any;
    hideBackground?: Boolean;
    spaceBackground?: Boolean;
}
/**
 * 
 * {title && <h1 className={s.header}>{title}</h1>} 
 * is equivalent to
 * {title ? <h1 className={s.header}>{title}</h1> : null}  
 */
const HeaderBlock = ({ hideBackground = false, children, spaceBackground = false } : IProps) => {
    const styleCover = hideBackground ? { backgroundImage: 'none' } : {};

    return (
        <div className={spaceBackground ? s.coverSpace : s.cover} style={styleCover}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>
    );
}

export default HeaderBlock;