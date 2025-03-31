'use server'

export const forgetpassword = async (email: string) => {
    try{
        if(!email){
            return {error: 'check your email'}
        }
        const restP_token = await fetch('http://localhost:4000/web/forget_passwoard/create-link', {
            method: 'POST',
            headers: { "Content-Type": "application/json",},
            body: JSON.stringify({
                email: email
            })
        }).then((res)=> res.json())
        console.log(restP_token)
        return restP_token
    }catch(err){
        console.log('rest password token issue with server')
        return {error: 'something this wrong code - f1'}
    }
}