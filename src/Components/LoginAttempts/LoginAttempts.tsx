import style from './LoginAttempts.module.css';

type TLoginAttempts = {
    badAttempt: number;
}


const LoginAttempts = ({badAttempt}: TLoginAttempts) => {
    return (
        <>
            {(badAttempt > 0 && badAttempt < 3) && <h2 className={style['attempts']}>Your Username or password are not correct, please try again</h2>}
            {badAttempt === 3 && <h2 className={style['attempts']}>You have had 3 attempts try logging in after 10 mins</h2>}
        </>
    )
}

export default LoginAttempts;

