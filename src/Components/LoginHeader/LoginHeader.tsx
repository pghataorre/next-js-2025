import { TUser } from "@/app/posts/types";
import ProfileIcon from "../Icons/ProfileIcon/ProfileIcon";
import style from './LoginHeader.module.css';

type TLoginHeader = {
    handleShowLogin: () => void;
    showLogin: boolean;
    isLoggedIn: boolean;
    userDetails: TUser | undefined;
}

const LoginHeader = ({handleShowLogin, showLogin, isLoggedIn, userDetails}: TLoginHeader) => {
    return(
    <div className={style['login-header-container']}>
        {
            isLoggedIn 
            ? (<>
                    <div className={style['icon-container']}>
                        <div><ProfileIcon /></div>
                        <div>{userDetails?.user?.name || 'Welcome'}</div>
                    </div>
                </>)
            : (<button onClick={handleShowLogin}>{showLogin ? 'Close Login Form': 'Login' }</button>)
        }
    </div>
    )
}

export default LoginHeader;
