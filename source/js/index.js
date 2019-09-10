import React from 'React'
import ReactDOM from 'react-dom'

import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'
import { fetchContent } from './actions'

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchContent());

import Header from './components/Header'
import HeroContainer from './containers/HeroContainer'
import AnimatedTension from './components/AnimatedTension'
import Footer from './components/Footer'

import FeaturedContainer from './containers/FeaturedContainer'
import About from './components/Sections/About'
import PastEventContainer from './containers/PastEventContainer'
import PressContainer from './containers/PressContainer'
import Partnership from './components/Sections/Partnership'

import '../scss/main.scss';

const App = () => {
    return (
        <div>
            <Header />
            <HeroContainer />
            <FeaturedContainer />
            <About />
            <AnimatedTension />
            <PastEventContainer />
            <PressContainer />
            <Partnership />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
document.getElementById('react-app'))

