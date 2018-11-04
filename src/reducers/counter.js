import * as counterActions from '../actions/counter'

const initialState = {
    count: 0
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case counterActions.UP:
            return {
                ...state,
                count: state.count + 1
            }
        case counterActions.DOWN:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}
