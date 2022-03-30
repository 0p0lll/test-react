import { Component } from 'react';
import React from 'react'

class Book extends React.Component {
    state = {
        title: '해리포터',
        ISBN: '123123D'
    }

    render() {
        const { title, ISBN } = this.state
        return (
            <>
            <h1>도서정보</h1>
            <h3>제목 - {title}</h3>
            <h3>ISBN - {ISBN}</h3>
            </>
        )
    }
}

export default Book