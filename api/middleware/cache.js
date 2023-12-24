const getExpeditiousCache = require('express-expeditious');

const defaultOptions = {
    namespace: 'expresscache',
    defaultTtl: '15 minute',
    statusCodeExpires: {
        404: '5 minutes',
        500: '1 minute',
        403: '1 minute',
        401: '1 minute',
        400: '1 minute',
    }
}

const cacheInit = getExpeditiousCache(defaultOptions);

module.exports = {
    cacheInit
}