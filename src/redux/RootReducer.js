import {combineReducers} from 'redux'
import ContactReducer from './ContactReducer'


const RootReducer =  combineReducers({
    Contacts:ContactReducer,
})

export default RootReducer;