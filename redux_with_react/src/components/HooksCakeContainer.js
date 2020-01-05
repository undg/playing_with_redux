import React from 'react'
import { connect } from 'react-redux'
import { buy_cake, delivery_cake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of hook cakes: {props.num_of_cakes}</h2>
            <button
                onClick={props.buy_cake}
            >Buy hook cake</button>
            <button
                onClick={props.delivery_cake}
            >Delivery hook cakes</button>
        </div>
    )
}

// SELECTORS
const map_state_to_props = state => ({
    num_of_cakes: state.num_of_cakes
})

const map_dispatch_to_props = dispatch => ({
    buy_cake: () => dispatch(buy_cake(2)),
    delivery_cake: () => dispatch(delivery_cake(10))
})

const connect_with_redux = connect(
    map_state_to_props,
    map_dispatch_to_props,
)
export default connect_with_redux(CakeContainer)
