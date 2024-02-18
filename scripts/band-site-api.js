const baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';

export async function getApiKey() {
    try {
        const resp = await axios.get(`${baseUrl}/register`);
        return resp.data.api_key;
    } catch (error) {
        console.error('Failed to get API Key: ', error);
        throw error;
    }
}
export class BandSiteApi {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async postComment(comment) {
        try {
            const headers = {
                'Content-Type': 'application/json',
            };
            const apiUrl = `${baseUrl}/comments?api_key=${this.apiKey}`;
            const requestBody = comment;
            const response = await axios.post(apiUrl, requestBody, { headers });
            return response.data;
        } catch (error) {
            console.error('Failed posting comment: ', error);
            throw error;
        }
    }
    async getComments() {
        try {
            const apiUrl = `${baseUrl}/comments?api_key=${this.apiKey}`;
            const response = await axios.get(apiUrl);
            return response.data;
            console.log(response);
        } catch (error) {
            console.error('Failed getting comments: ', error);
            throw error;
        }
    }
    async getShows() {
        try {
            const apiUrl = `${baseUrl}/showdates?api_key=${this.apiKey}`;
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.error('Failed getteing shows: ', error);
            throw error;
        }
    }
}