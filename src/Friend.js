import React from "react"


class Friend extends React.Component {
    render() {
        const { name, age, city } = this.props

        return(
            <>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{city}</h2>
            <h2>-----------------</h2>
            </>
        )
    }

}

export default Friend