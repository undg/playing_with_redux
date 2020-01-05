#!/bin/env node
const redux = require('redux')
const create_store = redux.createStore

const {log_info} = require('./helpers.js')

// ACTION
const BUY_CAKE = "BUY_CAKE"
const RESUPPLY_CAKE = "RESUPPLY_CAKE"

function buy_cake(amount) {
    return {
        type: BUY_CAKE,
        info: `Buying ${amount} cake`,
        amount: amount,
    }
}
const buy_1_cake = {
        type: BUY_CAKE,
        info: `Buying one cake`,
        amount: 1,
    }

function resupply_cake(amount) {
    return {
        type: RESUPPLY_CAKE,
        info: `Delivering ${amount} cakes`,
        amount: amount,
    }
}


const initial_state = {
    num_of_cakes: 10,
}

// REDUCER boilerplate
// (previous_state = initial_state, action) => new_state

function reducer(previous_state = initial_state, action) {
    const state = { ...previous_state }
    switch(action.type) {
        case BUY_CAKE:
            state.num_of_cakes -= action.amount
            break
        case RESUPPLY_CAKE:
            state.num_of_cakes += action.amount
            break
    }
    log_info(action)
    return state
}

const store = create_store(reducer)

console.log('Initial(prev) state:', store.getState(), "\r\n")
const unsubscribe = store.subscribe(()=>console.log('Update:', store.getState(), "\r\n"))
store.dispatch(buy_cake(1))
store.dispatch(buy_1_cake)
store.dispatch(buy_cake(1))
store.dispatch(resupply_cake(5))
store.dispatch(buy_cake(6))

unsubscribe()

