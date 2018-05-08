import React, {Component} from "react";

class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            dateOfTheMatch: '',
            oponents: '',
        }
    }
    handleOption = (event) =>{
        this.props.options.forEach((elem,i)=>{
                if(elem.name === event.target.value ){
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
            data.fixtures.map((elem, i) => {
                if (new Date(elem.date) > Date.now()) {
                    if (this.state.team === elem.awayTeamName) {
                        this.setState({
                            dateOfTheMatch: elem.date,
                            oponents: elem.homeTeamName,
                        })
                    } else {
                        this.setState({
                            dateOfTheMatch: elem.date,
                            oponents: elem.awayTeamName,
                        })
                    }
                }
            }).catch(e => {
                console.log('Błąd!!!!', e)
            });
        })
    }

    render() {
        console.log(this.props.options);
        return (
            <div className="main-form-slider" style={{display: 'flex', justifyContent: 'space-around'}}>
                <button type="button" className="main-form-prev" style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}} onChange={this.handleOption}>
                    &lt;
                </button>
                {this.props.options.map((elem, i) => {
                    return (<div className='main-form-slide' style={{opacity:'1'}}>
                        <img className='main-form-slide-img' style={{height:'50px', width: '50px'}} key={i} src={elem.crestUrl}/>
                        <span className='main-form-slide-title'>{elem.name}</span>
                    </div>)
                })}

                <button type="button" className="main-form-next" style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}}>
                    &gt;
                </button>
            </div>
        )
    }
}
export default Slider;