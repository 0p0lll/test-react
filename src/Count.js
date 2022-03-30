import React from "react";

class Count extends React.Component {
    state = {
        count: 0
    }
    // 1.이벤트 헨들러 안에서는 setState를 마지막에 실행
    increase = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}`)
        this.setState(  (preState) => { 
            return{ count: preState.count + 1}
        })
        console.log(`after updating state: ${count}`)
    }
    increaseMultiple = () => {
        // 3. 콜백함수 preState에 업데이트 됨, 3 출력
        this.increase()
        this.increase()
        this.increase()
        // 2. 세 번을 불러도 setState는 마지막 한번만 실행, 1 출력
        console.log(`right after event: ${this.state.count}`)
    }

    // render 함수
    render() {
        const {count} = this.state
        console.log(`state in render function: ${count}`) 
        return(
            <>
            <h1>{count}</h1>
            <button type="button" onClick={this.increaseMultiple}>increase</button>
            </>
        )
    }
}

export default Count