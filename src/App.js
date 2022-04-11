import React, { Component } from 'react'

class App extends Component {
  state = { cnt: 0 }
  countNumber = () => {
    this.setState( {cnt: this.state.cnt + 1} )
  }
  render() {
    const {cnt} = this.state
    return(
      <div className="App">
        <h1>카운트: {cnt}</h1>
        <button type="button" onClick={this.countNumber()}>change name</button>
      </div>
    )
  }
}

export default App

// export default App : 클래스 앞에 써도 된당 까먹을 수 있으니까