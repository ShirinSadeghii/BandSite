// console.log("Hello");


class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
    }

    async getComments() {
        const response = await axios.get (`${this.baseURL}/comments?api_key=${this.apiKey}`);
        response.data.sort((a,b) => {
            return b.timestamp - a.timestamp;
        });
        return response.data;
    }

    async postComments(newComment) {
        const response = await axios.post (`${this.baseURL}/comments?api_key=${this.apiKey}`, newComment);
        return response.data;    
    }

    async getShows() {
        const response = await axios.get (`${this.baseURL}/showdates?api_key=${this.apiKey}`);
        return response.data;
    }
}

// New instance of BandSiteAPI
const bandSiteAPI = new BandSiteAPI("980bfdc7-c795-45a5-b04e-1bcc64308cae");


export default BandSiteAPI;