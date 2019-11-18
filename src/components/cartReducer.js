


const cartReducer = (state =[] ,action) =>{
   
    const item = state.filter( item => item.id === action.payload.id )[0];
    const otherItemsInCard = state.filter( item => item.id !== action.payload.id );
                
    switch(action.type)
    {
        case  'ADD':
                //if this item isnt in card ,first we set it to 1                
                if(item === undefined || item == null)
                {
                    return [ ...otherItemsInCard ,{...action.payload ,quantity:1} ];
                }
                else 
                {
                    //alert('item exists');                    
                    if(item.quantity === undefined ) 
                        item.quantity = 0;
                    return [ ...otherItemsInCard ,{...item ,quantity: item.quantity + 1 } ];
                }                    
        case 'REMOVE':                
                if(item)
                {
                    if(item.quantity == 0 ) //state de cart taki elemanlar var ,ve render ediliyor 
                        return state;//[ ...otherItemsInCard];

                    return [ ...otherItemsInCard ,{...item ,quantity: item.quantity - 1 } ];
                }
        case 'REMOVE_ALL':
            return [ ...otherItemsInCard];
        case 'FETCH':
            return Object.assign([] ,state , action.payload);       
                 
        default:
            return state;
    }
}

export default cartReducer;
