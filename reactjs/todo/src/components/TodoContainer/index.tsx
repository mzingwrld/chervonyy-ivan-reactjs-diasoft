import React from 'react';
import s from './ToDoContainer.module.scss';
import {PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

class ToDoContainer  extends React.Component {
    
    render () {
        return (
            <div className={s.listWrapper}>
                <div className={s.list}>
                    <div className={s.listHeader}>
                        ToDo
                    </div>
                    <div className={s.listCards}>
                        <div className={s.card}>
                            
                            <div className={s.cardTitle}>Do something 1</div>
                            <div className={s.cardIcons}><EditOutlined /> <DeleteOutlined /></div>
                        </div>
                        <div className={s.card}>
                            <div className={s.cardTitle}>Do something loooooooooooooooooooooooooooooooooooooooooong</div>
                            <div className={s.cardIcons}><EditOutlined /> <DeleteOutlined /></div>
                        </div>
                    </div>
                    <div className={s.cardComposerContainer}>
                        <div className={s.addCard}> <PlusOutlined /> Add new card</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoContainer;