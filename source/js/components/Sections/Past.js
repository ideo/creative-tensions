import React from 'react'
import ListExplorer from '../ListExplorer'

const Past = (props) => {
    return (
        <section className="past dark grid">
            <h4 className="subtitle">Past Events</h4>
            <ListExplorer events={props.events} />
        </section>
    )
}

export default Past

