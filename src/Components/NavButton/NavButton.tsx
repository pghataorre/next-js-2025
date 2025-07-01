'use client';

import style from './NavButton.module.css';
import { useRouter } from 'next/navigation';

type IButton = {
    buttonTitle: string;
    pageUrl: string;
}

const NavButton = ({buttonTitle, pageUrl}: IButton) => {

    const router = useRouter();

    const navigateTo = () => {
        router.push(pageUrl);
    }

    return(
        <button className={style['nav-button']} onClick={navigateTo}>
            {buttonTitle}
        </button>
    )
}

export default NavButton;