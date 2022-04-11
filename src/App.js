import React, { Component } from 'react';
import CommentFilter from './CommentFilter'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>필터링된 댓글</h1>
        <h2>==============</h2>
       <CommentFilter comment="너는 진짜 못말리는 바보 똥개다"/>
       <CommentFilter comment="임마! 너 그렇게 살지마! 그지 새끼야 !"/>
       <CommentFilter comment="야 씨~ 너 죽을래? 진짜 ! 콱! 마! "/>
      </div>
    )
  }
}

export default App

// export default App : 클래스 앞에 써도 된당 까먹을 수 있으니까