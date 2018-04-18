import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>The Bet Game</h1>
                <p>Score</p>
            </div>
        )
    }
}

class Bet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stake: 0
        }
    }
    performFetch1 = () => {
    }

    render() {
        return (  <div>
                <h2>The bet: {this.state.stake} </h2>
                <input type='number'/>
            </div>
        )
    }
}

class ChooseTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            options: [{name: "Janusze Kodu"}]
        }
    }

    componentDidMount = () =>{
        fetch('http://api.football-data.org/v1/competitions/398/teams', {
            headers: {'X-Auth-Token': '405e8d17c66e46e284d542c0fb7aacd5'},
            dataType: 'json'
        }).then(r => r.json()).then(data => {
            //console.log(data.teams);
            this.setState({
                options: data.teams
            })
        }).catch(e => {
            console.log('Błąd!!!!', e)
        });
    }



    render() {
        return (
            <div>
                <label>Team</label>
                <select>
                    <option>Choose a team</option>
                    {this.state.options.map((elem, i) => <option key={i}>{elem.name}</option>)}
                </select>
                <h2>Oponent
                    {/*{this.props.api.map((elem,i)=> elem. )}*/}
                </h2>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <ChooseTeam/>
                <Bet/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
})
