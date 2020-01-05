import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_cake, delivery_cake } from '../redux'

function HooksCakeContainer(props) {
    const num_of_cakes = useSelector(state => state.num_of_cakes)
    const dispatch = useDispatch()

    const handler_buy_cake      = () => dispatch(buy_cake(2))
    const handler_delivery_cake = () => dispatch(delivery_cake(10))

    return (
        <div>
            <h2>Number of hook cakes: {num_of_cakes}</h2>
            <button
                onClick={handler_buy_cake}
            >Buy hook cake</button>
            <button
                onClick={handler_delivery_cake}
            >Delivery hook cakes</button>
        </div>
    )
}

export default HooksCakeContainer
