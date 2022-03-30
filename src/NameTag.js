import React from "react";

class NameTag extends React.Component {
    state = {
        name: 'initial name'
    }
    // 이벤트 헨들러
    changeName = () => {
        // setState : render 함수 호출
        this.setState( {
            name: 'changed name'
           // this.state.name = 'changed name' : 직접변경하면 렌더함수 호출 불가
        
        })
    }
    // 렌더
    render() {
        console.log('name tag') // 콘솔호출 횟수로 이 과정이 몇 번 도는지 알수 있음
        const {name} =this.state
        return(
            <>
            <h1>{name}</h1>
            <button type="button" onClick={this.changeName}>change</button>
            </>
        )
    }
}

export default NameTag