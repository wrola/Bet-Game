import React, {Component} from "react";

class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [],

        }
    }
    render() {

        return (
            <div className="main-form-slider">

                <button type="button" className="main-form-prev">
                    &lt;
                </button>
                {this.state.options.map((elem, i) => {
                    return (<div className='main-form-slide'>
                        <img className='main-form-slide-img' style={{height:'50', width: '50'}} key={i} src={elem.crestUrl}/>
                        <span className='main-form-slide-title'>{elem.name} </span>
                    </div>)
                })}

                <button type="button" className="main-form-next">
                    &gt;
                </button>
            </div>
        )
    }
}
export default Slider;