export interface RequestProps {
    url: string,
    method: string,
    body?:  any
}


export const Request = async ({url, method, body}: RequestProps, requireAuth = true) => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (requireAuth) {
        headers['Authorization'] = `Bearer ${localStorage.getItem('auth')}`
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method,
        body: JSON.stringify(body),
        headers,
    })

    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem('auth');
        }

        return {
            ...response,
            error: true
        }
    }

    return response.json();
}