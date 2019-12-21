let request = require('async-request');

class RequestService {
    /**
     * Function to get response for a given url
     * @param url {string}
     * @return {Promise}
     */
    async getHTML(url) {
        try {
            let data = await request(url);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new RequestService();