import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyC9cU_nwYbKPKHLSOlNKbtn5AkSUGpXrs8';

class App extends Component {
  // stateの初期化。取得するデータは配列なので、[]と設定
  state = {
    videos: [],
    selectedVideo: null
  }

  // APIリクエストを行う
  componentDidMount() {
    console.log("componentDidMount");
    YSearch({ key: YOUTUBE_API_KEY, term: 'ラクスパートナーズ' }, (data) => {
      this.setState({ videos: data, selectedVideo: data[2] });
    });
  }

  // clickされたら、その動画の情報を取ってきて
  onVideoClickedHandler = (video) => {
    console.log("onVideoClickHandler");
    console.log("video : " + video);
    this.setState({ selectedVideo: video })
  }

  // event handler を挿入
  onKeywordChangedHandler = (keyword) => {
    console.log("onKeywordChangedHandler");
    console.log("keyword : " + keyword);
    // 空白を除去
    var newTerm = keyword.replace(/\s+/g, "");
    
    if (newTerm === '') {
      newTerm = 'ラクスパートナーズ';
    }
    YSearch({ key: YOUTUBE_API_KEY, term: newTerm }, (data) => {
      this.setState({videos: data, selectedVideo: data[0]})
    });
  }

  render() {
    return (
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler} />
        <Body>
          <Video video={this.state.selectedVideo} />
          <List
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={this.state.selectedVideo}
          />
        </Body>
      </div>
    );
  }
}

export default App;
