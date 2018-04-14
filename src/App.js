import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      word: '',
      output: 'bla'
    }
  }

  inputHandler = (event) => {
    this.setState({
      word: event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.doOxfordThings();
  }

  doOxfordThings = () => {
    var apiUrl = `https://od-api.oxforddictionaries.com/api/v1/entries/en/${this.state.word}/synonyms`;
    // var oxfordHeaders = {
    //   'Accept': 'application/json',
    //   'app_id': 'de733c2f',
    //   'app_key': 'b368fea02c22b73e9f35c6ad9d4d5e49'
    // }

    axios({
      method: 'GET',
      url: apiUrl,
      headers: {
        'accept': 'application/json',
        'app_id': 'de733c2f',
        'app_key': 'b368fea02c22b73e9f35c6ad9d4d5e49'
      }
    }).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch(error => {
        console.log(error);
      });



    // console.log(apiUrl);
    // axios(apiUrl, { 
    //   headers: oxfordHeaders 
    // })
    // .then((apiResponse) => {
    //   console.log(apiResponse);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to THESAURUS</h1>
        </header>
        <p className="App-intro">
          type in a word and hit submit
        </p>

        <form onSubmit={this.submitHandler}>
          <input value={this.state.word} onChange={this.inputHandler}/>
          <button type="submit">SUBMIT</button>
        </form>

        <p>{this.state.output}</p>
      </div>
    );
  }
}

export default App;
