import React from 'react';
import _ from 'lodash';

const StyleParser = (props) => {
    let paragraphs = _.filter(props.text.split('\n'), (p) => {
        let withoutSpaces = p.replace(' ', ''); 
        return (!_.isEmpty(withoutSpaces))
    })

    let italicizedParagraphs = _.map(paragraphs, (p, pIndex) => {
        let components = p.split('*');
        let paragraphKey = `${props.keyPrefix}-${pIndex}`

        let spans = _.map(components, (textChunk, sIndex) => {
            let key = `${props.keyPrefix}-${pIndex}-${sIndex}`
            if (sIndex % 2 == 1) {
                return <i key={key}>{textChunk}</i>
            } else {
                return <span key={key}>{textChunk}</span>
            }
        });

        return <p key={paragraphKey}>{spans}</p>
    })

    return (<div>{italicizedParagraphs}</div>) 
}

export default StyleParser
