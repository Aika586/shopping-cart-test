import {useDispatch,useSelector} from 'react-redux'

const CartItems = () => {
  const{items}=useSelector((state)=>state.cartItems)
  console.log(items)
  const dispatch=useDispatch()
  return (
    <div>CartItems</div>
  )
}

export default CartItems
