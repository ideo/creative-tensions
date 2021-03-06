import React from 'react'

const Footer = (props) => {
   return (
			<footer>
				<row>
					<div className="joint-logos col-1-3">
						<a href="http://www.ideo.com"><img src="/images/ideologo.png" className="ease" /></a>
						<a href="http://www.sundance.org/"><img src="/images/sundance_logo_BW_dark-background-only.png" className="ease" /></a>
					</div>
					<div className="col-1-3"><p><i>Creative Tensions</i> is produced in partnership by IDEO, a global design firm committed to creating positive impact in the world through design, and the Sundance Institute Theatre Program, which advances the work of risk-taking theatre artists by providing rare developmental opportunities that support artists throughout their careers.</p></div>
					<div className="col-1-3">
						<h5><a href="https://twitter.com/search?q=%23creativetensions&src=typd">#creativetensions</a></h5>
					</div>
				</row>
				<row>
					<div className="copyright">Creative Tensions ©{new Date().getFullYear()} All rights reserved 
					&nbsp;• <a target="_blank" href="https://www.ideo.com/privacy">IDEO Privacy Policy</a>
					&nbsp;• <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd-VDt-8kvGYbCfKO-0jfDpzdak8u8kyCTv3Ke_XJikH5tDcQ/viewform">Do Not Sell My Personal Information</a>
					
					</div>
					
				</row>
			</footer>
    ) 
}

export default Footer
