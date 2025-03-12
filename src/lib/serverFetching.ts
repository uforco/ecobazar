interface optionProps {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}


async function serverFetching (url: string, option?: optionProps ){
    const {method, headers, body} = option || {}

    if(method) method.toUpperCase();
    return await fetch(`http://localhost:4000/web${url}`, {
        method: method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: body
    })
};

export default serverFetching;