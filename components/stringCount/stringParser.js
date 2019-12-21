/**
 * Function to parse string object to array
 * @param {Object} string
 * @return {Array}
*/

class stringParser {

    parseStringsToArray(stringObject) {
        let count = 1,
            stringArray = [];
        Object.keys(stringObject).forEach((string) => {
            stringArray[count] = {
                name: string,
                count: stringObject[string]
            }
            count++;
        })
        return stringArray;
    }
}

module.exports = new stringParser();