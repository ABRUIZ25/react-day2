import React, { Component } from 'react'


export class App2 extends Component {

    state = {
        list: [
            {
                id: 1,
                item: "top",
            },
            {
                id: 2,
                item: "paper towls",
            },
            {
                id: 3,
                item: "dish soap"
            }
        ]
    }

    showItemList = () => {
        return (
            <ul>
                {this.state.list.map(({ item, id }) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        );
    };

    render() {
        return (
            <div className="app2">
                <h1>hello</h1>
                <p>map</p>
                <ul>{this.state.list.map(({ item, id }) => {
                    return <li key={id}> {item}</li>
                })}</ul>

                <ul>



                    {this.state.list.map(({ item, id }) => (
                        <li key={id}>{item}</li>
                    ))}


                </ul>

                {this.showItemList()}

            </div>



        )
    }
}

export default App2
