import { BUY_CAKE, DELIVERY_CAKE }  from './cake_types.js'

const initial_state = {
    num_of_cakes: 10
}

const cake_reducer = (state = initial_state, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                num_of_cakes: state.num_of_cakes - action.amount
            }
        case DELIVERY_CAKE:
            return {
                ...state,
                num_of_cakes: state.num_of_cakes + action.amount
            }
        default:
            return state
    }
}

export default cake_reducer
