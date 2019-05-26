import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Aux from './hoc/_aux';
import Header from './Toolbar/Header/Header';
import Footer from './Toolbar/Footer/Footer';
import Body from './Container/Body/Main';

class App extends Component {
  state = {
    instore: true,
    selectedCard: []
  }
  changeHandler = ($event) => {
    this.setState(prevState => ({
      instore: !prevState.instore
    }));
  }

  render() {
    return (
        <Aux>
            <Header changed={this.changeHandler}/>
              <Body type={this.state.instore}/>
            <Footer/>
        </Aux>
    );
  }
}

export default App;
