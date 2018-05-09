import React, {Component} from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='header'>
                <h1>The Bet Game</h1>

                <p>Score{this.props.score}</p>
            </div>
        )
    }
}
export default Header;