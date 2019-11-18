import React, { Component } from 'react';
import {connect} from 'react-redux';
import sortProducts from './utility';

class Cart extends Component
{

    render()
    {
        sortProducts(this.props.cart);
       
        return <table>
                    <thead>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                        <th></th>                        
                    </thead>
                    <tbody>
                        { this.props.cart.map( item =><tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.quantity}</td>
                                                    <td> <button onClick ={()=>this.props.addToCart(item)} >+</button> </td>
                                                    <td> <button onClick ={()=>this.props.removeFromCart(item)} >-</button> </td>
                                                    <td> <button onClick ={()=>this.props.removeAllFromCart(item)} >Remove all from cart</button> </td>                                                    
                                                </tr>) }
                    </tbody>
              </table>
    }
}

//state in elemenlarina ulasiyoruz
const mapStateToProps = state =>({
    cart:state.cart    
})
//Action lar state i guncellemek icin reducer lari cagiracak metodlar
function mapDispatchToProps(dispatch)
{
    return {
       
        addToCart:(item) => {
            dispatch({ type:'ADD' ,payload :item })
        } ,
        removeFromCart:(item) => {
            dispatch({ type:'REMOVE' ,payload :item })
        }, 
        removeAllFromCart:(item) => {
            dispatch({ type:'REMOVE_ALL' ,payload :item })
        }
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Cart);