import React, {Component} from 'react';
import {HeaderBlock} from '../../components/HeaderBlock/HeaderBlock.index';
import {Header} from '../../components/Header/Header.index';
import {Paragraph} from '../../components/Paragraph/Paragraph.index';
import {Footer} from '../../components/Footer/Footer.index';
import {ToDoContainer} from '../../components/TodoContainer/TodoContainer.index';

export class HomePage extends Component {
  render() {
    return (
      <>
        <HeaderBlock>
          <Header>ToDo App</Header>
          <Paragraph>Не пропусти ни одной задачи!</Paragraph>
          <ToDoContainer />
        </HeaderBlock>
        <Footer />
      </>
    );
  }
}
