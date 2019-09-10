import React from 'react'

const Hero = (props) => {
    let className = `subheading ${props.highlightColor}`
    return (<section id="hero" className="intro grid">
				<div className="intro-info">
					<h5 className={className}>An IDEO + Sundance Institute production</h5>
					<h2 className="heading">Conversations that move</h2>
				</div>
			</section>)
}

export default Hero
