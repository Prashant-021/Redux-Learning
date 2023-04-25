import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//store
const store = createStore(reducer, applyMiddleware(logger.default));

// const history = []
//reducer
function reducer(state = { amount: 1 }, action) {
    if (action.type === 'increment') {
        // immutability
        return { amount: state.amount + 1 }
    }
    if (action.type === 'decrement') {
        return { amount: state.amount - 1 }
    }
    if (action.type === 'incrementByAmount'){
        return {amount : state.amount + action.payload}
    }
    return state
}

// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history);
// })

// action
setInterval(() => {
    // store.dispatch({ type: "increment" })
    // store.dispatch({ type: "decrement" })
    store.dispatch({ type: "incrementByAmount", payload: 4 })
}, 2000)
