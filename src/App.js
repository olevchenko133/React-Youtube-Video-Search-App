import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'

import youtube from '../src/api/Youtube'
import './App.css';

const KEY = 'AIzaSyC5Fr2wPqOEU8gf3SiU3YgQF-VOFu-ZjVM'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit("healthy food")
  }
  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })

  };
  onVideoSelect = video => {
    console.log(video)
    this.setState({

      selectedVideo: video
    })
  }
  render() {
    // const vid = this.state.videos.map(v => <iframe width="400px" height="400px" src={`https://www.youtube.com/embed/${v.id.videoId}`} allowfullscreen />)
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">

              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
