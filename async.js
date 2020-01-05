#!/bin/env node
const redux = require('redux')
const create_store = redux.createStore

// STATE
const initial_state = {
    loading: false,
    users: [],
    error: ","
}

// ACTION.type
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

// REDUCER
const fetch_user_request = () => ({
    type: FETCH_USER_REQUEST,
})
const fetch_user_success = users => ({
    type: FETCH_USER_SUCCESS,
    payload: users,
})
const fetch_user_failure = error => ({
    type: FETCH_USER_FAILURE,
    payload: error
})

const reducer = (state, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }

        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
    }
}

const store = create_store(reducer)
