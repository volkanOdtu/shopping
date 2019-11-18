import React ,{Component} from 'react'
import Cart from '../components/cart';

export default class CartPage extends Component
{

    render()
    {
        return (
                <div>
                    <h2>My Cart</h2>
                    <Cart></Cart>
                </div>
        )
    }
}