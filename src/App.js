import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './SignIn/SignIn';
import Register from './components/Register/Register';

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

const app = new Clarifai.App({
  apiKey : '9f98197c0c4d465b8cbd2cbf651855e7',
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route : 'signin',
      isSignedIn : false,
    };
  }

  calculateFaceLocation(data){
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const box =  {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    };
    return box;
  }

  displayFaceBox(box){
    this.setState({
      box: box,
    });
  }

  onInputChange(event){
    this.setState({
      input: event.target.value,
    })
  }

  onButtonSubmit(){
    this.setState({
      imageURL: this.state.input,
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange(route){
    if(route === 'signout'){
      this.setState({isSignedIn: false});
    } else if(route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles className = 'particle' params={action} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange.bind(this)}/>
        { this.state.route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange.bind(this)} onButtonSubmit={this.onButtonSubmit.bind(this)}/>
              <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
            </div>
          : (
              this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange.bind(this)}/>
              : <Register onRouteChange={this.onRouteChange.bind(this)}/>
              )
          }
      </div>
    );
  }
}

export default App;
