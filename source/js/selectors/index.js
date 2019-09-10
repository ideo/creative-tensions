import { createSelector } from 'reselect'
import _ from 'lodash'

const getContent = (state) => state.content

export const getFeaturedEvent = createSelector(
    [ getContent ],
    (content) => {
        if (_.isEmpty(content)) {
            return {}
        }

        let featuredEvent = _.find(content, (c) => {
            if (_.has(c, 'sys.contentType.sys.id')) {
                return c.sys.contentType.sys.id === 'event' && c.fields.featured
            }
            return false;
        })
        return featuredEvent.fields
    }
)

export const getHighlightColor = createSelector(
    [ getFeaturedEvent ],
    (featuredEvent) => {
        return _.isEmpty(featuredEvent) ? '' : featuredEvent.highlightColor
    }
)

export const getPastEvents = createSelector(
    [ getContent ],
    (content) => {
        if (_.isEmpty(content)) {
            return [] 
        }
        let pastEvents = _.filter(content, (c) => {
            if (_.has(c, 'sys.contentType.sys.id')) {
                return c.sys.contentType.sys.id === 'event' && !c.fields.featured && c.fields.isDisplayed
            }
            return false;
        })
        return _.orderBy(_.map(pastEvents, (pastEvent) => { return pastEvent.fields }), 'date');
    }
)

export const getPress = createSelector(
    [ getContent ],
    (content) => {
        if (_.isEmpty(content)) {
            return [] 
        }

        let press = _.filter(content, (c) => {
            if (_.has(c, 'sys.contentType.sys.id')) {
                return c.sys.contentType.sys.id === 'newsItem'
            }
            return false
        })
        return _.orderBy(_.map(press, (p) => { return p.fields }), ['date'], ['desc']);
    }
)
