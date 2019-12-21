const path = require("path"),
    helper = require(path.resolve("./common/helper")),
    requestValidator = require(path.resolve("./components/stringCount/stringRequestValidator")),
    requestService = require(path.resolve("./common/requestService")),
    stringParser = require(path.resolve("./components/stringCount/stringParser")),
    constants = require(path.resolve('./common/constants'));

class stringCountManager {

    /**
     * Function to get N number of recurring strings
     * @param {Object} query
     * @return {Promise}
     */
    async getReccuringStrings(query) {
        requestValidator.validateStringRecurringRequest(query); //validate request for url and count
        try {
            let body = await requestService.getHTML(query.url); //get response using request module
            let string = body.body.replace(/[^A-Za-z ]+/g, ''); //remove numbers and special characters from the string

            let stringObject = this.findWordFreq(string); // find frequency of each word
            let stringArray = stringParser.parseStringsToArray(stringObject); //map object to array

            stringArray.sort((a, b) => b.count - a.count); //sort array by descending
            if (stringArray.length > query.count) stringArray.length = query.count; // set array length to count from query

            return helper.createSuccessResponse(stringArray);
        } catch (error) {
            let data = {
                status: constants.RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
                error: constants.MESSAGES.ERROR.INTERNAL_SERVER_ERROR,
                message: error
            }
            throw helper.createErrorResponse(data);
        }
    }

    /**
     * Function to compute no of string occurences
     * @param {String} string
     * @return {Object}
     */
    findWordFreq(string) {
        let words = string.match(/\w+/g);//regex to split string by spaces and get as an array
        let freqMap = {};
        words.forEach(function(w) { //function iterates over each object and creates new object if string not found, else adds +1
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });    
        return freqMap;
    }
}

module.exports = new stringCountManager();