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
    // const sliderOrder = {
    //     display: 'flex',
    //     justifyContent: 'space-around'
    // }
    // let btnStylePrev = {
    //     background: 'transparent',
    //     border:'0',
    //     color: '#00134d',
    //     transition: '0.5s color',
    //     cursor:'pointer'
    // }
    // let mainFormSlideStyle = {
    //     opacity:'1'
    // }
    // let mainFormSlideImgStyle = {
    //     height:'50px',
    //     width: '50px'
    // }
    // let mainFormSlideTitleStyle = {
    //
    // }
    render() {

        return (
            <div className="main-form-slider" style={this.slideOrder}>
                <button type="button" onClick={this.prevSlide} className="main-form-prev" style={this.btnStylePrev} style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}}>
                    &lt;
                </button>
                    <label>Team</label>
                        <select onChange={this.props.selectedTeam}>
                        <option>Choose a team</option>
                        {this.props.options.map((elem, i) => <option key={i} className='main-form-option' >{elem.name}</option>)}
                        </select>

                <button type="button" className="main-form-next" onClick={this.nextSlide} style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}}>
                    &gt;
                </button>
            </div>
        )
    }
}
export default Slider;