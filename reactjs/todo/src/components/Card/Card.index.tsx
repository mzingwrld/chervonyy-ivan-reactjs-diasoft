import React, {Component} from 'react';
import s from './Card.module.scss';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

const {card, cardTitle, cardIcons} = s;

interface IRecipeProps {
  title?: string;
  onDeleted?: () => void;
}

export class Card extends Component<IRecipeProps, unknown> {
  render() {
    const {title, onDeleted} = this.props;
    return (
      <div className={card}>
        <div className={cardTitle}>{title}</div>
        <div className={cardIcons}>
          <EditOutlined />
          <DeleteOutlined onClick={onDeleted} />
        </div>
      </div>
    );
  }
}
