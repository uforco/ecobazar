'use server'

export const forgetpassword = async (data: {
    email: string;
    userAgent: { browser: string , deviceType: string, os: string }
}) => {
    try{
        const restP_token = await fetch('http://localhost:4000/web/forget_passwoard/create-link', {
            method: 'POST',
            headers: { "Content-Type": "application/json",},
            body: JSON.stringify(data)
        }).then((res)=> res.json())
        console.log(restP_token)
        return restP_token
    }catch(err){
        console.log('rest password token issue with server')
        return {error: 'something this wrong code - f1'}
    }
}

export const forgetpassword_submit = async (data: { newpassword: string }, url: string) => {
    try{
        const restP_result = await fetch(`http://localhost:4000/web/forget_passwoard/submit_passward/${url}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json",},
            body: JSON.stringify(data)
        }).then((res)=> res.json())
        return restP_result
    }catch(err){
        console.log('rest password token issue with server')
        return {error: 'something this wrong code - f1'}
    }
}