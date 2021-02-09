import React from 'react'
const tensions = [{
    text: 'What inhibits our sexual lives more?',
    left: 'Government & Society',
    right: 'Self'
}, {

    text: 'Which is more important for the American worker?',
    left: 'Flexibility',
    right: 'Security'
}, {
    text: 'How does money impact your work?',
    left: 'Enables',
    right: 'Complicates'
}, {
    text: 'Are you aware of how you express your gender?',
    left: 'It\'s top of mind',
    right: 'I don\'t think about it'
}, {
    text: 'The most powerful actions are taken on behalf of...',
    left: 'Oneself',
    right: 'Others'
}, {
    text: 'The American Dream is...',
    left: 'At Risk',
    right: 'On the rise'
}, {
    text: 'I am more at home with...',
    left: 'My given family',
    right: 'My chosen family'
}, {
    text: 'Film and theatre should...',
    left: 'Unite us',
    right: 'Disrupt us'
}, {
    text: 'I want my leaders to demonstrate...',
    left: 'Grace',
    right: 'Resolve'
}];


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
