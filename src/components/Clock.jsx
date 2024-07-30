import React, {Component} from "react";

export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(), 
        }
        // a bad way. just for learning state 
        setInterval(this.tick.bind(this), 1000)
    }

    render(){
        return (
            <div>
                <p>hello user</p>
                <p>it is {this.state.date.toLocaleTimeString()  }</p>
            </div>
        )
    }

    // a bad way. just for learning state.
    tick(){
        this.setState({date: new Date()});
    }
}