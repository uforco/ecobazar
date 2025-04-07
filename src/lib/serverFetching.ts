import auth from "@/auth";
import { cookies } from "next/headers";

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
    const res = await fetch(`${process.env.DB_SERVER_URL}${url}`, {
        method: method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessBearer}`,
            ...headers
        },
        body: body
    })
    if(res?.status === 200){
        //console.log(" GO Now res ", res?.status)
        return res
    }
    if(res?.status === 401 || res?.status === 403){
        const cookieStore = await cookies();
        cookieStore.delete("next-auth.session-token");
        cookieStore.delete("__Secure-next-auth.session-token");

        // cookieStore.getAll().forEach((cookie) => {
        //     cookieStore.delete(cookie.name);
        // });

        return undefined
    }
    return res
};

export default serverFetching;


export const userid: string = 'cm80bbde50000dj1kezlho2m6'