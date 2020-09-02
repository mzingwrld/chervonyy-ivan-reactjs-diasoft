import React, {Component} from 'react';
import HeaderBlock from '../../components/HeaderBlock';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Footer from '../../components/Footer';
import ToDoContainer from '../../components/TodoContainer';

class HomePage extends Component {
    render() {
        return (
            <>
                <HeaderBlock>
                    <Header>
                        ToDo App
                    </Header>
                    <Paragraph>
                        Не пропусти ни одной задачи!
                    </Paragraph>
                    <ToDoContainer />
                </HeaderBlock>
                <Footer />
            </>
          );
    }
}

export default HomePage;