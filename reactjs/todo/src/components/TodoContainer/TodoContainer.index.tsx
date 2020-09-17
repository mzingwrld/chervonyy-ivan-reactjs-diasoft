import React, {Component} from 'react';
import s from './ToDoContainer.module.scss';
import {PlusOutlined} from '@ant-design/icons';
import {Card} from '../Card/Card.index';
import {StyledTextArea, StyledModal} from './StyledTodo';

const {list, listWrapper, listHeader, listCards, cardComposerContainer, addCard} = s;

let sequence = 0;

export class ToDoContainer extends Component {
  state = {
    modalVisiblity: false,
    modalInputValue: '',
    taskItems: [],
  };

  showModal = () => {
    this.setState({
      modalVisiblity: true,
    });
  };

  handleAddTask = () => {
    const {taskItems, modalInputValue} = this.state;
    if (modalInputValue) {
      const history = taskItems;
      const newItem = [{id: sequence, title: modalInputValue}];
      const totalItem = [...history, ...newItem];
      sequence++;
      this.setState({
        modalVisiblity: false,
        modalInputValue: '',
        taskItems: totalItem,
      });
    }
  };

  handleDeleteTask = (_id: number) => {
    const {taskItems} = this.state;
    const idx = taskItems.findIndex((item: any) => item.id === _id);

    const newArray = [...taskItems.slice(0, idx), ...taskItems.slice(idx + 1)];

    this.setState({
      taskItems: newArray,
    });

    return () => {
      return;
    };
  };

  handleCancel = () => {
    this.setState({
      modalVisiblity: false,
    });
  };

  handleChangeOfTextArea = (inputValue: any) => {
    this.setState({
      modalInputValue: inputValue.target.value,
    });
  };

  render() {
    const {modalInputValue, modalVisiblity, taskItems} = this.state;
    return (
      <div className={listWrapper}>
        <div className={list}>
          <div className={listHeader}>ToDo</div>
          <div className={listCards}>
            {taskItems.map(({id, title}) => (
              <Card onDeleted={() => this.handleDeleteTask(id)} key={id} title={title} />
            ))}
          </div>
          <div className={cardComposerContainer}>
            <div className={addCard} onClick={this.showModal}>
              <PlusOutlined />
              Add new card
            </div>
          </div>
        </div>
        <StyledModal
          title="Add a new task"
          visible={modalVisiblity}
          onOk={this.handleAddTask}
          onCancel={this.handleCancel}>
          <StyledTextArea
            value={modalInputValue}
            onChange={this.handleChangeOfTextArea}
            placeholder="e.g. wash dishes"
            autoSize={{minRows: 3, maxRows: 5}}
          />
        </StyledModal>
      </div>
    );
  }
}
