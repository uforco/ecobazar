interface optionProps {
    method?: string;
    headersProps?: Record<string, string>;
}


async function serverFetching (url: string, option?: optionProps ){
    const {method, headersProps} = option || {}

    if(method) method.toUpperCase();
    return await fetch(`http://localhost:4000/web${url}`, {
        method: method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headersProps
        }
    })
};

export default serverFetching;