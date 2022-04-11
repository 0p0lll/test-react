import { render } from "@testing-library/react";
import React, {Component} from "react";

class Cart extends Component {
    state = {
        cart: []

    }


    //구현하기
    addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요")
        this.setState( {cart: this.state.cart.concat(product)} )
    }

    //구현하기
    render() {
        const { cart } = this.state
        return(
            <>
                <h1>물품</h1>
                <button onClick={this.addProduct}>추가하기</button>
                {cart.map((product, index) => {
                    return <h3 key={index}><img src={product} /></h3>
                })}
            </>
        )
    }
}

export default Cart