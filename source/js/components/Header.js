import React from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { headerClass: '' }
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        let heroEl = document.getElementById("hero");
        let thresholdOffset = heroEl.offsetTop + heroEl.offsetHeight;
        if (window.pageYOffset >= thresholdOffset && this.state.headerClass === '') {
            this.setState({headerClass: 'fade-in-bg'})
        } else if (window.pageYOffset < thresholdOffset && this.state.headerClass !== '') {
            this.setState({headerClass: ''})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let className = `header ease ${this.state.headerClass}`;
        return (
        <div className={className}>
                    <div className="logo"><img src="images/creativetension_logo.png" /></div>
                    <div className="btn ease">
                        <a href="mailto:creativetensions@ideo.com" target='_blank'>
                        Get In Touch
                        </a>
                    </div>
            </div>)
    }
}

export default Header
