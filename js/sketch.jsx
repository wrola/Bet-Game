import React from 'react';
import ReactDOM from 'react-dom';
require("../sass/main.scss");


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='header'>
                <h1>The Bet Game</h1>

                <p>Score</p>
            </div>
        )
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            currentOponentTeam: '',
            options: [],
            oponents: [],
            tableLeague: [],
            stake: 0,
            bet: 0,
            dateOfValid: '',
            OponentOfTeam: '',
        }
    }

    componentDidMount = () =>{
        fetch('http://api.football-data.org/v1/competitions/398/teams', {
            headers: {'X-Auth-Token': '405e8d17c66e46e284d542c0fb7aacd5'},
            dataType: 'json'
        }).then(r => r.json()).then(data => {
            const chances = ((Math.random() * 10) + 1).toFixed(2);
            if(toString(chances).length > 4){
                Math.round(chances)
            };
            console.log(chances)
            this.setState({
                options: data.teams,
                stake: chances
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
                team : event.target.value,
            })
        )
    }

    fetchOpponentsFromAPI = (url) =>{
        fetch(url,{
            headers: {'X-Auth-Token': '405e8d17c66e46e284d542c0fb7aacd5'},
            dataType: 'json'
        }).then(r => r.json()).then(data => {
            this.setState({
                oponents: data.fixtures,
            })
            console.log(this.state.oponents)
        }).catch(e => {
            console.log('Błąd!!!!', e)
        });
    }
    handleBet = (e) => {
        const chances = ((Math.random() * 6) + 1).toFixed(2);
        const result =(Math.abs(e.currentTarget.value * chances)).toFixed(2);
        this.setState({
            bet: result
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({

            }

        )




    }

    render() {

        return (
            <div className="main">
                <form type="submit" >
                    <label>Team</label>
                        <select onChange={(e) => {this.handleOption(e)}}>
                        <option>Choose a team</option>
                        {this.state.options.map((elem, i) => <option key={i}>{elem.name}</option>)}
                        </select>
                <h2>Oponents</h2>
                    {this.state.oponents.map((elem, i) => {
                        // console.log(new Date(elem.date) > Date.now());
                        if (new Date(elem.date) > Date.now()) {
                            // console.log(elem.awayTeamName);
                            return <p className='currentOponent'>
                                <span>
                                    {this.state.team === elem.awayTeamName ? elem.homeTeamName : elem.awayTeamName}
                                </span>
                            </p>
                        }
                    })
                };
                    <input type='text' onChange={this.handleBet}/>
                    <button type='button'>BET</button>
                </form>
            </div>
        )
    }
}

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render() {

        return (
            <div className='container'>
                <Header/>
                <Main/>
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
            <Body/>
        )
    }
}
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
})