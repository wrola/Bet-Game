import React from 'react';
import ReactDOM from 'react-dom';
class DashBoard extends React.Component{
    constructor(props){
    super(props);

    }
    render() {

        return (

        )
    }
}
//
// team_id
// integer (optional) Example: 432
// Search for matches by team
//
// round_ids
// integers (optional) Example: 12,524,56
// Search by rounds
//
// competition_id
// integer (optional) Example: 2
// Search by competition
//
// from
// datetime (optional) Example: 2014-11-19T12:00:00-03:00
// Matches that started after this time
//
// to
// datetime (optional) Example: 2014-11-24T12:00:00-04:00
// Matches that started before this
performFetch = ()=>{
    let url = 'https://www.football-data.org/v1/competitions'+this.props.isbn
    fetch(url).then( r =>r.json()).then(data=>{
        this.setState({
            data: data.items[0].volumeInfo.title
        })
    })
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <DashBoard/>,
        document.getElementById('app')
    );
})


// lista zespołów z kolejki wyświetla się na poczatku wpisujesz ile chcesz obstawić,
// następnie na kilk na nazwę zespołu obstawiasz i msz gotowy zakład.
//wyśiwetlić musisz aktualna kolejkę i obok nazwy kurs na wygraną zespołu
//algorytm na obliczanie szans na wygraną przegraną lub remis.
//jak zapamietac wyniki ? jak ma je trzmyać w pamięci ?