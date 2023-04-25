import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmt'

//store
const store = createStore(reducer, applyMiddleware(logger.default));

// const history = []
//reducer



function reducer(state = { amount: 1 }, action) {
    if (action.type === inc) {
        // immutability
        return { amount: state.amount + 1 }
    }
    if (action.type === dec) {
        return { amount: state.amount - 1 }
    }
    if (action.type === incByAmt){
        return {amount : state.amount + action.payload}
    }
    return state
}

// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history);
// })

//action functions
function increment() {
    return{type: inc}
}
function decrement() {
    return { type: dec }
}
function incrementByAmount(value) {
    return { type: incByAmt, payload: value }
}


// action
setInterval(() => {
    // store.dispatch(increment())
    store.dispatch(decrement())
    // store.dispatch(incrementByAmount(3))
}, 2000)
