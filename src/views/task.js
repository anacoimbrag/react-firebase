import React, { Component } from 'react';
import './task.css'
import { changeTask } from '../firebase/firestore';

class Task extends Component {
    state = {
        saved: null
    }

    onChange = async (e) => {
        try {
            const id = this.props.task.id;
            const checked = e.target.checked;
            await changeTask(id, !checked)
            this.setState({saved: true})
        } catch (e) {
            console.log(e)
            alert('Não foi possível atualizar tarefa.')
        }
    }

    render() {
        const { task } = this.props
        let checked = task.pending

        return (
            <div className="task-container">
            {this.state.saved}
                <label className="task-name">
                    <input type="checkbox" id="isCompleted" checked={!checked} onChange={this.onChange} />
                    {task.name}
                    <p className="task-date">{task.date.toDate().toLocaleDateString('pt-BR')}</p>
                </label>
                
            </div>
        )
    }
}

export default Task;