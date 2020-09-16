const axios = require('axios');

const axiosGetRequest = () => axios.get('http://localhost:3001');

const request = (n, type) => {
    return type === 'SYNC' ? handleSyncRequests(n) : handleAsyncRequests(n);
    /*switch (type) {
        case 'ASYNC': return handleAsyncRequests(n);
        case 'SYNC':  return handleSyncRequests(n);
        default: return handleAsyncRequests(n);
    }*/
}

const handleAsyncRequests = async (n) => {
    let repsonses = [];
    for (let i = 0; i < n; i++) {
        const response = await axiosGetRequest();
        repsonses.push(response);
    }
    return repsonses;
}

const handleSyncRequests = async (n) => {
    let requests = new Array(n);
    requests.fill(axiosGetRequest());
    
    return axios.all(requests);
}

module.exports = request;