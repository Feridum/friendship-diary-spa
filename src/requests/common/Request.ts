
export interface RequestProps {
    url: string,
    method: string,
    body?:  any
}


export const Request = async ({url, method, body}: RequestProps) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    return response.json();
}