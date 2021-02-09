import React from 'react'
import moment from 'moment'
import EmbeddedVideo from '../EmbeddedVideo'


const Press = (props) => {
    let renderPress = () => {
        return _.map(props.press, (newsItem, i) => {
            let key = `press-item-${i}`
            return (
                <p key={key}>
                    <a href={newsItem.linkUrl} target="blank">
                        "{newsItem.articleName}"
                    </a>
                    <br /><i>{newsItem.publisher}</i>, {moment(newsItem.date).format('MMMM D, YYYY')}
                </p>
            )
        })
    }

    return (
        <section className="press dark grid">
            <h4 className="subtitle">Press &amp; Media</h4>
            <div className="col-2-3">
                {renderPress()}
            </div>
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
        </section>
    )
}

export default Press
