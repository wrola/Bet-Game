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
    const
    render() {

        return (
            <div className="main-form-slider" style={{display: 'flex', justifyContent: 'space-around'}}>
                <button type="button" className="main-form-prev" style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}}>
                    &lt;
                </button>
                <label>Team</label>
                <select onChange={this.props.selectedTeam}>
                    <option>Choose a team</option>
                    {this.props.options.map((elem, i) => <option key={i}>{elem.name}</option>)}
                </select>
                {/*{this.props.options.map((elem, i) => {*/}
                    {/*return (<div className='main-form-slide' style={{opacity:'1'}}>*/}
                        {/*<img className='main-form-slide-img' style={{height:'50px', width: '50px'}} key={i} src={elem.crestUrl}/>*/}
                        {/*<span className='main-form-slide-title'>{elem.name}</span>*/}
                    {/*</div>)*/}
                {/*})}*/}

                <button type="button" className="main-form-next" style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}}>
                    &gt;
                </button>
            </div>
        )
    }
}
export default Slider;