import config from "@/config";

type TUser = {
    username: string;
    password: string;
}

const getUser = async (userDetails: TUser, getAll?:boolean) => {
    const res = await fetch(`${config.baseServerApi}/users`);

    if(!res.ok) {
        throw new Error('AN ERROR OCCURRED IN GETTING USER LOGIN');
    }

    const {username, password} = userDetails;
    const result = await res.json();

    if (!getAll) {
        const userFound = result.filter((user: TUser) => username === user.username && password === user.password);
        return {...userFound[0]};
    } else {
        return result;
    }
}

export default getUser;