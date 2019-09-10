const contentful = require('contentful');
const config = require('./config');

const client = contentful.createClient({
    space: config.SPACE_ID,
    accessToken: config.CONTENTFUL_ACCESS_TOKEN 
});

module.exports = client;
