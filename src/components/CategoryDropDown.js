import React, { Component } from 'react';
import Categories from './category.json';

class CategoryDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:1
        }
    }
    change = (event) => {
        this.props.changeHandler(event.target.value);
        this.setState({value: event.target.value});
    }
  render() {
    return (
        <React.Fragment>
      <select onChange={this.change} value={this.state.value}>
          {Categories.map((category)=>{
                let opt = <option key={category.category_id} value={category.category_id}>
                          {category.category}
                        </option>;               
             return opt;
            })}  
      </select>
      {/* <p>{this.state.value}</p> */}
      </React.Fragment>
    );
  }
}

export default CategoryDropDown;