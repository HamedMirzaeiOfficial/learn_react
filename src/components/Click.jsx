import React, { Component } from 'react'

export default class Click extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }  

    render() {
        return (
        <div>
            <p>click count: { this.state.clickCount }</p>
            <button onClick={this.handleClick}>Click</button>
        </div>
        )
    }

    handleClick(event){
        console.log(event);
        this.setState((state) => {
            return {
                clickCount: state.clickCount + 1
            }
        });
    }
}
