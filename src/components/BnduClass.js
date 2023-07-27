import React from "react";
import { Component } from "react";

//accesed props without constructor 
class Bandu extends Component {
    state = {
        count: 0
    }

    render() {
        return <div className="bandu">
            <h1>BANDU IS HERE</h1>
            <h3>FAVOURITE SPORT : {this.props.favSport}</h3>
            <h3>FAVOURITE ATHELETE : {this.props.favAthelete}</h3>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>INCREMENT</button>
            <h1>{this.state.count}</h1>
        </div>
    }
}

export default Bandu