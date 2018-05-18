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
    nextSlide = () => {

    };
    prevSlide = () => {

    };

    render() {

        return (
            <div className="main-form-slider" style={this.slideOrder}>
                <button type="button" onClick={this.prevSlide} className="main-form-prev" >
                    &lt;
                </button>
                    <label>Team</label>
                        <select onChange={this.props.selectedTeam}>
                        <option>Choose a team</option>
                        {this.props.options.map((elem, i) => <option key={i} className='main-form-option' >{elem.name}</option>)}
                        </select>

                <button type="button" className="main-form-next" onClick={this.nextSlide}>
                    &gt;
                </button>
            </div>
        )
    }
}
export default Slider;