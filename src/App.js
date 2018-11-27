import React, { Component } from 'react';
import CategoryDropDown from './components/CategoryDropDown'
import './App.css';
import SectorDropDown from './components/SectorDropDown';
import Sectors from './components/sector.json';
import Categories from './components/category.json';

import $ from 'jquery';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        id:1
    }
}

  categoryChangeHandler = (id) => {
    //alert("category：" + id);
    this.setState({
      id:id
    })
  }
  sectorChangeHandler = (id) => {
    alert("sector:" + id)
  }
  render() {
    return (
      <div className="App">
         <h3>React的方式完成連動的下拉式選單</h3> 
         <CategoryDropDown changeHandler = {this.categoryChangeHandler} />
         <SectorDropDown changeHandler = {this.sectorChangeHandler} categoryId={this.state.id} />
         <hr />
         <h3>jQuery的方式完成練動的下拉式選單</h3>
         <select id="category"></select>
         <select id="sector"></select>
      </div>
    );
  }
  componentDidMount(){
    var docFrag1 = $(document.createDocumentFragment());
    var docFrag2 = $(document.createDocumentFragment());
    var category = $('#category');
    category.change(loadSectors);
    var sector = $('#sector');
    sector.change(getSector);
     $.each(Categories,function(idx,category){
        var opt = $('<option></option>').val(category.category_id).text(category.category)
        docFrag1.append(opt);
      })
      category.html(docFrag1);
      loadSectors();
      function loadSectors(){
        
        let sectors = Sectors.filter( (sector) => {
          return sector.category_id === parseInt(category.val());
        });
        $.each(sectors,function(idx,sector){
          var opt = $('<option></option>').val(sector.sector_id).text(sector.sector)
          docFrag2.append(opt);
        })
        $('<option value="0">請選擇</option>').prependTo(docFrag2);
        sector.html(docFrag2);
      }
      function getSector(){
        alert($(this).val())
      }
  }
}

export default App;
