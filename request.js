async function postData(url, data) {
    const start = performance.now();
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(data)
        });

        const duration = performance.now() - start;

        if (!response.ok) {
            // Handle HTTP errors (400 series error , 500 series error)
            const errorBody = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorBody}`);
        }

        return { data: await response.json(), duration };

    } catch (networkError) {
        // Handle network failures, timeouts, CORS
        throw new Error(`Request failed after ${performance.now() - start}ms: ${networkError.message}`);
    }
}