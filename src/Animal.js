import React from "react"

class Animal extends React.Component {
    state = {
        type: "cat",
        name: "meyow",
        size: "small",
        sound: "low",
        appearence: "cute"
    }
    render() {
        // state나 props 값을 조회
        const { type, name, size, sound, appearence } = this.state
        return (
            <>
                <h1>동물정보</h1>
                <h3>종류 - {type}</h3>
                <h3>종류 - {name}</h3>
                <h3>종류 - {size}</h3>
                <h3>종류 - {sound}</h3>
                <h3>종류 - {appearence}</h3>
            </>
        )
    }
}
export default Animal