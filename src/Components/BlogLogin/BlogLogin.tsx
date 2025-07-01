import { SyntheticEvent, useRef, useState } from "react";
import logIn from './login';
import style from './BlogLogin.module.css';
import LoginHeader from "../LoginHeader/LoginHeader";
import { TUser } from "@/app/posts/types";
import LoginAttempts from "../LoginAttempts/LoginAttempts";


type TBlogLogin = {
    isLoggedIn: boolean;
    setIsLoggedIn: (logInState: boolean) => void;
}

const BlogLogin = ({isLoggedIn, setIsLoggedIn}: TBlogLogin): JSX.Element => {
    const [submitForm, setSubmitForm] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [badAttempt, setBadAttempt] = useState<number>(0);
    const [userDetails, setUserDetails] = useState<TUser | undefined>(undefined);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    }

    const handleSubmit = async(event: SyntheticEvent) => {
        event.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const formDetails = {username, password};
        try {
            const result = await logIn(formDetails);
            if(result.foundUser) {
                setSubmitForm(true);
                setUserDetails((prev) => !prev ? result : prev);
                setIsLoggedIn(true);
                setBadAttempt(0);
            } else {
                setBadAttempt((prev) => prev + 1);
            }

        } catch(e) {
            console.log(e);
            return undefined;
        }
    }

    return (
        <div className={style['blog-login-container']}>
            <LoginHeader 
                handleShowLogin={handleShowLogin}
                showLogin={showLogin} 
                isLoggedIn={isLoggedIn}
                userDetails={userDetails}
            />
            {
                submitForm ? (
                    <h2>Logged In</h2>
                ) : (
                <>
                    <div className={showLogin ? style['show-login'] : style['hide-login']}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">
                                <span>USERNAME:</span>
                                <input type="text" name="username" id="username" placeholder="Username" ref={usernameRef}/>
                            </label>
                            <label htmlFor="password">
                                <span>PASSWORD:</span>
                                <input type="password" name="password" id="password" placeholder="Password" ref={passwordRef}/>
                            </label>
                            <label htmlFor="submitform">
                                <button type="submit" name="submitform" id="submitform">Login</button>
                            </label>
                            <LoginAttempts badAttempt={badAttempt} />
                        </form>
                    </div>
                </>
                )
            }
        </div>
    )
}

export default BlogLogin;
