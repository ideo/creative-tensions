import React from 'react'
import StyleParser from '../StyleParser'
import moment from 'moment'

const Featured = (props) => {
    let parseQuoteWithHighlight = () => {
        let quoteParts = props.featuredQuote.split('__')
        if (quoteParts.length === 1) {
            return quoteParts[0]
        }

        let spans = _.map(quoteParts, (textChunk, i) => {
            let key = `featured-quote-${i}`
            if (i % 2 === 1) {
                return <span key={key}>{textChunk}</span>
            } else {
                return <span className="highlight" key={key}>{textChunk}</span>
            }
        })

        return spans;
    }

    let className = (props.highlightColor) ? `event ${props.highlightColor}` : 'event'
    return (
			<section className={className}>
				<h4 className="subtitle">Up Next</h4>
				<row>
					<div className="quote col-2-3">
						<h1>{props.featuredQuote ? parseQuoteWithHighlight() : ''}</h1>
						<div className="reference reference-underline">
                            {props.featuredQuoteAuthor ? props.featuredQuoteAuthor : ''}
                        </div>
					</div>
					<div className="col-1-3">
						<h4>Creative Tensions is a conversation that moves.</h4>
                        {
                            props.description ?
                            <StyleParser text={props.description} keyPrefix='featured-event-' /> : null
                        }
						<h4>
                            {props.date ? moment(props.date).format('MMMM D, YYYY') : '' }<br/>
                            {props.location ? props.location: ''}
                        </h4>
						<br/>
						<div className="btn btn-outline left ease">
                            <a href={props.buttonLink} target='_blank'>
                                {props.buttonTitle}
                            </a>
                        </div>
					</div>
				</row>
			</section>
    )
}

export default Featured
