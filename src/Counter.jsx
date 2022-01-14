import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter : 0
        }
    }
    
    componentDidMount() {
       this.counterID= setInterval(() => {
            this.setState({counter : this.state.counter + 1})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.counterID);
    }

    render() {
        return (
          <div>
            The time interval since the last component was mounted : {" "} {this.state.counter} {'(s)'}
          </div>
        );
    }
}

export default Counter
