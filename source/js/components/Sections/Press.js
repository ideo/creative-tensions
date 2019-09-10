import React from 'react'
import moment from 'moment'

const Press = (props) => {
    let renderPress = () => {
        return _.map(props.press, (newsItem, i) => {
            let key = `press-item-${i}`
		    return (
                <p key={key}>
                    <a href={newsItem.linkUrl} target="blank">
                        "{newsItem.articleName}"
                    </a>
                    <br/><i>{newsItem.publisher}</i>, {moment(newsItem.date).format('MMMM D, YYYY')}
                </p>
            )
        })
    }

    return (
			<section className="press dark grid">
				<h4 className="subtitle">Press</h4>
				<div className="col-2-3">
                    {renderPress()}
				</div>
			</section>
    )
}

export default Press
