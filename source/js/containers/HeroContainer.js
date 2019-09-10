import { connect } from 'react-redux'
import { getHighlightColor } from '../selectors'

import Hero from '../components/Hero'

const mapStateToProps = (state) => {
    return {
        highlightColor: getHighlightColor(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const HeroContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Hero)

export default HeroContainer
