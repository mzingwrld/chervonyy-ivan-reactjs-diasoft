import React from 'react';
import s from './FlexBoxContainer.module.scss';
  
const FlexBoxContainer = ({ directionRow = false, directionCol = false, children} ) => {
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