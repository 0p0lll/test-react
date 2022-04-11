import React, { Component } from 'react'

class Counter2 extends Component {
    render() {
        this.props = {user: "규은"} // props 값을 변경해서 콘솔창에 경고뜸
        console.log(this.props)
        return(
            <>
             <h1> props 변경하기 </h1>
            </>
        )
    }
    
}

export default Counter2