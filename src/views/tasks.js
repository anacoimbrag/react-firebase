import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Submit, OnlyTextButton } from '../components/button/button';
import { VerticalContainer, ListContainer } from '../components/container/container';
import { Input } from '../components/input/input';
import Task from './task';

import '../components/container/container.css';
import { logout } from '../firebase/auth';
import { observeTasks, createTask } from '../firebase/firestore';

class Tasks extends Component {
    state = {
        newTask: undefined,
        tasks: []
    }

    componentDidMount() {
        observeTasks(tasks => {
            this.setState({ tasks })
        })
    }

    doLogout = async () => {
        try {
            await logout()
        } catch (e) {
            console.log(e)
            alert('Não foi possível sair do sistema.')
        }
    }

    onChangeTask = e => {
        const value = e.target.value;
        this.setState({ newTask: value })
    }

    addTask = async () => {
        try {
            const task = {
                name: this.state.newTask,
                date: new Date(),
                pending: true
            }
            await createTask(task)
        } catch (e) {
            console.log(e)
            alert('Não foi possível criar nova tarefa.')
        }
    }

    render() {
        return (
            <div>
                <header>
                    <OnlyTextButton value="Sair" onClick={this.doLogout} />
                    <h1>Tarefas</h1>
                </header>
                <main>
                    <VerticalContainer>
                        <VerticalContainer>
                            <Input type="text" placeholder="Tarefa" onChange={this.onChangeTask} />
                            <Input type="file" placeholder="Escolha o arquivo" />
                            <Submit value="Criar" onClick={this.addTask} />
                        </VerticalContainer>
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