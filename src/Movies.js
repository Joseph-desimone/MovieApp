import React from "react";
import Counter from "./rating";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,

        };
    }

    render() {
        return (
            <h6>
                {this.state.name} 
            </h6>
        );
    }
}