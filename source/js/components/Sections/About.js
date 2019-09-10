import React from 'react'
import EmbeddedVideo from '../EmbeddedVideo'

const About = (props) => {
	return (<section className="about dark grid">
				<h4 className="subtitle">About</h4>
				<h1 className="title">Creative Tensions is a fresh approach to dialogue.</h1>
				<row>
					<div className="col-1-2">
						<p><i>Creative Tensions</i> is not a  panel; it's a conversation that moves. Reflecting on a tension between two poles, participants reveal where they stand on an issue by where they stand&mdash;and move&mdash;in the room. Exploring topics that lie at the heart of what it means to be human, <i>Creative Tensions</i> is a fresh approach to group dialogue that encourages openness and inspires empathy.</p>

					</div>
				</row>
				<row>
                    <EmbeddedVideo src="https://www.youtube.com/embed/-MttYjJil68" />
                    <div>
						<p><i>Creative Tensions: Empathy</i> at 2017 Sundance Film Fesitval with Anand Giridharadas and Gael García Bernal, moderated by Philip Himberg</p>
					</div>
                    <EmbeddedVideo src="https://www.youtube.com/embed/VcqDSs7XhC4?start=57" />
					<div>
						<p><i>Creative Tensions: Action</i> at CreativeMorningsNYC with Lisa Peterson and Purvi Shah, moderated by Fred Dust.</p>
					</div>					
				</row>
			</section>)

}

export default About
