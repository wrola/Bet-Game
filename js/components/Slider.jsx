import React, {Component} from "react";

class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: ''
        }
    }


    render() {
        console.log(this.props.options);
        return (
            <div className="main-form-slider" style={{display: 'flex', justifyContent: 'space-around'}}>

                <button type="button" className="main-form-prev" style={{background: 'transparent', border:'0', color: '#00134d',background: 'transparent',transition: '0.5s color',cursor:'pointer'}}>
                    &lt;
                </button>
                {this.props.options.map((elem, i) => {
                    return (<div className='main-form-slide' style={{opacity:'0'}}>
                        <img className='main-form-slide-img' style={{height:'50', width: '50'}} key={i} src={elem.crestUrl}/>
                        <span className='main-form-slide-title'>{elem.name} </span>
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