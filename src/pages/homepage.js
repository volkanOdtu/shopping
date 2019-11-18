import React ,{Component}  from 'react'
import Products from '../components/products'

export default class HomePage extends Component
{
    
    render()
    {
        return( <div>
                    <h2>Home Page</h2>
                    <Products></Products>
                </div>)

    }
}