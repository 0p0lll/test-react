import React, {Component} from "react"

function Todo({ user, name, done, description }) {
        return(
            <>
                <h3>name: {name}</h3>
                <h4>done: {done ? "finished" : "ongoing"}</h4>
                <p>description: {description}</p>
                <p>{user}</p>
            </>
        )
    }

export default Todo