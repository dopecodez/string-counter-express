const path = require("path"),
    helper = require(path.resolve("./common/helper")),
    constants = require(path.resolve('./common/constants'));

class stringRequestValidator {
    /**
     * Function to validate input and throw error if not valid
     * @param req {Object}
     */
    validateStringRecurringRequest(query){
        if (!query.url) { //Checking if url exists
            let data = {
                status: constants.RESPONSE_STATUS.BAD_REQUEST,
                error: constants.MESSAGES.ERROR.URL_MISSING,
                message: constants.MESSAGES.ERROR.BAD_REQUEST
            }
            throw helper.createErrorResponse(data);
        }
        if (!helper.isValidUrl(query.url)){ //checking if url is valid
            let data = {
                status: constants.RESPONSE_STATUS.BAD_REQUEST,
                error: constants.MESSAGES.ERROR.BAD_URL,
                message: constants.MESSAGES.ERROR.BAD_REQUEST
            }
            throw helper.createErrorResponse(data);
        }
        if(!query.count){ //checking if count exits
            let data = {
                status: constants.RESPONSE_STATUS.BAD_REQUEST,
                error: constants.MESSAGES.ERROR.STRING_NUMBER_MISSING,
                message: constants.MESSAGES.ERROR.BAD_REQUEST
            }
            throw helper.createErrorResponse(data);
        }
        return true;
    }
}

module.exports = new stringRequestValidator();