import React from 'react';
import ReactDOM from 'react-dom';
require("../sass/main.scss");

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 class="red">The Bet Game</h1>

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

    render() {
        return (
            <div>
                <h2>The bet: {this.state.stake} </h2>
                <input type='number'/>
                <button type='submit'>BET</button>
                <table>

                </table>
            </div>
        )
    }
}

class ChooseTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            options: [],
            oponents: []
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

    handleOption = (event) =>{
        // console.log(event.target.value);
        this.state.options.forEach((elem,i)=>{
            if(elem.name === event.target.value){
                this.fetchOpponentsFromAPI(elem._links.fixtures.href);
            }

        },this.setState({
                team : event.target.value
            })
        )
    }

    fetchOpponentsFromAPI = (url) =>{
        fetch(url,{
            headers: {'X-Auth-Token': '405e8d17c66e46e284d542c0fb7aacd5'},
            dataType: 'json'
        }).then(r => r.json()).then(data => {
            this.setState({
                oponents: data.fixtures
            })
        }).catch(e => {
            console.log('Błąd!!!!', e)
        });
    }


    render() {
        return (
            <div>
                <label>Team</label>
                <select onChange={(e)=>{this.handleOption(e)}}>
                    <option>Choose a team</option>
                    {this.state.options.map((elem, i) => <option key={i}>{elem.name}</option>)}
                </select>
                <h2>Oponents
                    {this.state.oponents.map((elem,i)=>{
                        return <p>
                                {console.log((elem.date))}
                            <span className={  new Date(elem.date) > Date.now() ? 'TIMED' : 'FINISHED'}>
                                {this.state.team === elem.awayTeamName ? elem.homeTeamName : elem.awayTeamName}
                            </span>
                        </p>
                    })}
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
