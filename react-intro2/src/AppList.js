import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export class AppList extends Component {

    state = {
        toDoArray: [
            {
                id: uuidv4(),
                todo: 'walk '
            },
            {
                id: uuidv4(),
                todo: 'the '
            },
            {
                id: uuidv4(),
                todo: 'dog'
            },


        ],
        newToDo: ''

    }

    HandleOnChange = (event) => {
        this.setState({
            newToDo: event.target.value
        })
    }
    showToDoArray = () => {
        return (
            <ul>
                {this.state.toDoArray.map(({ todo, id }) => (
                    <li key={id}>{todo}</li>
                ))}
            </ul>
        )
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let newArray = [...this.state.toDoArray, { id: uuidv4(), todo: this.state.newToDo }
        ]
        this.setState({
            toDoArray: newArray,
        })
    }




    render() {
        const { newToDo } = this.state
        return (
            <div>
                <h1>list</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Add Todo:</label>
                    <input name="todo" value={newToDo} onChange={this.HandleOnChange} />
                    <button>Submit</button>
                </form>

                {this.showToDoArray()}

            </div>
        )
    }
}

export default AppList
