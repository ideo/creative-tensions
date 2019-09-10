import React from 'react'

const Partnership = (props) => {
    return (
			<section className="collaboration">
				<h4 className="subtitle">A Partnership</h4>
				<h1 className="title">It began as a conversation</h1>
				
				<div className="multi-columns"><p>When IDEO and the Sundance Institute Theatre Program sat down to collaborate, we immediately recognized a common desire to bring creativity to unexpected places. What unusual experience could we create together for our audiences? We decided to experiment by combining elements from each of our methods - empathy and observation from human centered design, movement and self-reflection from theater. The result is Creative Tensions, a unique live event series where participatory theater meets collective conversation.</p>
				</div>
				
				<div className="newsletter">
					<h4 className="newletter-title">Keep in touch</h4>
					<div id="mc_embed_signup newsletter">
					<form action="//ideo.us12.list-manage.com/subscribe/post?u=e52ccfb27acc0f632677230a9&amp;id=5239e1282a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate newsletter-form" target="_blank" noValidate>
					    <div id="mc_embed_signup_scroll">
						<input type="email" name="EMAIL" className="email georgia ease" id="mce-EMAIL" placeholder="Enter your email for updates on upcoming events & our play-at-home card deck" required />
					    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_e52ccfb27acc0f632677230a9_5239e1282a" tabIndex="-1" value="" /></div>
					   <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe" className="button btn submit ease" />
					    </div>
					</form>
					</div>
					<p className="submit-status"></p>
				</div>
				

			</section>					
    )
}

export default Partnership
