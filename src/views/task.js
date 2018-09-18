import React, { Component } from 'react';
import './task.css'

class Task extends Component {

    render() {
        const { task } = this.props

        return (
            <div className="task-container">
                <label className="task-name">
                    <input type="checkbox" id="isCompleted" />
                    {task.name}
                    <p className="task-date">{task.date.toLocaleDateString('pt-BR')}</p>
                </label>
                
            </div>
        )
    }
}

export default Task;