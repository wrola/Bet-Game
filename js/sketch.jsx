import React from 'react';
import ReactDOM from 'react-dom';
import("../sass/main.scss");
import Header from './components/Header.jsx';
import Main from './components/Main.jsx'

class App extends React.Component {
    constructor(props) {
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
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
})