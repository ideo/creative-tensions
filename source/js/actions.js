export const REQUESTED_CONTENT = 'REQUESTED_CONTENT'
export const RECEIVED_CONTENT = 'RECEIVED_CONTENT'

function requestedContent() {
    return {
        type: REQUESTED_CONTENT
    }
}

function receivedContent(content) {
    return {
        type: RECEIVED_CONTENT,
        content
    }
}

export function fetchContent() {
    return (dispatch) => {
        dispatch(requestedContent())
        fetch('/content').then((resp) => {
            return resp.json()
        }).then((json) => {
            dispatch(receivedContent(json.content))
        })
    }
}
