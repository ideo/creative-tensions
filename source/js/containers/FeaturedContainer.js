import { connect } from 'react-redux'
import { getFeaturedEvent } from '../selectors'

import Featured from '../components/Sections/Featured'

const mapStateToProps = (state) => {
    return getFeaturedEvent(state)
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


const FeaturedContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Featured)

export default FeaturedContainer
