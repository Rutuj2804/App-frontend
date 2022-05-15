import { combineReducers } from "redux"
import Authentication from './authentication/reducer'
import Category from "./category/reducer"
import Product from "./product/reducers"
import Loader from "./loader/reducer"
import Cart from "./cart/reducer"
import Order from "./order/reducer"

const rootReducer = combineReducers({
    Authentication,
    Category,
    Product,
    Loader,
    Cart,
    Order
})
  
export default rootReducer