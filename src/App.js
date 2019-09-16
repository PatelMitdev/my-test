import React, { Component } from 'react';
import Layout from './components/layout/layout';
import Divistion from './components/divistions/divistion';
import DivistionAndBannerData from './assets/DivistionAndBanners.json';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      banners: [],
      divisions: []
    }
  }
  componentDidMount(){
    console.log(DivistionAndBannerData, '16::');
    const {banners, divisions} = DivistionAndBannerData;
    this.setState({
      banners, 
      divisions
    })
  }
  render(){
    const{banners, divisions} = this.state;
   // console.log(banners, '24:');
    return(
      <div className="App">
         <Layout />
         <Divistion banners={banners} divisions={divisions} />
      </div>
      )
  }
}

export default App;
