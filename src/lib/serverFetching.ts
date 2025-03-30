import auth from "@/auth";

interface optionProps {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}

async function serverFetching (url: string, option?: optionProps ){
    const {method, headers, body} = option || {}
    const session = await auth();
    const accessBearer = session?.accessBearer || '';
    if(method) method.toUpperCase();
    return await fetch(`http://localhost:4000/web${url}`, {
        method: method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessBearer}`,
            ...headers
        },
        body: body
    })
};

export default serverFetching;


export const userid: string = 'cm80bbde50000dj1kezlho2m6'