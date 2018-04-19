import React from 'react';
import ReactDOM from 'react-dom';
var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);
class DataBase extends React.Component{
    constructor(props){
    super(props);

    }
    handleClick = () => {(
    firebase.initializeApp(config);
    )}
    render() {
        var config = {
            apiKey: "AIzaSyChHCkUEdDjvFKWRCn5FH-8m88AYV8vG90",
            authDomain: "betgame-a14fb.firebaseapp.com",
            databaseURL: "https://betgame-a14fb.firebaseio.com",
            projectId: "betgame-a14fb",
            storageBucket: "betgame-a14fb.appspot.com",
            messagingSenderId: "725657028838"
        };

        return (
            <div>
            <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
            </div>
    </script>
            </div>
        )
    }
}
class EmailHeader extends React.Component {
    constructor(props){
        super(props);

    }
    writeUserData = (userId, name, email, imageUrl) => {(
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });

    )
    }
    render() {
        var database = firebase.database();
        return (

        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Email>
            <EmailFooter footer="myself"/>
            <EmailHeader subject="Hello Honey"/>
            <EmailBody textBody="I'm home honey"/>

        </Email>,
        document.getElementById('app')
    );
});

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