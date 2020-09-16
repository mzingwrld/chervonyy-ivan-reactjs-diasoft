const request = require("./request");

const axios = require('axios');
const timeout = 1000; // increase this amount if jest crashes with Timeout error

describe('request_test', function () {
    it('request_1', () => { // parallel requests
        return request(2,'SYNC')
            .then((res) => {
                expect(res.length).toBe(2);
            });
    });
}, timeout); 

describe('request_test_2', function () {
	it('request_2', () => { // sequential requests
        return request(3,'ASYNC')
            .then((res) => {
                expect(res.length).toBe(3);
            });
    });
}, timeout);