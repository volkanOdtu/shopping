import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from './product';
import sortProducts from './utility';

let loaded =false;

class Products extends Component
{
    
    componentWillMount(){
        if(!loaded)
        {            
            this.props.fetchProducts();
            loaded =true;
        }
                          
    }
    //Burdaki cart ,addTocart ,removeFromCart asagida state in reducer daki 
    // elemanlarına ve metodlarina denk geliyor
    render()
    {
        //sort edelim ki ,her defasinda sira degismesin
        sortProducts(this.props.cart);
       
        //addToCart ile product ve quantity i cart a ekliyoruz ,item ile instantiate ediyoruz
        return( <div className='productList'>
                {this.props.cart.map( item =><Product item = {item} name ={item.name} image = {item.image} description = {item.description}
                                                price ={item.price} quantity = {item.quantity} addToCart = {this.props.addToCart} removeFromCart = {this.props.removeFromCart} /> ).sort() }
        </div>)
    }

}


//Burda cart ,product lar ve quantity ler ile yuklenicek
export const fetchProducts = () => fn =>
{
    
    const data =
    { 
        "products" :[
        {
            "id":1 ,
            "name": "I am Groot",
            "description": "bu aciklama Groot içindir",
            "keywords": ["stuffed" ,"plush" ,"groot" ,"guardians of the galaxy"] ,
            "image": "mobile.jpg" ,
            "age":[ "0" ,"+"],
            "price" : 19.99
        },
        {
            "id":2 ,
            "name": "Buzz Lightyear Action Dol",
            "description": "bu aciklama Buzz Lightyear içindir",
            "keywords": ["action figure" ,"toy story" ,"posable" ,"requires batteries"] ,
            "image": "pen.jpg" ,
            "age":[ "3" ,"10"],
            "price" : 38.50 
        },
        {
            "id":3 ,
            "name": "Minion Dave",
            "description": "bu aciklama Dave içindir",
            "keywords": ["stuffed" ,"plush" ,"minions" ,"Despicable Me"] ,
            "image": "skirt.jpg" ,
            "age":[ "0" ,"10"],
            "price" : 30.50 
        },
        {
            "id":4 ,
            "name": "Minion Kevin",
            "description": "bu aciklama Minion Kevin içindir",
            "keywords": ["stuffed" ,"plush" ,"minions" ,"Despicable Me"] ,
            "image": "bluz.jpg" ,
            "age":[ "0" ,"10"],
            "price" : 42.00  
        }
       ]
     }
     
       
    /*fetch('https://reacttodobackend.herokuapp.com/')//  fetch('http://localhost:5000')
            .then(res =>res.json())
            .then(todos => fn({ type:FETCH_TODOS ,payload:todos })  );     */
    fn({ type:'FETCH' ,payload:data.products });
};

export const addToCart = (item) => fn =>
{
    fn({ type:'ADD' ,payload:item });
};

export const removeFromCart = (item) => fn =>
{
    fn({ type:'REMOVE' ,payload:item });
};

export const removeAllFromCart = (item) => fn =>
{
    fn({ type:'REMOVE_ALL' ,payload:item });
};
//state in elemenlarina ulasiyoruz
const mapStateToProps = state =>({
    cart:state.cart    
})

export default connect(mapStateToProps ,{fetchProducts ,addToCart ,removeFromCart ,removeAllFromCart })(Products);

