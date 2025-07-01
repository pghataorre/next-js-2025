
import jwt from 'jsonwebtoken';
import { TUser } from '../../posts/types';

export const validateToken =  (authToken: string) => {
    try {
        if (authToken === undefined ) {
            throw new Error('Invalid  AuthToken');
        }

        const tokenOnly = authToken.split(' ')[1];
        const decoded = jwt.verify(tokenOnly, process.env.JWT_SECRET as string);
        return (decoded as { id: string }).id;
        
    } catch(error) {
        console.log('validating authToken --------- ', error);
        return undefined;
    }
}

export const findUser = (userId: string, usersCollection: TUser[]) => {
    const userFound = usersCollection.filter((user: TUser) => user.id === userId);
    return {...userFound[0]};
}
