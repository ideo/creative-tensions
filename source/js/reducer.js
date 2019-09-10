import { RECEIVED_CONTENT } from './actions'

const initialState = {
    content: {}
}

export default function creativeTensions(state = initialState, action) {
    switch (action.type) {
        case RECEIVED_CONTENT:
            return Object.assign({}, state, {content: action.content})
        default:
            return state
    }
}
