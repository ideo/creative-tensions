import React from 'react'
import _ from 'lodash'

import StyleParser from './StyleParser'
import moment from 'moment'

class ListExplorer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { selected: '' }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.selected === '' && nextProps.events.length) {
            this.setState({selected: nextProps.events[0].title})
        }
    }

    renderListTitles() {
        let titles = []
        _.forEach(this.props.events, (eventData) => {
            let highlightColor = eventData.highlightColor
            let title = eventData.title
            let className = (this.state.selected === title) ? `past-event ease selected ${highlightColor}`:
                            `past-event ease ${highlightColor}`
            let onClick = () => {
                this.setState({selected: title})
            }
            titles.push(<li onClick={onClick} className={className} key={title}>{title}</li>)

        })
        return titles
    }

    renderSelectedDetails() {
        let details = _.find(this.props.events, (e) => { return e.title === this.state.selected });
        let keyPrefix = details.title 
        return (
            <div className="col-1-3 past-description">
                <h4 id="pastEventDate">{moment(details.date).format('MMMM D, YYYY')}</h4>
                <h4 id="pastEventPlace">{details.location}</h4>
                <StyleParser keyPrefix={keyPrefix} text={details.description}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="col-2-3">
                <ul className="past-list">
                    {
                        this.props.events.length ? this.renderListTitles() : null
                    }
                </ul>
                </div>
                {
                    this.props.events.length ? this.renderSelectedDetails() : null
                }
            </div>
        )  
    }
}

export default ListExplorer
