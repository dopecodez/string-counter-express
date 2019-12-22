let chai = require('chai'),
    chaiHttp = require('chai-http'),
    path = require("path"),
    stringManager = require(path.resolve("./components/stringCount/stringManager")),
    stringParser = require(path.resolve("./components/stringCount/stringParser")),
    app = require('../../app');

// Configure chai
chai.use(chaiHttp);
let expect = chai.expect;

//test function to check whether getting count api works
describe('String Count e2e check', () => {
    it('url missing - fails', async function () {  
        try {
            let res = await chai.request(app)
                .get('/count?count=25')
                .send();
            expect(res).to.have.status(400);
        }
        catch (err) {
            throw err;
        } 
    }),
    it('count missing - fails', async function () {  
        try {
            let res = await chai.request(app)
                .get('/count?url=https://terriblytinytales.com/test.txt')
                .send();
            expect(res).to.have.status(400);
        }
        catch (err) {
            throw err;
        } 
    }),
    it('completes successfully', async function () {  
        try {
            let res = await chai.request(app)
                .get('/count?url=https://terriblytinytales.com/test.txt&count=25')
                .send();
            expect(res).to.have.status(200);
        }
        catch (err) {
            throw err;
        } 
    });
});

describe('String count unit tests' , ()=>{
    it('finds word frequency', () => {
        let string = "this is a this type of this";
        let wordFreq = stringManager.findWordFreq(string);
        expect(wordFreq).to.own.include({this:3});
    }),
    it('object parse to array', () => {
        let string = "this is a this type of this";
        let wordFreq = stringManager.findWordFreq(string);
        let wordArr = stringParser.parseStringsToArray(wordFreq);
        expect(wordArr).to.to.deep.include({name: 'this', count :3});
    });
});
