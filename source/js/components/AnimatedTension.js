import React from 'react'
import tensions from '../tempData/tensions'


class AnimatedTension extends React.Component { 

    constructor(props) {
        super(props);
        this.tensions = tensions
        this.state = { currentTensionIndex: 0, fadeClass: 'fadeIn' }
    }

    componentDidMount() {
        setInterval(() => {
            let nextIndex = (this.state.currentTensionIndex + 1) % this.tensions.length;
            this.setState({ currentTensionIndex: nextIndex, fadeClass: 'fadeIn'})

            setTimeout(() => {
                this.setState({ fadeClass: 'fadeOut' })
            }, 4800)

        }, 5000)
    }

    render() {
        let tension = this.tensions[this.state.currentTensionIndex]
        return (
                <section className="interactive dark">
                    <div className={`interactive-info ${this.state.fadeClass}`}>
                        <h2 id="provocation" className="provocation">{tension.text}</h2>
                        <div className="tension-slider"></div>
                        <div id="provocation_left" className="tension left">{tension.left}</div>
                        <div id="provocation_right" className="tension right">{tension.right}</div>
                    </div>
                </section>
        )
    }
}

export default AnimatedTension
