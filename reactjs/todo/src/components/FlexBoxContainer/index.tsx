import * as React from 'react';
import s from './FlexBoxContainer.module.scss';

interface IProps {
    children?: any;
    directionRow?: Boolean;
    directionCol?: Boolean;
}

const FlexBoxContainer = ({ directionRow = false, directionCol = false, children } : IProps) => {

    if(directionRow) {
        return (
        <div className={s.container +' '+ s.containerRow}>
            {children}
        </div>
        );
    }
    if(directionCol) {
        return (
            <div className={s.container +' '+ s.containerCol}>
                {children}
            </div>
        );
    }
    else {
        return (
            <div className={s.container}>
                {children}
            </div>
        ); 
    }
}

export default FlexBoxContainer;