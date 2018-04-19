import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
    handleChange = (e)=>{
        if(typeof this.props.handleCheckbox == "function"){
            this.props.handleCheckbox()
        }
    }
    handleSearch = (e)=>{
        if(typeof this.props.handleForm == "function"){
            this.props.handleForm(e.target.value)
        }
    }
    render(){
        return  (<div>
            <input type="text" defaultValue="Search..." value={this.props.text} onChange={e=>this.handleSearch(e)} />
            <p><input onChange={e=>this.handleChange(e)} type="checkbox" value={this.props.likesKids}/>Only show cats that like kids</p>
        </div>)

    }
}

class CatTableHeader extends React.Component{
    render(){
        return (<thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        </thead>)
    }
}
class CategoryRow extends React.Component{
    render(){
        return <tr>
            <td colSpan="2" style={{textAlign: "center"}}>
                <span style={{fontWeight:"600"}}>{this.props.category}</span>
            </td>
        </tr>
    }
}
class CatRow extends React.Component{
    render(){
        var name = this.props.likesKids ? this.props.name : <span style={{color: 'red'}}> {this.props.name} </span>;
        return <tr><td>{name}</td><td>{this.props.age}</td></tr>
    }
}

class CatTable extends React.Component{
    render(){
        // console.log(this.props.cats);
        let maleArr = [];
        let femaleArr = [];
        this.props.cats.map((elem,index)=>{
            if(this.props.likesKids == true){
                if( elem.likesKids == true){
                    if(elem.category == "male"){
                        maleArr.push(<CatRow name={elem.name} age={elem.age} likesKids={elem.likesKids} />)
                    }else{
                        femaleArr.push(<CatRow name={elem.name} age={elem.age} likesKids={elem.likesKids}  />)
                    }
                }
            }else{
                if(elem.category == "male"){
                    maleArr.push(<CatRow name={elem.name} age={elem.age} likesKids={elem.likesKids} />)
                }else{
                    femaleArr.push(<CatRow name={elem.name} age={elem.age} likesKids={elem.likesKids}  />)
                }
            }
        })

        return (<table>
            <CatTableHeader />
            <tbody>
            <CategoryRow category="male" />
            {maleArr}
            <CategoryRow category="female" />
            {femaleArr}
            </tbody>
        </table>)
    }
}

const allTheCats = [
    {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
    {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
    {category: "male", age: "2", likesKids: false, name: "Grumpy"},
    {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
    {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
    {category: "male", age: "1", likesKids: false, name: "Furerr"},
    {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];




class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterText: "",
            likesKids: false
        }
    }
    handleCheckbox = ()=>{
        this.setState({
            likesKids: !this.state.likesKids
        })
    }
    handleForm = (newVal)=>{
        this.setState({
            filterText: newVal
        })
    }
    render(){
        let filteredArray = allTheCats.filter((elem)=>{
            console.log(elem.name.indexOf(this.state.filterText));
            let name = elem.name.toUpperCase()
            return name.indexOf(this.state.filterText.toUpperCase()) == -1 ? false : true
        })
        console.log(this.state.filterText);

        return (<div>
            <SearchBar likesKids={this.state.likesKids} text={this.state.filterText} handleCheckbox={this.handleCheckbox} handleForm={this.handleForm} />
            <CatTable likesKids={this.state.likesKids} cats={filteredArray}/>
        </div>)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});