import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedditPost from './RedditPost'

const name = 'asjkf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RedditPost></RedditPost>
        <RedditPost></RedditPost>
        <RedditPost></RedditPost>
        <RedditPost></RedditPost>
      </div>
    );
  }
}

export default App;
