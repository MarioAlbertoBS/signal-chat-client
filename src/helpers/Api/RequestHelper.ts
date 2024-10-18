// const baseUrl = 'http://localhost:5000/api';
export const baseUrl = 'https://mario-signal-chat-gddqf7fud4exg6ez.canadacentral-01.azurewebsites.net/api';
export const apiUrl = baseUrl.concat('/api');

export async function makeRequest(url: string, method: string = 'GET', body: string|null = null, headers = {}) {
    try {
        const response = await fetch(apiUrl.concat(url), {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: body
        });

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

async function requestWithBody(url: string, method: string = 'GET', body: string|null = null, headers = {}) {
    try {
        const response = await makeRequest(url, method, body, headers);

        return await response?.json();
    } catch (error) {
        console.error(error);
    }

    return null;
}

export default requestWithBody;