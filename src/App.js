import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import 'tachyons';
import Particles from 'react-particles-js';

const action = {
  "particles": {
          "number": {
            "value": 150
          },
          "size": {
            "value": 3
          }
        }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className = 'particle' params={action} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
