let path = require('path'),
    constants = require(path.resolve('./common/constants'));

class Helper {

    /**
     * create commons error structure for all apis
     * @param config {Object}
     * @return {Object}
     */
    createErrorResponse(data) {
        let response = {
            status: data.status || constants.RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
            error: data.error,
            message: data.message,
            success: false
        };
        return response;
    }

    /**
    * create commons success response structure for all apis
    * @param data {Object}
    * @param options {Object}
    * @return {Object}
    */
    createSuccessResponse(data, options) {
        if (!options) {
            options = {};
        }
        let response = {
            status: options.status || constants.RESPONSE_STATUS.SUCCESS,
            data: data,
            message: options.message || constants.MESSAGES.SUCCESS.DATA_POPULATED,
            success: true
        };
        return response;
    }

    /**
    * check if valid url string using regex
    * @param {String} str
    * @return {Boolean}
    */
    isValidUrl(str) {
        let regexp = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})');
        if (regexp.test(str)) {
            return true;
        }
        else {
            return false;
        }
    }

}

module.exports = new Helper();

