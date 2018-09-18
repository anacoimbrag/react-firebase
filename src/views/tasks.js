import React, { Component } from 'react';
import { Submit, OnlyTextButton } from '../components/button/button';
import { VerticalContainer, ListContainer } from '../components/container/container';
import { VerticalForm, Input } from '../components/input/input';
import Task from './task';

import '../components/container/container.css';

class Tasks extends Component {
    state = {
        tasks: []
    }

    render() {
        return (
            <div>
                <header>
                    <OnlyTextButton value="Sair" />
                    <h1>Tarefas</h1>
                </header>
                <main>
                    <VerticalContainer>
                        <VerticalForm>
                            <Input type="text" placeholder="Tarefa" />
                            <Input type="file" placeholder="Escolha o arquivo" />
                            <Submit value="Criar" />
                        </VerticalForm>
                        {
                            this.state.tasks.length === 0 &&
                            <div className="empty-list">Não existe nenhuma tarefa cadastrada.</div>
                        }
                        <ListContainer>
                            {
                                this.state.tasks.map((task, i) => <Task key={i} {...{ task }} />)
                            }
                        </ListContainer>
                    </VerticalContainer>
                </main>
            </div>
        )
    }
}

export default Tasks;