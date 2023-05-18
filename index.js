import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

const init = 'init'
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmt'

//store
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default)
);

// const history = []
//reducer



function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case init:
            return { amount: action.payload }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        case incByAmt:
            return { amount: state.amount + action.payload }
        default:
            return state
    }
}

function bonusReducer(state = {points: 0}, action){
    switch (action.type){
        case inc:
            return { points: state.points +1}
        default: 
            return state
    }
}

// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history);
// })
// async api call
// async function getUser() {
//     store.dispatch(initUser(data.amount))
// }

//action functions
function getUser(id) {
    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:3000/Accounts/${id}`)
        dispatch(initUser(data.Amount))
    }
}

function initUser(value) {
    return { type: init, payload: value }
}

function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmount(value) {
    return { type: incByAmt, payload: value }
}

// getUser()
// action
setTimeout(() => {
    // store.dispatch(getUser(1))
    store.dispatch(getUser(2))
    // store.dispatch(increment())
}, 2000)



