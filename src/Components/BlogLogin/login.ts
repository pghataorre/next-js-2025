import config from '@/config';

type TFormLogin = {
    username: string | undefined;
    password: string | undefined;
}

const logIn = async (formDetails: TFormLogin) => {
    const {username, password} = formDetails;

    const res = await fetch(`${config.apiUrl}/login`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "body": JSON.stringify({
            username,
            password
        })
    });

    const response = await res.json();
    return response;
}

export default logIn;