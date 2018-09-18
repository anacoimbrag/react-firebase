import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Submit, OnlyTextButton } from '../components/button/button';
import { VerticalContainer, ListContainer } from '../components/container/container';
import { Input } from '../components/input/input';
import Task from './task';

import '../components/container/container.css';
import { logout } from '../firebase/auth';

class Tasks extends Component {
    state = {
        tasks: []
    }

    doLogout = async () => {
        try {
            await logout()
        } catch (e) {
            console.log(e)
            alert('Não foi possível sair do sistema.')
        }
    }

    render() {
        return (
            <div>
                <header>
                    <OnlyTextButton value="Sair" onClick={this.doLogout}/>
                    <h1>Tarefas</h1>
                </header>
                <main>
                    <VerticalContainer>
                        <VerticalContainer>
                            <Input type="text" placeholder="Tarefa" />
                            <Input type="file" placeholder="Escolha o arquivo" />
                            <Submit value="Criar" />
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