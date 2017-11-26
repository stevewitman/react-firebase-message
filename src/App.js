import React, { Component } from 'react';
import './App.css';
import RedditPost from './RedditPost';
import redditPosts from './data/redditPosts';
import firebase from 'firebase';

firebase.database().ref('posts').once('value')
  .then((snapshot) => console.log(snapshot.val()))
class App extends Component {
  render() {
    return (
      <div className="App">
        {redditPosts.map(redditPost => {
          return <RedditPost
            title={redditPost.title}
            comments={redditPost.comments}
            submitted={redditPost.submitted}
          />
        })}
      </div>
    );
  }
}

export default App;
