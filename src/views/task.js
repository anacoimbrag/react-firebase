import React, { Component } from 'react';
import './task.css'
import { changeTask } from '../firebase/firestore';
import { getUrl } from '../firebase/storage';

class Task extends Component {

    state = {
        url: undefined
    }

    async componentDidMount() {
        try {
            const url = await getUrl(this.props.task.id)
            this.setState({ url })
        } catch (e) { }
    }

    onChange = async (e) => {
        try {
            const id = this.props.task.id;
            const checked = e.target.checked;
            await changeTask(id, !checked)
        } catch (e) {
            console.log(e)
            alert('Não foi possível atualizar tarefa.')
        }
    }

    render() {
        const { task } = this.props

        return (
            <React.Fragment>
                <div className="task-container">
                    <label className="task-name">
                        <input type="checkbox" id="isCompleted" checked={!task.pending} onChange={this.onChange} />
                        {task.name}
                        <p className="task-date">{task.date.toDate().toLocaleDateString('pt-BR')}</p>
                    </label>
                    {
                        this.state.url &&
                        <img className="task-image" alt={task.name} src={this.state.url} />
                    }
                </div>
                <hr />
            </React.Fragment>

        )
    }
}

export default Task;