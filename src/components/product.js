import React ,{Component} from 'react';

export default class Product extends Component
{
    render(){
        return (<div className= "productItem">
                    <h3>{this.props.name}</h3>
                    <img height ={100} title = {this.props.name} src = {`../../images/${this.props.image}`} />
                    <div>{this.props.description} </div>
                    <div>{this.props.price} </div>
                    <button onClick = {() =>this.props.addToCart(this.props.item) } >
                        Add to Cart ({ ( this.props.item && this.props.quantity)  || 0 }) 
                    </button>
                    <button onClick = {() =>this.props.removeFromCart(this.props.item) } >
                        Remove   
                    </button>
                    

                </div>)
    }
    
}