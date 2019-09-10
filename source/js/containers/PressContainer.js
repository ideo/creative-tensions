import { connect } from 'react-redux'
import { getPress } from '../selectors'

import Press from '../components/Sections/Press'

const mapStateToProps = (state) => {
    return {
        press: getPress(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


const PressEventsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Press)

export default PressEventsContainer
