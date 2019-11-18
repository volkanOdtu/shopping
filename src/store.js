import {createStore ,applyMiddleware ,compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './components/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer
});

const initialState ={};

const middleware = [thunk];

const store = createStore(
    rootReducer ,
    initialState ,
    compose(applyMiddleware(...middleware) 
));

export default store;