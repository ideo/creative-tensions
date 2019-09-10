import { connect } from 'react-redux'
import { getPastEvents } from '../selectors'

import Past from '../components/Sections/Past'

const mapStateToProps = (state) => {
    return {
        events: getPastEvents(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


const PastEventsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Past)

export default PastEventsContainer





