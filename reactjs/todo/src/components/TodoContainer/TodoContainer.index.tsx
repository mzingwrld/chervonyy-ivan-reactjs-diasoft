import React, {Component} from 'react';
import s from './ToDoContainer.module.scss';
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';

const {list, listWrapper, listHeader, listCards, card, cardTitle, cardIcons, cardComposerContainer, addCard} = s;

export class ToDoContainer extends Component {
  render() {
    return (
      <div className={listWrapper}>
        <div className={list}>
          <div className={listHeader}>ToDo</div>
          <div className={listCards}>
            <div className={card}>
              <div className={cardTitle}>Do something 1</div>
              <div className={cardIcons}>
                <EditOutlined />
                <DeleteOutlined />
              </div>
            </div>
            <div className={card}>
              <div className={cardTitle}>Do something loooooooooooooooooooooooooooooooooooooooooong</div>
              <div className={cardIcons}>
                <EditOutlined />
                <DeleteOutlined />
              </div>
            </div>
          </div>
          <div className={cardComposerContainer}>
            <div className={addCard}>
              <PlusOutlined />
              Add new card
            </div>
          </div>
        </div>
      </div>
    );
  }
}
