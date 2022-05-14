import { combineReducers } from "redux"
import Authentication from './authentication/reducer'
import Category from "./category/reducer"
import Product from "./product/reducers"
import Loader from "./loader/reducer"
import Message from "./message/reducer"

const rootReducer = combineReducers({
    Authentication,
    Category,
    Product,
    Loader,
    Message
})
  
export default rootReducer