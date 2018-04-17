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

class ChooseTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: 'Lechia'
        }
    }

    render(){
    console.log(this.props.teams)
    return(
            <div>
                <label>Team</label>
                <select>
                <option>Choose a team</option>
                    {this.props.teams.map((elem)=><option>{elem.name}</option>)}
            </select>
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
                <p>
                    {this.state.stake}
                </p>
                <input type='number'/>
            </div>
        )
    }
}

const teams = [
    {name: 'Lechia Gdańsk'},
    {name: 'Wisła Kraków'},
    {name: 'Legia Warszawa'},
    {name: 'Arka Gdynia'},
    {name: 'Lech Poznań'},
    {name: 'Jagielonia Białystok'},
    {name: 'Górnik Zabrze'},
    {name: 'Pogoń Szczecin'},
    {name: 'Zagłębie Lubin'},
    {name: "Wisła Płock"},
    {name: 'Korona Kielce'},
    {name: 'Cracovia'},
    {name: 'Śląsk Wrocław'},
    {name: 'Piast Gliwice'},
    {name: 'Sandecja Nowy Sącz'},
    {name: 'Brul-bet Nieciecza'}
]

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <header/>
                <ChooseTeam teams={teams}/>
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


// lista zespołów z kolejki wyświetla się na poczatku wpisujesz ile chcesz obstawić,
// następnie na kilk na nazwę zespołu obstawiasz i msz gotowy zakład.
//wyśiwetlić musisz aktualna kolejkę i obok nazwy kurs na wygraną zespołu
//algorytm na obliczanie szans na wygraną przegraną lub remis.
//jak zapamietac wyniki ? jak ma je trzmyać w pamięci ?